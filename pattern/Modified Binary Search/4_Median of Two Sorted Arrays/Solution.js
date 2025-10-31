var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  let m = nums1.length;
  let n = nums2.length;

  let low = 0;
  let high = m;
  while (low <= high) {
    let partitionX = Math.floor((low + high) / 2);
    let partitionY = Math.floor((m + n + 1) / 2) - partitionX;

    let maxLeftX =
      partitionX == 0 ? Number.MIN_SAFE_INTEGER : nums1[partitionX - 1];
    let minRightX =
      partitionX == m ? Number.MAX_SAFE_INTEGER : nums1[partitionX];

    let maxLeftY =
      partitionY == 0 ? Number.MIN_SAFE_INTEGER : nums2[partitionY - 1];
    let minRightY =
      partitionY == n ? Number.MAX_SAFE_INTEGER : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((m + n) % 2 == 0) {
        return (
          (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
        );
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }
};
