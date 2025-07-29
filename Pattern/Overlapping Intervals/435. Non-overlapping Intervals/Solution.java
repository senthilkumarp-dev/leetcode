class Solution {
    public int eraseOverlapIntervals(int[][] intervals) {
        
        Arrays.sort(intervals, (a,b)  ->  Integer.compare(a[1],b[1]));

        int[] prev = intervals[0];
        int answer = 0;
        for( int i = 1 ; i < intervals.length ; i++){
            if(intervals[i][0] < prev[1]){
                answer++;
            }
            else{
                prev = intervals[i];
            }
        }

        return answer;
    }
}