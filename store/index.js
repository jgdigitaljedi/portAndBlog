import coding from '~/content/directory/coding';
import gaming from '~/content/directory/gaming';

export const state = () => ({
  state: {
    posts: [],
    post: {},
    mobileNav: false
  }
});

export const getters = {
  // getNav(state) {
  //   console.log('this.state', state);
  //   return state.mobileNav;
  // }
  getNav: state => state.mobileNav
};

export const setters = {
  resetNav: state => (state.mobileNav = false)
};

export const mutations = {
  updatePosts(state, { posts }) {
    state.posts = posts;
  },
  updatePost(state, { post }) {
    state.post = post;
  },
  toggleMobileNav(state) {
    console.log('toggleNav', state);
    state.mobileNav = !state.mobileNav;
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
  }
};
