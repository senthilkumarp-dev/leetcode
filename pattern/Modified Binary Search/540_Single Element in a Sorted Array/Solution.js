var singleNonDuplicate = function (nums) {
	let l = 0;
	let r = nums.length - 1;

	while (l < r) {
		let mid = Math.floor((l + r) / 2);

		// Make sure mid is even for pair comparison
		if (mid % 2 === 1) {
			mid--;
		}

		if (nums[mid] === nums[mid + 1]) {
			l = mid + 2; // single is in the right half
		} else {
			r = mid;     // single is in the left half
		}
	}
	return nums[l];
};