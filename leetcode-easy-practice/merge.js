/**
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150
 */
function merge (nums1, m, nums2, n) {
  const maxLength = m + n;
  let result = [];
  let i = 0;
  let j = 0;

  if (result.length === maxLength){
    return result;
  }

  while (
    result.length !== maxLength
    && i < nums1.length
    && j < nums2.length
  ) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      result.push(nums2[j]);
      i++;
      j++;
    }

    if (nums1[i] < nums2[j]) {
      result.push(nums1[i]);
      i++;
    }

    if (nums2[j] < nums1[i]) {
      result.push(nums2[j]);
      j++;
    }
  }

  if (i < nums1.length){
    for (let i = i; i < nums1.length; i++){
      result.push(nums1[i]);
      if (result.length === maxLength){
        return result;
      }
    }
  }

  if (j < nums2.length){
    for (let j = j; j < nums2.length; j++){
      result.push(nums2[j]);
      if (result.length === maxLength){
        return result;
      }
    }
  }


}
