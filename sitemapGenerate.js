const esmImport = require('esm')(module);
const Coding = esmImport('./content/directory/coding');
const Gaming = esmImport('./content/directory/gaming');
const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');
const marked = require('marked');
const convert = require('xml-js');
const util = require('util');

const codingArr = Coding.default().map(item => {
  return { url: `/blog/coding/${item.slug}`, item };
});
const gamingArr = Gaming.default().map(item => {
  return { url: `/blog/gaming/${item.slug}`, item };
});
const posts = [...codingArr, ...gamingArr];
const sitemapXml = fs.readFileSync(path.resolve(__dirname, 'dist/sitemap.xml'), 'utf8');
const sitemapJson = convert.xml2js(sitemapXml, { compact: true, spaces: 2 });
const smUrls = sitemapJson.urlset.url;

function writeSitemap(xmlObj) {
  const sitemapJsonShell = sitemapJson;
  sitemapJsonShell.urlset._attributes = {
    xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
    'xmlns:image': 'http://www.google.com/schemas/sitemap-image/1.1'
  };
  sitemapJsonShell.urlset.url = [...xmlObj.pages, ...xmlObj.blog];
  fs.writeFileSync(
    path.join(__dirname, 'sitemapTest.xml'),
    convert.js2xml(sitemapJsonShell, { compact: true, spaces: 2 })
  );
  process.exit();
}

function makeSitemapForBlogs() {
  return new Promise(resolve => {
    const xml = posts.map(post => {
      const postMd = fs.readFileSync(
        path.resolve(__dirname, `content/posts/gaming/${post.item.id}.md`),
        'utf8'
      );
      const md = marked(postMd, {
        breaks: true,
        gfm: true,
        smartypants: true
      });
      const $ = cheerio.load(md);
      return smUrls
        .filter(item => {
          return item.loc._text === `https://joeyg.me${post.url}`;
        })
        .map(item => {
          const postDate = new Date(post.item.created_at);
          item.lastmod = { _text: postDate.toISOString() };
          item['image:image'] = Array.from($('img')).map(img => {
            const src = img.attribs.src.startsWith('/')
              ? `https:${img.attribs.src}`
              : img.attribs.src;
            const imageTag = { 'image:loc': { _text: src } };
            if (img.attribs.alt) {
              imageTag['image:title'] = img.attribs.alt;
            }
            return imageTag;
          });
          return item;
        })[0];
    });
    resolve(xml);
  });
}

function makeSitemapForPages() {
  return new Promise(resolve => {
    const xml = [
      {
        built: 'index.html',
        raw: ['pages/index.vue', 'components/NavBar.vue', 'components/Social.vue']
      },
      {
        built: 'about/index.html',
        raw: [
          'pages/about.vue',
          'components/about/contact.vue',
          'components/about/general.vue',
          'components/about/site.vue',
          'components/about/tech.vue',
          'components/about/work.vue'
        ]
      },
      { built: 'blog/index.html', raw: ['pages/blog/index.vue'] },
      {
        built: 'blog/coding/index.html',
        raw: [
          'pages/blog/coding/index.vue',
          'components/blog/blogComments.vue',
          'components/blog/blogContent.vue',
          'components/blog/blogHeader.vue',
          'components/blog/blogListContainer.vue',
          'components/blog/blogListItem.vue',
          'components/blog/blogListMaster.vue',
          'components/blog/blogPostSlug.vue'
        ]
      },
      {
        built: 'blog/gaming/index.html',
        raw: [
          'pages/blog/gaming/index.vue',
          'components/blog/blogComments.vue',
          'components/blog/blogContent.vue',
          'components/blog/blogHeader.vue',
          'components/blog/blogListContainer.vue',
          'components/blog/blogListItem.vue',
          'components/blog/blogListMaster.vue',
          'components/blog/blogPostSlug.vue'
        ]
      }
    ].map(page => {
      // read the file
      const file = fs.readFileSync(path.resolve(__dirname, 'dist/', page.built));

      // parse html with cheerio
      const $ = cheerio.load(file);

      // build the loc tag
      const route = `https://joeyg.me/${page.built}`;
      const routeSplit = route.split('/');
      routeSplit.pop();
      const routeCleaned = routeSplit.join('/');

      // build the lastmod tag
      const lastmodDate = page.raw
        .map(file => {
          const stats = fs.statSync(path.resolve(__dirname, file));
          return new Date(util.inspect(stats.mtime));
        })
        .sort((a, b) => {
          return a < b ? 1 : a > b ? -1 : 0;
        })[0];

      // build the images tags
      const images = Array.from($('img'))
        .filter(img => !img.attribs.src.startsWith('data'))
        .map(img => {
          const src = img.attribs.src.startsWith('/')
            ? `https:${img.attribs.src}`
            : img.attribs.src;
          const imageTag = { 'image:loc': { _text: src } };
          if (img.attribs.alt) {
            imageTag['image:title'] = img.attribs.alt;
          }
          return imageTag;
        });
      return {
        loc: { _text: routeCleaned },
        lastmod: { _text: lastmodDate.toISOString() },
        'image:image': images
      };
    });
    resolve(xml);
  });
}

(function() {
  Promise.all([makeSitemapForBlogs(), makeSitemapForPages()]).then(result => {
    writeSitemap({ blog: result[0], pages: result[1] });
  });
})();
