# Intuition
We want the `k` numbers closest to `x` in a sorted array. Instead of checking all numbers, we can use binary search to find the best starting point for the `k`-sized window.

---

# Approach
1. Set two pointers `l = 0` and `r = arr.length - k`.  
2. Use binary search to decide the window:
   - Compare distance of `x` from `arr[m]` (left edge) and `arr[m + k]` (right edge).  
   - If `x` is closer to the right side, move `l` right. Otherwise, move `r` left.  
3. When binary search ends, `l` is the starting index.  
4. Return `arr.slice(l, l + k)`.

---

# Complexity
- **Time:** $$O(\log(n-k) + k)$$  
- **Space:** $$O(1)$$

---

# Code
``` java []
class Solution {
    public List<Integer> findClosestElements(int[] arr, int k, int x) {
        int left = 0;
        int right = arr.length - k;
        while (left < right){
            int mid = (left + right)/2;
            if(x - arr[mid] > arr[mid+k] - x) {
                left = mid + 1;
            }
            else{
                right = mid;
            }
        }
        List<Integer> result = new ArrayList();
        for(int i = left ; i < left+k ; i++){
            result.add(arr[i]);
        }
        return result;
    }
}
```
```javascript []
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let l = 0;
    let r = arr.length - k;

    while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (x - arr[m] > arr[m + k] - x) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return arr.slice(l, l + k);
};
```
``` Python []
class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        l = 0
        r = len(arr) - k
        while l < r:
            mid = (l+r)//2
            if x - arr[mid] > arr[mid+k] - x:
                l = mid+1
            else :
                r = mid
        return arr[l:l+k]
```