# Intuition
Anagrams are words that contain the same characters but in different orders.  
So if we **sort the characters of each word**, all anagrams will produce the same sorted string.  
We can use this as a key to group words together.

---

# Approach
1. Create a `Map` to store groups of anagrams.  
2. For each word:  
   - Sort its characters to form a key.  
   - Add the word to the list of words that share the same key.  
3. At the end, return all grouped values from the map.

---

# Complexity
- **Time complexity:** $$O(n \cdot k \log k)$$  
  where `n` = number of words, `k` = maximum word length (due to sorting).  
- **Space complexity:** $$O(n \cdot k)$$  
  for storing the grouped words.

---

# Code
```javascript []
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for (let word of strs) {
        let key = word.split('').sort().join('');
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(word);
    }
    return Array.from(map.values());
};
```
``` Java []
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
```