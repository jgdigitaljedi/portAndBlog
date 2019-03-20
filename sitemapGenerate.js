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

function writeSitemap(xml) {
  const sitemapJsonShell = sitemapJson;
  sitemapJsonShell.urlset._attributes = { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' };
  sitemapJsonShell.urlset.url = xml;
  fs.writeFileSync(
    path.join(__dirname, 'sitemapTest.xml'),
    convert.js2xml(sitemapJsonShell, { compact: true, spaces: 2 })
  );
}

function makeSitemap() {
  return new Promise((resolve, reject) => {
    const xml = posts.map((post, index) => {
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
            // const imageTag = { 'image:image': { 'image:loc': { _text: src } } };
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

(function() {
  makeSitemap().then(xml => {
    writeSitemap(xml);
  });
})();
