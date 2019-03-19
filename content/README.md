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
<a href="https://wherever.stuff" target="__blank">
  <div class="image-container">
    <img src="/images/blog/gaming_or_coding/image_name.jpg" alt="image description">
  </div>
</a>
```
