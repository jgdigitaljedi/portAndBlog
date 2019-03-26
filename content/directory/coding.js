export default () => [
  {
    id: 6,
    slug: 'the-start-of-building-this-site',
    title: 'The Start of My Adventure Building This Site',
    tag_line: `My motivation for creating this site and choosing the tech stack I chose.`,
    created_at: '02/20/2019',
    pinned: false,
    intro: `A brief explanation and overview of my motivation and approach to building this portfolio and blog site while I am still very early in the process.`,
    meta: {
      keywords: 'Joey Gauthier, blog, portfolio, Nuxt, Netlify, Vue, markdown, UI, javascript',
      hashtags: 'fontend,developer',
      description: `How & why Joey Gauthier, the DigitalJedi, decided to build this portfolio, coding blog, and retro games blog.`
    },
    related: [7]
  },
  {
    id: 7,
    slug: 'design-inspiration-for-this-site',
    title: 'Design Inspiration for This Site',
    tag_line: `You try to make a pretty site using pixelated assets and 8-bit colors!`,
    created_at: '02/23/2019',
    image:
      'https://res.cloudinary.com/https-joeyg-me/image/upload/v1552515487/gaming/march_2019_collection.jpg',
    alt: `photo of Joey Gauthier's game collection circa March 2019`,
    pinned: true,
    intro:
      'My thought process behind designing this seemingly random site that would make a designer cringe.',
    meta: {
      keywords:
        'Joey Gauthier, Paul Gauthier, portfolio, blog, design, retro games, pacman, mario, atari, nintendo, UI, javascript',
      hashtags: 'design,frontend',
      description: `How Joey Gauthier made UX & UI decisions for his retro game inspired blog and portfolio.`
    },
    related: [6]
  },
  {
    id: 8,
    slug: 'generating-a-better-sitemap-for-your-nuxt-project',
    title: 'Generating a Better Sitemap for Your Nuxt Project',
    tag_line: `Want better SEO for your Nuxt site? Having a better sitemap is a good start!`,
    created_at: '03/24/2019',
    image:
      'https://res.cloudinary.com/https-joeyg-me/image/upload/v1553350718/coding/sitemap_screenshot.png',
    alt: `screenshot of VS Code with generated sitemap.xml in the editor`,
    pinned: true,
    intro:
      'How I created a script that uses the nuxt community sitemap module and enhances the sitemap.xml file that it generates.',
    meta: {
      keywords:
        'Joey Gauthier,Paul Gauthier,sitemap,nuxt sitemap,nuxt community sitemap,cheerio,sitemap SEO,xml-js',
      hashtags: 'vue,nuxt,frontend',
      description: `How to improve the sitemap file generated by the Nuxt sitemap plugin.`
    }
  }
];
