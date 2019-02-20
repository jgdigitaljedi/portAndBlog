import coding from '~/content/directory/coding';
import gaming from '~/content/directory/gaming';

export const state = () => ({
  state: {
    posts: [],
    post: {}
  }
});

export const mutations = {
  updatePosts(state, { posts }) {
    state.posts = posts;
  },
  updatePost(state, { post }) {
    state.post = post;
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
