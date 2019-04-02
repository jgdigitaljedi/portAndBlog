const esmImport = require('esm')(module); // it was this or a whole babel config
const Coding = esmImport('./content/directory/coding');
const Gaming = esmImport('./content/directory/gaming');
const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');
const marked = require('marked');
const convert = require('xml-js');
const util = require('util');

// array of coding blogs from content/directory/coding.js
const codingArr = Coding.default().map(item => {
  return { url: `/blog/coding/${item.slug}`, item };
});
// array of gaming blogs from content/directory/gaming.js
const gamingArr = Gaming.default().map(item => {
  return { url: `/blog/gaming/${item.slug}`, item };
});
const posts = { coding: [...codingArr], gaming: [...gamingArr] };
// declare here & hoist later because requiring now would try to load sitemap.xml before it exists
let sitemapXml, sitemapJson, smUrls;

// function that writes the sitemap.xml file
function writeSitemap(xmlObj) {
  const sitemapJsonShell = sitemapJson;
  // set urlset attributes
  sitemapJsonShell.urlset._attributes = {
    xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
    'xmlns:image': 'http://www.google.com/schemas/sitemap-image/1.1',
    'xmlns:news': 'http://www.google.com/schemas/sitemap-news/0.9',
    'xmlns:xhtml': 'http://www.w3.org/1999/xhtml',
    'xmlns:mobile': 'http://www.google.com/schemas/sitemap-mobile/1.0',
    'xmlns:video': 'http://www.google.com/schemas/sitemap-video/1.1'
  };
  // add newly formatted urls with lastmod and images
  sitemapJsonShell.urlset.url = [...xmlObj.pages, ...xmlObj.blog];
  // write the sitemap
  fs.writeFileSync(
    path.join(__dirname, 'dist/sitemap.xml'),
    convert.js2xml(sitemapJsonShell, { compact: true, spaces: 2 })
  );
  // process.exit();
  console.log('Sitemap enhanced with image and lastmod tags');
}

// logic for generating sitemap data for blog posts
function makeSitemapForBlogs() {
  return new Promise(resolve => {
    const keys = Object.keys(posts);
    const xml = [].concat.apply(
      [],
      keys.map(key => {
        return posts[key].map(post => {
          // get the post md file content
          const postMd = fs.readFileSync(
            path.resolve(__dirname, `content/posts/${key}/${post.item.id}.md`),
            'utf8'
          );
          // parse the md file into html
          const md = marked(postMd, {
            breaks: true,
            gfm: true,
            smartypants: true
          });
          // load the md html into cheerio for jQuery style selecting of elements
          const $ = cheerio.load(md);
          return (
            smUrls
              // only generate for blog posts
              .filter(item => {
                return item.loc._text === `https://joeyg.me${post.url}`;
              })
              .map(item => {
                // convert post created date string to JS date object
                const postDate = new Date(post.item.created_at);
                // convert date object to ISO string and assign to lastmod tag for url
                item.lastmod = { _text: postDate.toISOString() };
                // set the 'image:image' attribute to an array with the image data
                item['image:image'] = Array.from($('img')).map(img => {
                  // format image url to have https:// if lacking
                  const src = img.attribs.src.startsWith('/')
                    ? img.attribs.src.startsWith('/_nuxt')
                      ? `https://joeyg.me${img.attribs.src}`
                      : `https:${img.attribs.src}`
                    : img.attribs.src;
                  // assign image:loc
                  const imageTag = { 'image:loc': { _text: src } };
                  if (img.attribs.alt) {
                    // if image has alt text assign it to be image:title
                    imageTag['image:title'] = img.attribs.alt;
                  }
                  return imageTag;
                });
                return item;
              })[0]
          );
        });
      })
    );
    resolve(xml);
  });
}

function makeSitemapForPages() {
  return new Promise(resolve => {
    // built is path for generated html file; raw is array of component vue files that makeup the generated html
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
      },
      {
        built: 'privacyPolicy/index.html',
        raw: ['pages/privacyPolicy.vue']
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

      // build the lastmod tag using file stats
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
            ? img.attribs.src.startsWith('/_nuxt')
              ? `https://joeyg.me${img.attribs.src}`
              : `https:${img.attribs.src}`
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

// self invoking function
(function() {
  // hoist here because sitemap.xml doesn't exist on load but will on execute
  sitemapXml = fs.readFileSync(path.resolve(__dirname, 'dist/sitemap.xml'), 'utf8');
  sitemapJson = convert.xml2js(sitemapXml, { compact: true, spaces: 2 });
  smUrls = sitemapJson.urlset.url;

  // once both promises are resolved, call writeSitemap and pass results
  Promise.all([makeSitemapForBlogs(), makeSitemapForPages()]).then(result => {
    writeSitemap({ blog: result[0], pages: result[1] });
  });
})();
