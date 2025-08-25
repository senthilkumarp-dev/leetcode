class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        total = sum(nums)
        left_total = 0
        for i in range(0,len(nums)):
            right_total = total - left_total - nums[i]
            if left_total == right_total:
                return i
            left_total+=nums[i]
        return -1