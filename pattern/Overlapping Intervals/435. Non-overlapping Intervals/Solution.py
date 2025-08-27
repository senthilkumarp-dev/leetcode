class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda x:x[1])
        answer = 0
        prev = intervals[0]
        for i in range (1,len(intervals)):
            if intervals[i][0] < prev[1]:
                answer = answer + 1
            else :
                prev = intervals[i]
        return answer