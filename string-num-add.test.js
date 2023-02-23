function stringNumberAdd(string1, string2) {
  let result = [];
  const stringArray1 = Array.from(string1).reverse();
  const stringArray2 = Array.from(string2).reverse();
  const loopArr = stringArray1.length >= stringArray2.length ? stringArray1 : stringArray2;
  const minorArr = loopArr === stringArray1 ? stringArray2 : stringArray1;
  let carry = 0;
  for (let index = 0; index < loopArr.length; index++) {
    const num1 = parseInt(loopArr[index] || 0);
    const num2 = parseInt(minorArr[index] || 0);
    const addResult = num1 + num2 + carry;
    if (addResult >= 10) {
      result.push((addResult % 10).toString());
      carry = 1;
    } else {
      result.push(addResult.toString());
      carry = 0;
    }
    if (index === loopArr.length - 1 && carry > 0) {
      result.push(carry.toString());
    }
    if (index > minorArr.length && carry === 0) {
      result = result.concat(loopArr.slice(index + 1, loopArr.length));
      break;
    }
  }

  return result.reverse().join('');
}

test('stringNumberAdd', () => {
  expect(stringNumberAdd('99', '99')).toEqual('198');
  expect(stringNumberAdd('11199', '9')).toEqual('11208');
})



