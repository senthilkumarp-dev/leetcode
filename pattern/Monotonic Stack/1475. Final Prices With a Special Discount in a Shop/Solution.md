# Intuition
We need to calculate the **final discounted price** for each item.  
For each `prices[i]`, we look for the **next smaller or equal price** on its right. If found, subtract it; otherwise, keep the original price.  

This is a classic **Next Smaller Element (NSE)** problem, which can be solved efficiently using a stack.

---

# Approach
1. Use a **monotonic stack** to keep track of indices whose discount is not yet found.  
2. Iterate through the prices:  
   - While the current price `prices[i]` is **less than or equal** to the price at the index stored on top of the stack, pop that index and calculate its discounted price.  
   - Push the current index onto the stack.  
3. After the loop, all indices still in the stack have no discount, so their final price remains unchanged.  
4. Return the `answer` array.

---

# Complexity
- **Time complexity:** $$O(n)$$  
  Each element is pushed and popped at most once.  
- **Space complexity:** $$O(n)$$  
  Stack and answer array storage.

---

# Code
```javascript []
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let stack = [];
    let answer  = [];

    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[stack[stack.length - 1]] >= prices[i]) {
            let idx = stack.pop();
            answer[idx] = prices[idx] - prices[i];
        }
        stack.push(i);
    }

    // Remaining items get no discount
    while (stack.length > 0) {
        let idx = stack.pop();
        answer[idx] = prices[idx];
    }

    return answer;
};
