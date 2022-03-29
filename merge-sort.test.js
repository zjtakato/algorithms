function mergeSort(nums) {
  if (nums.length < 2) {
    return nums;
  }
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);
  const sortLeft = mergeSort(left);
  const sortRight = mergeSort(right);

  return merge(sortLeft, sortRight);
}

function merge(left, right) {
  const results = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return results.concat(left, right);
}


test('merge sort',()=>{
  const nums = [2,3,500,4,1,200];
  expect(mergeSort(nums)).toEqual([1,2,3,4,200,500]);
})
