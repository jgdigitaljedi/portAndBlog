export const state = () => ({
  state: {
    posts: [],
    post: {}
  }
})

export const mutations = {
  updatePosts(state, { posts }) {
    state.posts = posts
  },
  updatePost(state, { post }) {
    state.post = post
  }
}

export const actions = {
  getPostWithSlug({ commit, state }, obj) {
    console.log('obj', obj)
    console.log('posts', state.posts)
    let post = state.posts[obj.which].find(post => {
      return post.slug === obj.slug
    })
    commit('updatePost', { post: post })
  },
  getPosts({ commit }) {
    commit('updatePosts', {
      posts: {
        coding: [
          {
            id: 1,
            slug: 'test-coding-blog',
            title: 'Coding Blog Test',
            created_at: '02/18/2019',
            intro: `This is a test of the whole glogging setup. We'll see if it works!`,
            meta: {
              id: 1,
              name: 'Coding Blog Test',
              content: 'Coding Blog Test'
            }
          }
        ],
        gaming: [
          {
            id: 1,
            slug: 'test-gaming-blog',
            title: 'Gaming Blog Test',
            created_at: '02/18/2019',
            meta: {
              id: 1,
              name: 'Gaming Blog Test',
              content: 'Gaming Blog Test'
            }
          }
        ]
      }
      // [
      // {
      //   id: 1,
      //   slug: 'hello-static-blogging',
      //   title: 'Hello Static Blogging',
      //   created_at: '06/27/2017',
      //   meta: {
      //     id: 1,
      //     name: 'Hello Static Blogging',
      //     content: 'Hello Static Blogging'
      //   }
      // },
      //   {
      //     id: 2,
      //     slug: 'foo-bar',
      //     title: 'Foo Bar',
      //     created_at: '10/18/2016',
      //     meta: {
      //       id: 2,
      //       name: 'Foo Bar',
      //       content: 'Foo Bar'
      //     }
      //   }
      // ]
    })
  }
}
