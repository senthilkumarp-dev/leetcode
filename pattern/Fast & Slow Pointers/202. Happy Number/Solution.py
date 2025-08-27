class Solution:
    def isHappy(self, n: int) -> bool:
        slow = n
        fast = n
        while True:
            slow = self.square(slow)
            fast = self.square(self.square(fast))
            if slow == fast:
                break
        return slow == 1

    def square(self,n:int) -> int:
        sumValue =  0 
        remainder = 0 
        while n>9:
            remainder = n % 10
            sumValue = sumValue + ( remainder * remainder)
            n = n//10
        sumValue = sumValue + (n*n)
        return sumValue