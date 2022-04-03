
// [1,9,5]
// [1,8,4,5]

function quickSort(nums) {
  // base case
  if (nums.length <= 1) return nums;

  const pivot = nums[nums.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  const sortLeft = quickSort(left);
  const sortRight = quickSort(right);

  return sortLeft.concat(pivot, sortRight);
}

test('quick sort', () => {
  const nums = [1, 4, 2, 3, 7, 5, 6, 9, 8, 10];
  expect(quickSort(nums)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
