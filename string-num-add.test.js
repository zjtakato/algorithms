function add(a, b) {
  if (a === '0') return b;
  if (b === '0') return a;
  let result = '';
  let max = a.length >= b.length ? a : b;
  let min = max === a ? b : a;
  let step = 0;
  let i = 0;
  while (i !== min.length) {
    const a1 = parseInt(max[max.length - i - 1]);
    const b1 = parseInt(min[min.length - i - 1]);
    const sum = a1 + b1 + step;
    step = sum >= 10 ? 1 : 0;
    const remainder = sum % 10;
    result = remainder + result;
    i++;
  }
  while (i !== max.length) {
    if (step === 0) break;
    const a1 = parseInt(max[max.length - i - 1]);
    const sum = a1 + step;
    step = sum >= 10 ? 1 : 0;
    const remainder = sum % 10;
    result = remainder + result;
    i++;
  }
  if (i !== max.length) {
    result = max.slice(0, max.length - i) + result;
  }
  if (step) {
    result = step + result;
  }
  return result;
}

console.log(add('11199', '9'));

// test('add', () => {
//   expect(add('2', '1')).toEqual('3');
//   expect(add('99', '99')).toEqual('198');
//   expect(add('11199', '9')).toEqual('11208');

// });
