

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