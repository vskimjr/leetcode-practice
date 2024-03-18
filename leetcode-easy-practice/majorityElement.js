/*
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times.
You may assume that the majority element always exists in the array.

https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150
*/

function majorityElement(nums){
    const majority = Math.ceil(nums.length / 2)

    let counter = {};

    for ( let num of nums ){
        if (num in counter){
            counter[num]++;
        } else {
            counter[num] = 1;
        }
    }

    for (let key in counter){
        if (counter[key] >= majority){
            return Number(key);
        }
    }
  };
