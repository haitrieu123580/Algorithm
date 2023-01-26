var pivotIndex = function (nums) {
    let sumLeft = 0;
    let index = -1;
    const initialValue = 0;
    const Sum = nums.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
    );
    for (let i = 0; i < nums.length; i++) {
        if (sumLeft * 2 == Sum - nums[i])
            return i;
        sumLeft += nums[i]
    }
    return index
};