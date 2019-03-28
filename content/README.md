# How to add a blog

1. Created the \_\_\_.md file in the directory in which you wish the blog be posted (gaming or coding)
2. Add an object to the corresponding array in the store
3. If image used, add to 'static' directory and add path to config for after static (ex. '/images/ex.jpg')

## Notes

- I now have this setup where the routes are automatically generated and even added to the sitemap so no extra work is needed there.
- Write the post in Grammarly since you seem to be the typo king, then paste into a .md file and add html and markdown tags.

## Adding an image

User this as the wrapper:

```html
<div class="image-container">
  <img src="/images/blog/gaming_or_coding/image_name.jpg" onclick="openImage(`/images/blog/gaming_or_coding/image_name.jpg`)" alt="image description">
</div>
```

and with a link:

```html
<a href="https://wherever.stuff" target="__blank" rel="external noopener">
  <div class="image-container">
    <img src="/images/blog/gaming_or_coding/image_name.jpg" alt="image description">
  </div>
</a>
```

## JS file blog entries

The entries are entered in either the 'coding' or 'gaming' js module in /directory and should be formatted as such:

```javascript
{
    id: 6, // basically the next available number to name the md file of the post
    slug: 'the-struggle-of-hookinh-it-all-up', // URL friendly string for route
    title: `Connecting All of Those Consoles`, // title to appear in header
    tag_line: `Don't just collect em, play em too!`, // string to appear under title
    created_at: '03/02/2019', // MM/DD/YYYY formatted string for date of post
    pinned: false, // have it be pinned on the blog section page
    intro: `An overview of how I keep all of my consoles connected to my 4K TV for the best picture possible on a budget.`, // string that shows up on blog section page
    image: // image link; host these in Cloudinary so we don't flood the repo with images
      'https://res.cloudinary.com/https-joeyg-me/image/upload/v1552515483/gaming/cable_mess.jpg',
    alt: `image of messy cables, power strips, power adapters for retro game consoles`, // string for image alt text
    meta: {
      keywords:
        'gaming,nes,retro games,genesis,dreamcast,retro game collecting,vintage video games,upscaler,RGB,HD TV,4k', // keywords meta
      hashtags: 'retrogames,RETROGAMING', // hashtags for Twitter and FB social sharing buttons
      description: `Hooking up retro game consoles to a HD or 4K TV using switchers & upscalers.` // description meta
    },
    related: [7, 8], // array of ids corresponding to post ids that this post is related to
    headers: ['Some header text here'] // array of h2 headers. This is necessary so the "jump To..." widget loads immediately so the layout works and the y positiong can be populated later
  },
```
