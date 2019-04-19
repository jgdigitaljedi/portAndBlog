const path = require('path');
const fs = require('fs');
const convert = require('xml-js');

let gamingRss, codingRss, gamingXml, codingXml;

function writeFile(content, filePath) {
  fs.writeFileSync(
    path.join(__dirname, filePath),
    convert.js2xml(content, { compact: true, spaces: 2 })
  );
  console.log(
    filePath + ' file cleaned with onclicks removed and puDate formatted properly for Mailchimp'
  );
}

function fixTimeStampAndRemoveClicks(file) {
  return new Promise(resolve => {
    const items = file.rss.channel.item;
    const fixedItems = items.map(post => {
      // fix the date to a format that will work with Mailchimp RSS feed mailer trigger
      const postDateSplit = post.pubDate._text.split('GMT');
      const postDateFixed = postDateSplit[0] + '+0000';
      post.pubDate._text = postDateFixed;

      // remove onclick function calls
      const content = post['content:encoded']._cdata;
      const contentCleaned = content.replace(/onclick=".*?"/g, '');
      post['content:encoded']._cdata = contentCleaned;
      return post;
    });
    file.rss.channel.item = fixedItems;
    resolve(file);
  });
}

(function() {
  gamingRss = fs.readFileSync(path.resolve(__dirname, 'dist/RSSfeed_gaming.xml'), 'utf8');
  codingRss = fs.readFileSync(path.resolve(__dirname, 'dist/RSSfeed_coding.xml'), 'utf8');
  gamingXml = convert.xml2js(gamingRss, { compact: true, spaces: 2 });
  codingXml = convert.xml2js(codingRss, { compact: true, spaces: 2 });

  Promise.all([
    fixTimeStampAndRemoveClicks(gamingXml),
    fixTimeStampAndRemoveClicks(codingXml)
  ]).then(results => {
    writeFile(results[0], 'dist/RSSfeed_gaming.xml');
    writeFile(results[1], 'dist/RSSfeed_coding.xml');
  });
})();
