class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        begin = 0
        end = len(numbers) - 1

        while begin < end:
            currentSum = numbers[begin] + numbers[end]
            if currentSum == target:
                return [begin + 1, end + 1]   # 1-indexed
            elif currentSum > target:
                end -= 1
            else:
                begin += 1
        return []