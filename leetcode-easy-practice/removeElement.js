/* Given an integer array nums and an integer val
Remove all occurences of val in nums.
Return the numbers of elements in nums which are not equal to val
*/

function removeElement(nums, val){
  let numsIdx = 0;

  for (let num of nums){
    if (num !== val){
      nums[numsIdx] = num;
      numsIdx++;
    }
  }
  return numsIdx;
}