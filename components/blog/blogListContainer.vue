<template>
  <section class="blog-list">
    <div class="blog-list__search">
      <v-autocomplete
        v-model="searchTerm"
        hint="Search Blog Titles & Keywords"
        :items="postTerms"
        label="Search"
        dark
        @input="searchPosts"
        :clearable="true"
        prepend-icon="icon-search"
        class="blog-list__search--input"
      ></v-autocomplete>
    </div>
    <v-layout row wrap class="layout-wrapper">
      <v-flex
        class="bubble-wrapper"
        :key="post.id"
        v-for="post in filteredPosts"
        :class="{'med': $vuetify.breakpoint.md, 'sml': $vuetify.breakpoint.sm, 'larg': $vuetify.breakpoint.lgAndUp, 'xsm': $vuetify.breakpoint.xs}"
      >
        <blogListItem :post="post" which="coding"></blogListItem>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import * as _flattenDeep from 'lodash/flattenDeep';
import * as _uniq from 'lodash/uniq';

export default {
  name: 'blogListContainer',
  props: ['posts'],
  data() {
    return {
      postTerms: null,
      searchTerm: '',
      filteredPosts: []
    };
  },
  created() {
    this.filteredPosts = this.posts;
    this.postTerms = _uniq(
      _flattenDeep(
        this.posts.map(post => {
          const tArr = post.title.split(' ');
          const kArr = post.meta.keywords.split(', ');
          post.searchTerms = [...tArr.map(t => t.toLowerCase()), ...kArr.map(k => k.toLowerCase())];
          return post.searchTerms;
        })
      )
    );
  },
  methods: {
    searchPosts() {
      if (this.searchTerm && this.searchTerm !== '') {
        this.filteredPosts = this.posts.filter(p => p.searchTerms.indexOf(this.searchTerm) >= 0);
      } else {
        this.filteredPosts = this.posts;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-list {
  .blog-list__search {
    width: 100%;
    display: flex;
    justify-content: center;
    .blog-list__search--input {
      max-width: 500px;
    }
  }
  .layout-wrapper {
    margin-left: -1rem;
    .bubble-wrapper {
      margin: 1rem 1rem 0 0;
      &.larg {
        width: calc(25% - 1rem);
      }
      &.med {
        width: calc(33% - 1rem);
      }
      &.sml {
        width: calc(50% - 1rem);
      }
      &.xsm {
        width: 100%;
      }
    }
  }
}
</style>