import coding from '~/content/directory/coding';
import gaming from '~/content/directory/gaming';

export const state = () => ({
  scrollPos: 0,
  state: {
    posts: [],
    post: {},
    mobileNav: false,
    scrollPos: 0,
    gdprAnswered: null
  }
});

export const getters = {
  getNav: state => state.mobileNav,
  getScroll: state => state.scrollPos,
  getGdpr: state => state.gdprAnswered
};

export const mutations = {
  updatePosts(state, { posts }) {
    state.posts = posts;
  },
  updatePost(state, { post }) {
    state.post = post;
  },
  toggleMobileNav(state) {
    state.mobileNav = !state.mobileNav;
  },
  navReset(state) {
    state.mobileNav = false;
  },
  setScroll(state, scroll) {
    state.scrollPos = scroll;
  },
  setGdpr(state, gdpr) {
    state.gdprAnswered = gdpr;
  }
};

export const actions = {
  getPostWithSlug({ commit, state }, obj) {
    let post = state.posts[obj.which].find(post => {
      return post.slug === obj.slug;
    });
    commit('updatePost', { post: post });
  },
  getPosts({ commit }) {
    commit('updatePosts', {
      posts: { coding: coding().reverse(), gaming: gaming().reverse() }
    });
  },
  resetNav: state => {
    state.state.mobileNav = false;
  }
};
