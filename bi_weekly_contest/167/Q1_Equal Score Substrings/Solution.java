class Solution {
    public boolean scoreBalance(String s) {
        int n = s.length();
        if(n <= 1){
            return false;
        }
        int[] prefixsum = new int[n];
        int sum = 0;
        prefixsum[0] = (s.charAt(0) - 'a')+1;
        for(int i=1;i < n;i++){
            prefixsum[i] = prefixsum[i-1] + (s.charAt(i) - 'a') + 1;
        }
        sum = prefixsum[n-1];
        if(sum%2!=0){
            return false;
        }
        int l = 0;
        int r = n-1;
        int target = sum/2;
        while(l <= r){
            int mid = (l+r)/2;
            if(prefixsum[mid]==target){
                return true;
            }
            else if(prefixsum[mid] < target){
                l = mid+1;
            }
            else{
                r = mid -1;
            }
        }
        return false;
    }
}