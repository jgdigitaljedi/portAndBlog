<template>
  <section class="blog-list-master" :class="{'smaller': $vuetify.breakpoint.mdAndDown}">
    <blogListContainer :posts="filteredPosts" :which="which" class="blog-list"></blogListContainer>
    <v-card
      color="black"
      class="blog-list-master__sidebar"
      :class="{'md': $vuetify.breakpoint.mdAndDown}"
    >
      <v-card-title>
        <h4 class="blog-list-master__sidebar--title">
          <v-icon>icon-filter</v-icon>&nbsp;Filters
        </h4>
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
          flat
          class="blog-list-master__siderbar--filters__search posts-filter"
          :class="{'small': $vuetify.breakpoint.smAndDown}"
        ></v-autocomplete>
        <v-select
          label="Sort By"
          outline
          solo
          :items="sortItems"
          item-text="label"
          return-object
          class="blog-list__search--sort posts-filter"
          v-model="sortSelected"
          @change="sortPosts"
          prepend-icon="icon-sort-amount-desc"
          :class="{'small': $vuetify.breakpoint.smAndDown}"
        ></v-select>
        <v-switch
          v-model="onlyPinned"
          label="Pinned"
          @change="filterPinned"
          class="blog-list__search--pin posts-filter"
          :class="{'small': $vuetify.breakpoint.smAndDown}"
          append-icon="icon-pushpin"
        ></v-switch>
        <v-select
          v-model="selectedMonth"
          :items="months"
          label="Filter by Month & Year"
          @change="filterByMonth"
          clearable
          item-text="display"
          return-object
          class="blog-list-master__siderbar--filters__month posts-filter"
          :class="{'small': $vuetify.breakpoint.smAndDown}"
        ></v-select>
      </div>
      <v-divider dark></v-divider>
      <div
        class="blog-list-master__sidebar--links"
        :class="{'broken': $vuetify.breakpoint.mdAndDown}"
      >
        <v-btn class="nes-btn is-primary" to="/blog">&#60;- Back to blog selection</v-btn>
      </div>
    </v-card>
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
      sortSelected: null,
      searchTerm: '',
      filteredPosts: [],
      months: [],
      cPosts: [],
      onlyPinned: false,
      selectedMonth: null,
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
    },
    filterByMonth() {
      if (this.selectedMonth) {
        const pCopy = _cloneDeep(this.filteredPosts);
        this.filteredPosts = pCopy.filter(p => {
          const pMonth = format(p.created_at, 'MMM');
          const pYear = format(p.created_at, 'YYYY');
          return pMonth === this.selectedMonth.month && pYear === this.selectedMonth.year;
        });
      } else {
        this.filteredPosts = this.cPosts;
        this.searchPosts();
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
      .posts-filter {
        width: calc(50% - 2rem);
        margin: 0.5rem 1rem;
      }
    }
  }
  .blog-list-master__sidebar {
    display: flex;
    flex-direction: column;
    min-width: 25rem;
    margin: 1rem 1rem 0 1rem;
    min-height: calc(100vh - 7rem - 9rem);
    height: 100%;
    &.md {
      min-height: auto;
    }
    .blog-list-master__sidebar--title,
    .blog-list-master__sidebar--title .v-icon {
      color: $light;
    }
    .blog-list-master__sidebar--filters {
      padding: 2rem;
      .blog-list-master__siderbar--filters__search {
        margin-bottom: 3rem;
      }
      .blog-list-master__siderbar--filters__month {
        margin-top: 1rem;
      }
      .blog-list__search--pin .v-label.theme--dark {
        margin-bottom: 0;
      }
      .posts-filter.small {
        width: 100%;
        margin: 0;
      }
    }
    .blog-list-master__sidebar--links {
      display: flex;
      flex-direction: column;
      // margin-top: 1rem;
      align-items: center;
      justify-content: center;
      flex: 1;
      .nes-btn {
        // margin-top: 2rem;
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