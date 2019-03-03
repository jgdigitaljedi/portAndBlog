<template>
  <section class="blog-list-master" :class="{'smaller': $vuetify.breakpoint.mdAndDown}">
    <blogListContainer :posts="filteredPosts" :which="which" class="blog-list"></blogListContainer>
    <div class="blog-list-master__sidebar" :class="{'md': $vuetify.breakpoint.mdAndDown}">
      <div class="blog-list-master__sidebar--title-container">
        <h4 class="blog-list-master__sidebar--title">
          <v-icon>icon-filter</v-icon>&nbsp;Filters
        </h4>
      </div>
      <div class="blog-list-master__sidebar--filters">
        <v-autocomplete
          v-model="currentFilters.searchTerm"
          hint="Search Blog Titles & Keywords"
          :items="postTerms"
          label="Search"
          dark
          @input="applyFilters"
          :clearable="true"
          prepend-icon="icon-search"
          flat
          class="blog-list-master__siderbar--filters__search posts-filter"
          :class="{'small': $vuetify.breakpoint.smAndDown}"
        ></v-autocomplete>
        <v-select
          label="Sort By"
          :items="sortItems"
          item-text="label"
          return-object
          class="blog-list__search--sort posts-filter"
          v-model="currentFilters.sortSelected"
          @change="applyFilters"
          prepend-icon="icon-sort-amount-desc"
          :class="{'small': $vuetify.breakpoint.smAndDown}"
        ></v-select>
        <v-select
          v-model="currentFilters.month"
          :items="months"
          label="Filter by Month & Year"
          @change="applyFilters"
          clearable
          item-text="display"
          return-object
          class="blog-list-master__siderbar--filters__month posts-filter"
          :class="{'small': $vuetify.breakpoint.smAndDown}"
          prepend-icon="icon-filter"
        ></v-select>
        <div class="switch-container">
          <v-switch
            v-model="currentFilters.pinned"
            label="Pinned"
            @change="applyFilters"
            class="blog-list__search--pin posts-filter"
            :class="{'small': $vuetify.breakpoint.smAndDown}"
            append-icon="icon-pushpin"
          ></v-switch>
        </div>
      </div>
      <v-divider dark></v-divider>
      <div
        class="blog-list-master__sidebar--links"
        :class="{'broken': $vuetify.breakpoint.mdAndDown}"
      >
        <v-btn class="nes-btn is-primary" to="/blog">&#60;- blog selection</v-btn>
      </div>
    </div>
  </section>
</template>

<script>
import * as _flattenDeep from 'lodash/flattenDeep';
import * as _uniq from 'lodash/uniq';
import * as _cloneDeep from 'lodash/cloneDeep';
import { format, parse } from 'date-fns';
import SortsService from '~/services/sorts';

export default {
  name: 'blogListMaster',
  props: ['posts', 'which'],
  data() {
    return {
      isMounted: false,
      postTerms: null,
      filteredPosts: [],
      months: [],
      cPosts: [],
      sortItems: [
        { label: 'Post Date - desc', key: 'dateDesc' },
        { label: 'Post Date - asc', key: 'dateAsc' },
        { label: 'Title - desc', key: 'titleDesc' },
        { label: 'Title - asc', key: 'titleAsc' }
      ],
      currentFilters: {
        searchTerm: null,
        sort: null,
        pinned: false,
        month: null
      }
    };
  },
  created() {
    this.currentFilters.sortSelected = this.sortItems[0];
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
    this.months = _uniq(
      this.cPosts.map(p => {
        return format(new Date(p.created_at), 'MMM YYYY');
      })
    ).map(p => {
      const pSplit = p.split(' ');
      return { month: pSplit[0], year: pSplit[1], display: p };
    });
  },
  mouted() {
    this.isMounted = true;
  },
  methods: {
    applyFilters() {
      this.filteredPosts = this.cPosts;
      this.filterByMonth();
      this.filterPinned();
      this.searchPosts();
      this.sortPosts();
    },
    searchPosts() {
      if (this.currentFilters.searchTerm && this.currentFilters.searchTerm !== '') {
        const fpCopy = _cloneDeep(this.filteredPosts);
        this.filteredPosts = fpCopy.filter(
          p => p.searchTerms.indexOf(this.currentFilters.searchTerm) >= 0
        );
        if (this.$ga) {
          this.$ga.event('filter', 'blogListFilters', 'search', this.currentFilters.searchTerm);
        }
      }
    },
    sortPosts() {
      switch (this.currentFilters.sortSelected.key) {
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
          if (this.$ga) {
            this.$ga.event('filter', 'blogListFilters', 'sort', 'dateAsc');
          }
          break;
        case 'titleDesc':
          this.filteredPosts = SortsService.sortAlpha(
            _cloneDeep(this.filteredPosts),
            'title'
          ).reverse();
          if (this.$ga) {
            this.$ga.event('filter', 'blogListFilters', 'sort', 'titleDesc');
          }
          break;
        case 'titleAsc':
          this.filteredPosts = SortsService.sortAlpha(_cloneDeep(this.filteredPosts), 'title');
          if (this.$ga) {
            this.$ga.event('filter', 'blogListFilters', 'sort', 'titleAsc');
          }
          break;
      }
    },
    filterPinned() {
      if (this.currentFilters.pinned) {
        this.filteredPosts = _cloneDeep(this.filteredPosts).filter(p => p.pinned);
        if (this.$ga) {
          this.$ga.event('filter', 'blogListFilters', 'pinned', this.currentFilters.pinned);
        }
      }
    },
    filterByMonth() {
      if (this.currentFilters.month) {
        const pCopy = _cloneDeep(this.filteredPosts);
        this.filteredPosts = pCopy.filter(p => {
          const pMonth = format(p.created_at, 'MMM');
          const pYear = format(p.created_at, 'YYYY');
          return (
            pMonth === this.currentFilters.month.month && pYear === this.currentFilters.month.year
          );
        });
        if (this.$ga) {
          this.$ga.event('filter', 'blogListFilters', 'month', this.currentFilters.month);
        }
      }
    }
  }
};
</script>

<style lang="scss">
@import '~/assets/style/theme.scss';
.blog-list-master {
  display: flex;
  justify-content: space-between;
  background-color: #000;
  min-height: calc(100vh - 14rem);
  &.smaller {
    flex-direction: column-reverse;
    .blog-list {
      padding: 0 1rem;
    }
    .blog-list-master__sidebar .blog-list-master__sidebar--filters {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      height: auto;
      min-height: auto;
      .switch-container {
        width: 50%;
      }
      .posts-filter {
        width: calc(50% - 2rem);
        margin: 0.5rem 1rem;
      }
    }
  }
  .blog-list-master__sidebar {
    border-radius: 2rem;
    border: 2px solid $light;
    display: flex;
    flex-direction: column;
    margin: 1rem 1rem 0 1rem;
    min-height: calc(100vh - 9rem - 9rem);
    height: 100%;
    min-width: 20rem;
    .blog-list-master__sidebar--title-container {
      padding: 1rem 1rem 1rem 2rem;
    }
    &.md {
      min-height: auto;
      margin-bottom: 1rem;
      border-top-left-radius: 2rem;
      border-top-right-radius: 2rem;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    .blog-list-master__sidebar--title,
    .blog-list-master__sidebar--title .v-icon {
      color: $light;
    }
    .blog-list-master__sidebar--filters {
      padding: 2rem 2rem 0;
      .switch-container {
        padding-top: 0.5rem;
        .blog-list__search--pin .v-label.theme--dark {
          margin-bottom: 0;
        }
      }
      .posts-filter.small {
        width: 100%;
        margin: 0;
      }
    }
    .blog-list-master__sidebar--links {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
      .nes-btn {
        .v-btn__content {
          font-family: $game-font;
          font-size: 0.75rem;
        }
      }
      &.broken {
        flex-direction: row;
        margin-top: 0;
      }
    }
  }
}
</style>