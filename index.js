function hasTargetSum(array, target) {
  // Write your algorithm here
 const numbersArray = [];
  for (const number of array){
    const result = target-number;
  if (result in numbersArray)
  return true;
  numbersArray[number]=true;
    
  }
    return false;



  }
  



/* 
  Write the Big O time complexity of your function here
*/

/* 
  hasTargetSum([22, 19, 4, 6, 30], 25)
iterate through each number in the array
for the current num identiy a complement that adds to the target(complement = target)
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
