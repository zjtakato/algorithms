/**
 * 1、1、2、3、5、8、13、21、34、……
 */

function fib(n) {
  return n <= 2 ? 1 : fib(n - 1) + fib(n - 2);
}

function fibCache(n) {
  const cache = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    cache.push(cache[i - 2] + cache[i - 1]);
  }
  return cache[n];
}

test('fibonacci', () => {
  const index = 30;
  expect(fib(index)).toEqual(832040);
});

test('fibonacci cache', () => {
  const index = 100;
  expect(fibCache(index)).toEqual(354224848179262000000);
});
