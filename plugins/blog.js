import Vue from 'vue';
import Page from '~/components/blog/Page.vue';
import Teaser from '~/components/blog/Teaser.vue';
import Grid from '~/components/blog/Grid.vue';
import Feature from '~/components/blog/Feature.vue';
import Slide from '~/components/blog/Slide.vue';
import SitemapItem from '~/components/blog/SitemapItem.vue';

Vue.component('page', Page);
Vue.component('teaser', Teaser);
Vue.component('grid', Grid);
Vue.component('feature', Feature);
Vue.component('slide', Slide);
Vue.component('sitemap-item', SitemapItem)