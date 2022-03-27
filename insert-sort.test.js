/**
    [3, 2, 5, 4, 1]

        ↓
    [3, 2, 5, 4, 1] // the ↓ is the number we're looking to insert, everything before is sorted

    Is 2 larger than 3? No. Move 3 to the right.
    Beginning of list, insert 2 at index 0.

          ↓
    [2, 3, 5, 4, 1]

    Is 5 larger than 3? Yes.
    Insert after 3 (it's already there so it doesn't move)

              ↓
    [2, 3, 5, 4, 1]

    Is 4 larger than 5? No. Move 5 to the right.
    Is 4 larger than 3? Yes.
    Insert after 3 at index 2.

                ↓
    [2, 3, 4, 5, 1]

    Is 1 larger than 5? No. Move 5 to the right.
    Is 1 larger than 4? No. Move 4 to the right.
    Is 1 larger than 3? No. Move 3 to the right.
    Is 1 larger than 2? No. Move 2 to the right.
    Beginning of list, insert 1 at index 0

    [1, 2, 3, 4, 5]

    Reached end of list, list is sorted.
 */

function insertSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let numberToInsert = nums[i];
    for (let j = i - 1; j < i && j >= 0; j--) {
      if (numberToInsert < nums[j]) {
        nums[j + 1] = nums[j];
        nums[j] = numberToInsert;
      }
    }
  }
  return nums;
}

test('insert sort', () => {
  const nums = [3, 2, 5, 4, 1];
  const sortNumbs = insertSort(nums);
  expect(sortNumbs).toEqual([1, 2, 3, 4, 5]);
});
