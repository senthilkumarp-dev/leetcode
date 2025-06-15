class Solution:
    def twoSum(self,i,nums:List[int],result:List[List[int]]):
        left = i+1
        right =len(nums)-1
        while(left<right):
            sum =nums[i]+nums[left]+nums[right]
            if sum==0:
                result.append([nums[i],nums[left],nums[right]])
                left+=1
                right-=1
                while left<right and nums[left]==nums[left-1]:
                    left+=1
                while left<right and nums[right]==nums[right+1]:
                    right-=1
            elif sum < 0:
                left+=1
            else:
                right-=1
                
        
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort();
        result=[];
        for i in range(len(nums)):
            if(i!=0 and nums[i]==nums[i-1]):
                continue
            self.twoSum(i,nums,result)
        return result;

