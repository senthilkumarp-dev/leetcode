class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        n = len(haystack)
        m = len(needle)
        for i in range (0 , n):
            if haystack[i] == needle[0]:
                k = i
                j = 0
                while k < n and j < m:
                    if haystack[k] != needle[j]:
                        break
                    j+=1
                    k+=1
                if j == m:
                    return i
        return -1