class Solution {
    public List<List<Integer>> kSmallestPairs(int[] nums1, int[] nums2, int k) {
        List<List<Integer>> ans = new ArrayList<>();
        PriorityQueue<int []> heap = new PriorityQueue<>(
            (a,b) -> Integer.compare(a[0],b[0])
        );
        for(int i = 0 ; i < Math.min(k,nums1.length) ; i ++){
            heap.add(new int[]{ nums1[i]+nums2[0],i , 0});
        } 

        while ( k-- > 0 && !heap.isEmpty()){
            int[] current =  heap.poll();
            int i = current[1];
            int j = current[2];
            ans.add(Arrays.asList(nums1[i] , nums2[j]));

            if(++j < nums2.length){
                heap.add(new int[]{nums1[i]+nums2[j] , i , j});
            }
        }

        return ans;

    }
}