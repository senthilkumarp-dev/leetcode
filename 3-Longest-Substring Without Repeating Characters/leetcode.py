class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        result = 0
        begin  = 0
        end = 0
        seen = {}
        while end < len(s):
            current = s[end]
            if current in seen and seen.get(current)>= begin :
                begin = seen.get(current)+1
                seen[current]=end
            else :
                seen[current]=end
            end=end+1
            if(end-begin > result):
                result  = end - begin
        return result
# Example usage:  
sol = Solution()
print(sol.lengthOfLongestSubstring("abcabcbb"))