/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
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

/*

nums1 and nums2 are sorted arrays with integers. Zeroes are sorted at the end
the function should return nums1 as a new array, with a new length of m+n
this new array should be a combination of nums1 and nums2, sorted

with the new array, the first m elements should be elements sorted,
and the last n elements are set to 0

first, sort the two arrays.
create a new array to hold the result temporarily. Using a while loop
(while result array length !> maxLength)
we will compare the elements of the two given arrays
*/