# Intuition
The problem is like repeatedly smashing the two heaviest stones together until only one remains.  
When two stones are smashed:
- If they are equal, both are destroyed.
- If not, the difference remains as a new stone.

---

# Approach
1. Sort the stones in ascending order.  
2. Repeatedly remove the two largest stones (the last two after sorting).  
3. Compute their difference and insert it back into the list.  
4. Sort again to keep the largest stones at the end.  
5. Continue until one or no stone remains.  
6. Return the final stone’s weight or 0 if none remain.

---

# Complexity
- **Time complexity:** $$O(n^2 \log n)$$ (each sort takes \(O(n \log n)\) and can happen up to \(n\) times)  
- **Space complexity:** $$O(1)$$ (in-place operations on the input array)

---

# Code
```javascript []
var lastStoneWeight = function(stones) {
    stones.sort((a,b)=>a-b);
    while (stones.length > 1) {
        let y = stones.pop();
        let x = stones.pop();
        y = y - x;
        stones.push(y);
        stones.sort((a,b)=>a-b);
    }
    return stones.pop();
};
