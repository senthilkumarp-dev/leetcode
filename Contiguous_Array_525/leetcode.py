def contiguos(nums):
    result=0
    currentSum = 0
    sumDict = {0: -1}  # Important: base case to handle sum == 0

    for i in range(len(nums)):
        if nums[i] == 0:
            nums[i] = -1

        currentSum += nums[i]

        if currentSum in sumDict:
            subArrLen = i - sumDict[currentSum]
            result = max(result, subArrLen)
        else:
            sumDict[currentSum] = i
    return result
print(contiguos([0,1,0]))

print(contiguos([0,1,1,1,1,1,0,0,0]))