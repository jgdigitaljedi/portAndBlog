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
    const images = $('img').attr('src');
    console.log('images', images);
  });
})();
// }