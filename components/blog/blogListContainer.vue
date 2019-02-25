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
      <v-select
        label="Sort By"
        outline
        solo
        :items="sortItems"
        item-text="label"
        return-object
        class="blog-list__search--sort"
        v-model="sortSelected"
        @change="sortPosts"
      ></v-select>
    </div>
    <v-layout row wrap class="layout-wrapper">
      <v-flex
        class="bubble-wrapper"
        :key="post.id"
        v-for="post in filteredPosts"
        :class="{'med': $vuetify.breakpoint.md, 'sml': $vuetify.breakpoint.sm, 'larg': $vuetify.breakpoint.lgAndUp, 'xsm': $vuetify.breakpoint.xs}"
      >
        <blogListItem :post="post" :which="which"></blogListItem>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import * as _flattenDeep from 'lodash/flattenDeep';
import * as _uniq from 'lodash/uniq';
import * as _cloneDeep from 'lodash/cloneDeep';
import SortsService from '~/services/sorts';

export default {
  name: 'blogListContainer',
  props: ['posts', 'which'],
  data() {
    return {
      postTerms: null,
      sortSelected: null,
      searchTerm: '',
      filteredPosts: [],
      cPosts: [],
      sortItems: [
        { label: 'Post Date - desc', key: 'dateDesc' },
        { label: 'Post Date - asc', key: 'dateAsc' },
        { label: 'Title - desc', key: 'titleDesc' },
        { label: 'Title - asc', key: 'titleAsc' }
      ]
    };
  },
  created() {
    this.sortSelected = this.sortItems[0];
    this.cPosts = _cloneDeep(this.posts);
    this.filteredPosts = _cloneDeep(this.posts);
    this.postTerms = _uniq(
      _flattenDeep(
        this.cPosts.map(post => {
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
        this.filteredPosts = this.cPosts.filter(p => p.searchTerms.indexOf(this.searchTerm) >= 0);
      } else {
        this.filteredPosts = _cloneDeep(this.cPosts);
      }
      this.sortPosts();
    },
    sortPosts() {
      switch (this.sortSelected.key) {
        case 'dateDesc':
          this.filteredPosts = SortsService.sortByDate(
            _cloneDeep(this.filteredPosts),
            'created_at'
          ).reverse();
          break;
        case 'dateAsc':
          this.filteredPosts = SortsService.sortByDate(
            _cloneDeep(this.filteredPosts),
            'created_at'
          );
          break;
        case 'titleDesc':
          this.filteredPosts = SortsService.sortAlpha(
            _cloneDeep(this.filteredPosts),
            'title'
          ).reverse();
          break;
        case 'titleAsc':
          this.filteredPosts = SortsService.sortAlpha(_cloneDeep(this.filteredPosts), 'title');
          break;
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
    justify-content: space-around;
    .blog-list__search--input,
    .blog-list__search--sort {
      width: 50%;
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