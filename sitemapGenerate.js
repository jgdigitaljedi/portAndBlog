const esmImport = require('esm')(module);
const Coding = esmImport('./content/directory/coding');
const Gaming = esmImport('./content/directory/gaming');
const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');
const marked = require('marked');
var convert = require('xml-js');

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
  sitemapJsonShell.urlset._attributes = { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' };
  sitemapJsonShell.urlset.url = [...xmlObj.pages, ...xmlObj.blog];
  fs.writeFileSync(
    path.join(__dirname, 'sitemapTest.xml'),
    convert.js2xml(sitemapJsonShell, { compact: true, spaces: 2 })
  );
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

function makeSitemapForPages(blogXml) {
  return new Promise(resolve => {
    const xml = ['index.html', 'about/index.html', 'blog/index.html'].map(page => {
      const file = fs.readFileSync(path.resolve(__dirname, 'dist/', page));
      const $ = cheerio.load(file);
      const route = `https://joeyg.me/${page}`;
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
      return { loc: { _text: route }, 'image:image': images };
    });
    resolve(xml);
  });
}

(function() {
  Promise.all([makeSitemapForBlogs(), makeSitemapForPages()]).then(result => {
    writeSitemap({ blog: result[0], pages: result[1] });
  });
  // makeSitemapForBlogs().then(blogXml => {
  //   writeSitemap(blogXml);
  // });
})();
