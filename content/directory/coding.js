import * as coding2019 from './coding/2019';

export default () => [].concat.apply([], [coding2019.first, coding2019.second]);
// will eventually be something like [].concat.apply([], [coding2019.first, coding2019.second, coding2019.third]);
