import Vue from 'vue';
import VueDisqus from 'vue-disqus';
import BlogContent from '~/components/blog/blogContent.vue';
import BlogComments from '~/components/blog/blogComments.vue';

Vue.component('blogContent', BlogContent);
Vue.component('blogComments', BlogComments);
Vue.use(VueDisqus);
