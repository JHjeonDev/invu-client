import { bench } from 'vitest';

describe('sorting algorithms', () => {
  const numbers = Array.from({ length: 1000 }, () => Math.random() * 1000);

  bench('Array.sort', () => {
    numbers.slice().sort((a, b) => a - b);
  });

  bench('Bubble sort', () => {
    const arr = numbers.slice();
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [ arr[j], arr[j + 1] ] = [ arr[j + 1], arr[j] ];
        }
      }
    }
  });
});

describe('replace test', () => {
  const testString = 'apple banana apple orange apple';

  bench('regex', () => {
    testString.replace(/apple/g, 'grape');
  });

  bench('replaceAll', () => {
    testString.replaceAll('apple', 'grape');
  });
});
