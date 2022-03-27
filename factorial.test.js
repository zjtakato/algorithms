/**
 * 阶乘
 * 1*2*3*4*5*6.....
 */

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

test('factorial', () => {
  const n = 10;
  expect(factorial(n)).toEqual(3628800);
});
