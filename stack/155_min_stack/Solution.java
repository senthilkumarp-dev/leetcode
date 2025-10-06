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

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */