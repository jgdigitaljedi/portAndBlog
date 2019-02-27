[![Netlify Status](https://api.netlify.com/api/v1/badges/cfe5692f-e688-4f3e-a96d-9ea631808fe9/deploy-status)](https://app.netlify.com/sites/joeyg/deploys)

# My Portfolio & Blog

> Joey Gauthier&#39;s Portfolio

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Notes

I'm in experimental territory considering my experience with Nuxt. I've never used Nuxt and I'm trying some new things here. The idea is to eventually have a really basic portfolio (in the past mine have been WAY to complicated for a site that is rarely visited) and add a blog section. The goal for the blog section is to have it setup where I write markdown files, push to master, Netlify's webhook picks it up and auto builds, and the new blog is posted.

Right now things look a little on the rough side because this is still in active development and, quite frankly, I'm still trying to find design inspiration for some of the views.

## CURRENT FOCUS TODO

- style up blog section landing pages; maybe a Final Fantasy VII menu style for gaming blog?
- style blog posts; my repeasting background and gradient is terrible, but is a placeholder until I think of something
- add breadcrumbs to blog sections/add subnav like I did in homeControl repo
- add https://github.com/nuxt-community/feed-module and setup to generate feeds; then add feeds to feedburner, etc
- figure out postcss/autoprefixer
- figure out why pwa gradient background doesn't work (only in downloaded app)

## OVERALL TODO

- make it look nicer
- konami code easter egg trigger works, now think of something fun for it to do
- make remaining views
- add more Google Analytics functionality
- add accessibility
- add num of results dropdown to blog lists to allow user to select (not huge priority ATM because of lack of blogs)
