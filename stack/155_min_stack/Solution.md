# 155. Min Stack

## Problem

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the `MinStack` class:

- `MinStack()` initializes the stack.
- `void push(int val)` pushes the element `val` onto the stack.
- `void pop()` removes the element on the top of the stack.
- `int top()` gets the top element.
- `int getMin()` retrieves the minimum element in the stack.

---

# Intuition

A normal stack can easily support `push`, `pop`, and `top`, but efficiently tracking the minimum element requires additional information.  
If we only stored values, finding the minimum would require scanning the whole stack each time (`O(n)`).  
Instead, we can **store the minimum so far** alongside each element in the stack. This way, we can always retrieve the minimum in `O(1)` time.

---

# Approach

- Each element in the stack is stored as a **pair `[val, minSoFar]`**.
- When pushing:
  - If the stack is empty, store `[val, val]`.
  - Otherwise, store `[val, min(val, previousMin)]`.
- When popping:
  - Simply remove the top element (pair).
- For `top()`, return the first item of the pair.
- For `getMin()`, return the second item of the pair.

This ensures all operations run in constant time.

---

# Complexity

- **Time complexity:**  
  $$O(1)$$ for all operations (`push`, `pop`, `top`, `getMin`).
- **Space complexity:**  
  $$O(n)$$ for storing values with their min-so-far.

---

# Code

```javascript []
var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (!this.stack.length) {
    this.stack.push([val, val]); // [value, minSoFar]
  } else {
    const minSoFar = this.stack[this.stack.length - 1][1];
    this.stack.push([val, Math.min(minSoFar, val)]);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1][1];
};
```

```Java []
class MinStack {
    public List<int[]> stack ;
    public MinStack() {
        this.stack =  new ArrayList<>();
    }

    public void push(int val) {

        int min = stack.isEmpty() ? val : Math.min(val, getMin());
        this.stack.add(new int[]{val,min});
    }

    public void pop() {
        this.stack.remove(this.stack.size()-1);
    }

    public int top() {
        return this.stack.get(this.stack.size()-1)[0];
    }

    public int getMin() {
        return this.stack.get(this.stack.size()-1)[1];
    }
}
```

```Python []
class MinStack:

    def __init__(self):
        self.stack = []

    def push(self, val: int) -> None:
        if len(self.stack) == 0:
            temp = [val,val]
            self.stack.append(temp)
        else:
            min_val = min(self.stack[-1][1],val)
            temp =[val,min_val]
            self.stack.append(temp)

    def pop(self) -> None:
        return self.stack.pop()[0]

    def top(self) -> int:
        return self.stack[-1][0]

    def getMin(self) -> int:
        return self.stack[-1][1]



# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
```
