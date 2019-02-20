import Vue from 'vue';
import VueDisqus from 'vue-disqus';
import BlogContent from '~/components/blog/blogContent.vue';
import BlogComments from '~/components/blog/blogComments.vue';
import BlogListItem from '~/components/blog/blogListItem.vue';

Vue.use(VueDisqus);
Vue.component('blogContent', BlogContent);
Vue.component('blogComments', BlogComments);
Vue.component('blogListItem', BlogListItem);
