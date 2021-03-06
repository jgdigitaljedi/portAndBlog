import Vue from 'vue';
import VueDisqus from 'vue-disqus';
import BlogContent from '~/components/blog/blogContent.vue';
import BlogComments from '~/components/blog/blogComments.vue';
import BlogListItem from '~/components/blog/blogListItem.vue';
import BlogListContainer from '~/components/blog/blogListContainer.vue';
import BlogHeader from '~/components/blog/blogHeader.vue';
import BlogListMaster from '~/components/blog/blogListMaster.vue';
import BlogPostSlug from '~/components/blog/blogPostSlug.vue';

Vue.use(VueDisqus);
Vue.component('blogContent', BlogContent);
Vue.component('blogComments', BlogComments);
Vue.component('blogListItem', BlogListItem);
Vue.component('blogListContainer', BlogListContainer);
Vue.component('blogHeader', BlogHeader);
Vue.component('blogListMaster', BlogListMaster);
Vue.component('blogPostSlug', BlogPostSlug);
