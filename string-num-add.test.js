function add(a, b) {
  let result = [];
  a = Array.from(a);
  b = Array.from(b);
  const longArray = a.length >= b.length ? a : b;
  const shortArray = a.length < b.length ? a : b;
  let carry = 0;
  while (shortArray.length) {
    const addResult = parseInt(shortArray.pop()) + parseInt(longArray.pop()) + carry;
    const remainder = addResult % 10;
    carry = addResult >= 10 ? 1 : 0;
    result.push(remainder);
  }
  while (longArray.length) {
    if (carry === 0) break;
    const addResult = parseInt(longArray.pop()) + carry;
    const remainder = addResult % 10;
    carry = addResult >= 10 ? 1 : 0;
    result.push(remainder);
  }
  result = result.concat(longArray.reverse());
  carry > 0 && result.push(carry);
  return result.reverse().join('');
}

test('add', () => {
  expect(add('2', '1')).toEqual('3');
  expect(add('99', '99')).toEqual('198');
  expect(add('11199', '9')).toEqual('11208');
});
