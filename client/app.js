import { map } from 'ramda';

const arr = [1, 2, 3, 4, 5];

const timesTwo = map(x => x * 2);

console.log(timesTwo(arr));
