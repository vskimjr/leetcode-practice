// https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150

/*

removeElement takes two arguments:
  1. nums (array of integers)
  2. val (an integer)

removeElement removes all occurrences of val in nums

removeElement returns k, which is number of elements in nums !== val

The original nums array should have a length of k


*/

function removeElement(nums, val){
  // Pointer to track non-'val' elements
  let k = 0;

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
          // If current element is not 'val', keep it in the array
          nums[k] = nums[i];
          k++; // Move the pointer to the next position
      }
      // If nums[i] === val, skip this element (do nothing)
  }

  return k;
}