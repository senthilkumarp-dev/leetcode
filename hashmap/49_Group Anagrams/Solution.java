class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        if(strs.length==0){
            return new ArrayList();
        }
        HashMap<String,List> resultMap = new HashMap<>();
        int[] countArray = new int[26];

        for(String s:strs){
            Arrays.fill(countArray,0);
            for(char c:s.toCharArray()){
                countArray[ c- 'a']++;
            }
            StringBuilder sb = new StringBuilder("");
            for(int n:countArray){
                sb.append("#"); // to provent two digit index (10-25)
                sb.append(n);
            }
            String key= sb.toString();
            if(!resultMap.containsKey(key)){
                resultMap.put(key,new ArrayList());
            }
            resultMap.get(key).add(s);
        }

        return  new ArrayList(resultMap.values());
    }
}