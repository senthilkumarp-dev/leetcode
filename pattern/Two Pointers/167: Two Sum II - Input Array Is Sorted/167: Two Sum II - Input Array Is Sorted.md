# LeetCode 167: Two Sum II - Input Array Is Sorted

## Intuition

Since the array is sorted in non-decreasing order, we can use a two-pointer approach. The idea is that if the sum of the two numbers is too small, we can increase the left pointer to increase the sum. If the sum is too large, we can decrease the right pointer to reduce the sum.

## Approach

1. Initialize two pointers: one (`left`) at the beginning of the array, and the other (`right`) at the end.
2. Use a loop to check the sum of the values at both pointers.
3. If the sum is equal to the target, return the indices (1-indexed).
4. If the sum is less than the target, move the left pointer to the right.
5. If the sum is greater than the target, move the right pointer to the left.
6. Repeat until the correct pair is found.

This approach works because the array is sorted, allowing us to adjust the sum efficiently.

## Complexity

- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

## Code

```python []
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        begin = 0
        end = len(numbers) - 1

        while begin < end:
            currentSum = numbers[begin] + numbers[end]
            if currentSum == target:
                return [begin + 1, end + 1]   # 1-indexed
            elif currentSum > target:
                end -= 1
            else:
                begin += 1
        return []
```

```java []
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int left = 0;
        int right = numbers.length-1;

        while(left<right){
            int sum = numbers[left] + numbers[right];
            if(sum== target){
                break;
            }
            if( sum < target){
                left++;
            }
            else{
                right--;
            }
        }
        return new int[]{++left,++right};
    }
}
```

```javascript []
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let len = numbers.length;
  let left = 0;
  let right = len - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [++left, ++right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
};
```
