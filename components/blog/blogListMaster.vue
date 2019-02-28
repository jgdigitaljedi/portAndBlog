<template>
  <section class="blog-list-master">
    <blogListContainer :posts="filteredPosts" :which="which"></blogListContainer>
    <v-card color="black" class="blog-list-master__sidebar">
      <v-card-title>
        <h4>Filters</h4>
      </v-card-title>
      <div color="black" class="blog-list-master__sidebar--filters">
        <v-autocomplete
          v-model="searchTerm"
          hint="Search Blog Titles & Keywords"
          :items="postTerms"
          label="Search"
          dark
          @input="searchPosts"
          :clearable="true"
          prepend-icon="icon-search"
          class="blog-list-master__siderbar--filters__search"
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
          prepend-icon="icon-sort-amount-desc"
        ></v-select>
        <v-switch v-model="onlyPinned" label="Pinned" @change="filterPinned"></v-switch>
      </div>
    </v-card>
  </section>
</template>

<script>
import * as _flattenDeep from 'lodash/flattenDeep';
import * as _uniq from 'lodash/uniq';
import * as _cloneDeep from 'lodash/cloneDeep';
import SortsService from '~/services/sorts';

export default {
  name: 'blogListMaster',
  props: ['posts', 'which'],
  data() {
    return {
      isMounted: false,
      postTerms: null,
      sortSelected: null,
      searchTerm: '',
      filteredPosts: [],
      cPosts: [],
      onlyPinned: false,
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
  mouted() {
    this.isMounted = true;
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
      if (this.onlyPinned) {
        this.filteredPosts = _cloneDeep(this.filteredPosts).filter(p => p.pinned);
      }
    },
    filterPinned() {
      if (this.onlyPinned) {
        this.filteredPosts = _cloneDeep(this.filteredPosts).filter(p => p.pinned);
      } else {
        this.searchPosts();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-list-master {
  display: flex;
  justify-content: space-between;
  .blog-list-master__sidebar {
    display: flex;
    flex-direction: column;
    min-width: 25rem;
    margin: 1rem 1rem 0 1rem;
    min-height: 30rem;
    .blog-list-master__sidebar--filters {
      padding: 1rem;
      .blog-list-master__siderbar--filters__search {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>