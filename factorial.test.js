/**
 * 阶乘
 * 1*2*3*4*5*6.....
 */

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
function factorialCache(n) {
  const cache = [1, 2];
  for (let i = 2; i < n + 1; i++) {
    cache.push((i + 1) * cache[i - 1]);
  }
  return cache[n - 1];
}

test('factorial', () => {
  const n = 10;
  expect(factorial(n)).toEqual(3628800);
});

test('factorial cache', () => {
  const n = 11;
  expect(factorialCache(n)).toEqual(3628800 * 11);
});
