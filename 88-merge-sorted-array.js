// https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

/*

merge take four arguments
  1. nums1 (array of integers sorted in increasing order)
  2. m (number of elements in nums1)
  3. nums2 (array of integers sorted in increasing order)
  4. n (number of elements in nums2)

the function merge merges nums1 and nums2 into a single array in increasing order
the final sorted array should be stored inside the array nums1
the first m elements should be the elements merged
the last n elements are set to 0

0 is considered the largest integer


*/

function merge(nums1, m, nums2, n){
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0){
    if (nums1[i] > nums2[j]){
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  while (j >= 0){
    nums1[k] = nums2[j];
    j--;
    k--;
  }




}