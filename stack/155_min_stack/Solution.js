var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
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
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1][1];
};

/** 
 * Example usage:
 * var obj = new MinStack();
 * obj.push(-2);
 * obj.push(0);
 * obj.push(-3);
 * console.log(obj.getMin()); // -3
 * obj.pop();
 * console.log(obj.top());    // 0
 * console.log(obj.getMin()); // -2
 */
