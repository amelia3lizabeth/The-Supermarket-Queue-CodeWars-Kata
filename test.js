
// TILL_ARRAY = []
// function add(NUM_TILLS){
//   for (let i=0; i < NUM_TILLS; i++){
//    return ( TILL_ARRAY + NUM_TILLS[i]).toString()
//     //.push(CUSTOMERS[i]);
//   }
// }

// console.log(add(3))

//works to create the array of the first customer times at the array
let TILL_ARRAY = []
function add_w(CUSTOMERS, NUM_TILLS){
  for (let i=0; i < NUM_TILLS; i++){
  TILL_ARRAY.push(CUSTOMERS[i]);
  }
  return TILL_ARRAY
}
//console.log(add_w([4,5,7,8,3,6,3],4))


//helper function to find the string with the lowest sum
function lowestArray(NumArray){
    let lowest = NumArray[0]
    for (let num of NumArray){
        if (sum(lowest) > sum(num)){
            lowest = num;
        }
    } 
    return NumArray.indexOf(lowest)
}
// console.log(lowestArray([[2,3,6,100],[6,7,9],[7,14,56]]))


//helper function to find sum of array
function sum(Numbers){
    let total = 0
    for (let num of Numbers){
        total += num
    }
    return total
}
//console.log(sum([4,5,7]))


//helper function that turns a number array into an array of chuncks of one
  function CHUNK(InputArray){
    let SMALLERARRAY = []
    let RESULT = []
    for (num of InputArray){
        SMALLERARRAY = [num];
        RESULT.push(SMALLERARRAY)
    }
    return RESULT
  }
//   console.log(CHUNK([3,5,7,9]))
  
//helper function that appends a number to an array in an array
function appendTo(ArrayofArray,numToAppend){
    ArrayofArray[lowestArray(ArrayofArray)].push(numToAppend);
    //ArrayofArray[1].push(numToAppend);
    return ArrayofArray
}

console.log(appendTo([[2,3,6,100],[6,7,9],[7,14,56]], 98))
