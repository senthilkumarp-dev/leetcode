# 278. First Bad Version

## Problem
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version fails quality checks.  
Given `n` versions `[1, 2, ..., n]` and an API `isBadVersion(version)` which returns whether a version is bad,  
implement a function to find the **first bad version**.  

You should minimize the number of calls to `isBadVersion`.

---

# Intuition
Since once a version is bad, all later versions are also bad, the versions form a **monotonic sequence**:  
- Good → Good → ... → Good → Bad → Bad → ... → Bad  
This suggests a **binary search approach** to efficiently find the transition point.  

---

# Approach
1. Use binary search with two pointers:  
   - `left = 1`  
   - `right = n`  

2. While `left < right`:  
   - Compute `mid = left + (right - left) // 2`.  
   - If `mid` is bad (`isBadVersion(mid)`):  
     - The first bad version lies at `mid` or to the **left** → set `right = mid`.  
   - Else:  
     - The first bad version must be **after mid** → set `left = mid + 1`.  

3. When the loop ends, `left` will point to the first bad version.  

---

# Complexity
- **Time complexity:**  
  $$O(\log n)$$ — binary search over `n` versions.  

- **Space complexity:**  
  $$O(1)$$ — only a few pointers are used.  

---

# Code
``` Java []
/* The isBadVersion API is defined in the parent class VersionControl.
      boolean isBadVersion(int version); */

public class Solution extends VersionControl {
    public int firstBadVersion(int n) {
        int left  = 1;
        int right = n;
        while(left < right){
            int mid = left + (right - left)/2;
            if(isBadVersion(mid)==true){
                right = mid;
            }
            else{
                left = mid+1;
            }
        }
        return left;
    }
}

```
``` Javascript []
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 0;
        let right = n;
        while(left < right){
            let mid = Math.floor(left+(right - left)/2);
            if(isBadVersion(mid)==true){
                right=mid;
            }
            else{
                left=mid+1;
            }
        }
        return left;
    };
};

```
``` python []
# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        left = 1
        right = n
        while left < right:
            mid = left + (right - left) // 2
            if isBadVersion(mid):
                right = mid  # first bad could be at mid or before
            else:
                left = mid + 1  # first bad must be after mid
        return left
