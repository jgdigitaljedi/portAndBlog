import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// import colors from 'vuetify/es5/util/colors'
// import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  iconfont: 'icomoon',
  icons: {
    clear: 'icon-cross',
    search: 'icon-search',
    pushpin: 'icon-pushpin',
    delete: 'icon-bin',
    list: 'icon-menu',
    add: 'icon-plus',
    dropdown: 'icon-circle-down'
  },
  theme: {
    primary: '#1f5673',
    secondary: '#020101',
    accent: '#2cfcfb',
    error: '#a6130e',
    warning: '#e25c23',
    info: '#054057',
    success: '#1bb61f'
  },
  customProperties: true,
  iconfont: 'mdi'
});
