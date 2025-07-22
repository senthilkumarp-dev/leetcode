class Solution {
    public boolean isHappy(int n) {
        int slow = square(n);
        int fast = square(square(n));
        while(true){
           slow = square(slow);
           fast = square(square(fast));
            if(slow==fast){
                break;
            }
        }
        return slow==1;
    }
    public int square(int n){
        int sum =0;
        int remainder=0;
        while(n>9){
            remainder = n%10;
            sum +=remainder*remainder;
            n =n/10;
        }
        sum+=n*n;
        return sum;
    }
}