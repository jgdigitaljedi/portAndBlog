import * as _get from 'lodash/get';

export default {
  sortByDate(items, field) {
    return items.sort((a, b) => {
      const aa = _get(a, field);
      const bb = _get(b, field);
      if (!aa) return -1;
      if (!bb) return 1;
      return new Date(aa) - new Date(bb);
    });
  },
  sortAlpha(items, field) {
    return items.sort((a, b) => {
      const aa = _get(a, field);
      const bb = _get(b, field);
      if (aa > bb) {
        return 1;
      }
      if (aa < bb) {
        return -1;
      }
      return 0;
    });
  }
};
