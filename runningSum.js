var runningSum = function(nums) {
    let newArr = []
    let curSum = 0;
     
    for(let i of nums){
        console.log(i)
        curSum +=Number(i);
        newArr.push(curSum)
    }
 return newArr
 };
nums = [1,2,3,4]

console.log(runningSum(nums))