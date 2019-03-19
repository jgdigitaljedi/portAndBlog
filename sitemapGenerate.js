const esmImport = require('esm')(module);
const Coding = esmImport('./content/directory/coding');
const Gaming = esmImport('./content/directory/gaming');
const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');
const marked = require('marked');

const codingArr = Coding.default().map(item => {
  return {url: `/blog/coding/${item.slug}`, item};
});
const gamingArr = Gaming.default().map(item => {
  return {url: `/blog/gaming/${item.slug}`, item};
});
const posts = [...codingArr, ...gamingArr];

// module.exports = function() {
(function() {
  return posts.map(post => {
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
    const images = [];
    $('img').each((index, img) => {
      const src = img.attribs.src.startsWith('/') ? `https:${img.attribs.src}` : img.attribs.src;
      images.push({src, alt: img.attribs.alt});
    });
    // gonna want to return link with image array in correct format for nuxt sitemap generator
    console.log('images', images);
  });
})();
// }