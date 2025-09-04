class Solution {
    public int findPeakElement(int[] nums) {
             int left = 0, right = nums.length - 1;

        while (left < right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] > nums[mid + 1]) {
                // You're on the descending slope, so the peak is on the left (including mid)
                right = mid;
            } else {
                // You're on the ascending slope, so the peak is on the right
                left = mid + 1;
            }
        }

        // left == right is the peak position
        return left;   
    }
}