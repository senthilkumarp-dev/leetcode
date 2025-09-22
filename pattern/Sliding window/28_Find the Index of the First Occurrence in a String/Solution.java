class Solution {
    public int strStr(String haystack, String needle) {
        int i = 0;
        int j = 0;
        while(i < haystack.length() && j < needle.length()){
            if(haystack.charAt(i) == needle.charAt(j)){
                j++;
            }
            else{
                i= i - j;
                j = 0;
            }
            i++;
             if(j == needle.length()){
            return i -j;
        }
        }
        return -1;
    }
}