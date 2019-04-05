import coding from '~/content/directory/coding';
import gaming from '~/content/directory/gaming';

// strict is here since changing blog arrays setup to use barrelled exports and folders for better organization
export const strict = false;

export const state = () => ({
  scrollPos: 0,
  gdprAnswered: null,
  state: {
    posts: [],
    post: {},
    mobileNav: false,
    scrollPos: 0,
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
    if (!state.gdprAnswered && scroll >= 50) {
      state.gdprAnswered = 'accept';
    }
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
      posts: { coding: coding().sort(reverseSort), gaming: gaming().sort(reverseSort) }
    });
  },
  resetNav: state => {
    state.state.mobileNav = false;
  }
};

function reverseSort(a, b) {
  if (a.id < b.id) return 1;
  if (a.id > b.id) return -1;
  return 0;
}