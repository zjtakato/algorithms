function bubbleSort(nums) {
  let swapper = false;
  do {
    swapper = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapper = true;
      }
    }
  } while (swapper);
  return nums;
}

function bubblesort2(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
}

test('bubble sort', () => {
  const nums = [10, 5, 2];
  const sortNumbs = bubbleSort(nums);
  expect(sortNumbs).toEqual([2, 5, 10]);
});

test('bubble sort2', () => {
  const nums = [10, 5, 2];
  const sortNumbs = bubblesort2(nums);
  expect(sortNumbs).toEqual([2, 5, 10]);
});
