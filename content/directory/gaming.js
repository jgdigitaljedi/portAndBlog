import * as gaming2019 from './gaming/2019';

export default () => [].concat.apply([], [gaming2019.first, gaming2019.second]);
// will eventually be something like [].concat.apply([], [gaming2019.first, gaming2019.second, gaming2019.third]);