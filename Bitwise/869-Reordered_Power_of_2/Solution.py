class Solution:
    def reorderedPowerOf2(self, n: int) -> bool:
        def sorted_string(n):
            return ''.join(sorted(str(n)))
        target = sorted_string(n)
        for i in range(0,31):
            if sorted_string(1 << i) == target:
                return True
        return False