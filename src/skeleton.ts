/**
 * There is a queue for the self-checkout tills at the supermarket.
 * Your task is write a function to calculate the total time required
 * for all the customers to check out
 * @param CUSTOMERS- an array of the amount of time each customer will need to checkout
 * @param NUM_TILLS - the number of tills at the supermarket
 * @returns the total time required for all the customers tro checkout, an integer
 * 
 * pseudocode
 * Create a new array that only includes customer numbers according to how many tills 
 * there are e.g, four tills means that four customer numbers are in this new array
 * append the first customer numbers to that array
 * then make the array and array of arrays with chunks of one
 * then append the next number to the array with the smallest number
 * the final total will be the array with the highest number
 * 
*/

/*helper function; find array with smallest number
define function ([array of numbers]); returns: one array


*/

function QUEUE_TIME(CUSTOMERS: number[], NUM_TILLS: number): number{
  let endArray = [];
  let FIRST_CUSTOMERS = add_w(CUSTOMERS, NUM_TILLS)
  let CHUNKED_FIRST = CHUNK(FIRST_CUSTOMERS)
  for (let i = NUM_TILLS;  i < CUSTOMERS.length; i++ ){
    endArray = appendTo(CHUNKED_FIRST,CUSTOMERS[i])
  }
  console.log(endArray)
  return sum(highestArray(endArray))

}

console.log(QUEUE_TIME([100, 50, 46, 62, 85, 72, 93], 4))

export default QUEUE_TIME;

//works to create the array of the first customer times at the array

function add_w(Number_ARRAYS: number[], NUM:number): number []{
  let TILL_ARRAY = []
  for (let i=0; i < NUM; i++){
  TILL_ARRAY.push(Number_ARRAYS[i]);
  }
  return TILL_ARRAY
}
//console.log(add_w([4,5,7,8,3,6,3],4))

//helper function that turns a number array into an array of chuncks of one
function CHUNK(InputArray: number []):number [][]{
  let SMALLERARRAY = []
  let RESULT = []
  for (let num of InputArray){
      SMALLERARRAY = [num];
      RESULT.push(SMALLERARRAY)
  }
  return RESULT
}
//   console.log(CHUNK([3,5,7,9]))

//helper function to find the array with the lowest sum
function lowestArray(NumArray: number [][]): number {
    let lowest = NumArray[0]
    for (let num of NumArray){
        if (sum(lowest) > sum(num)){
            lowest = num;
        }
    } 
    return NumArray.indexOf(lowest)
}
// console.log(lowestArray([[2,3,6,100],[6,7,9],[7,14,56]]))

//helper function to find the array with the lowest sum
function highestArray(NumArray: number [][]): number[] {
  let highest = NumArray[0]
  for (let num of NumArray){
      if (sum(highest) < sum(num)){
          highest = num;
      }
  } 
  return highest
}
// console.log(highestArray([[2,3,6,100],[6,7,9],[7,14,56]]))

//helper function to find sum of array
function sum(Numbers: number []): number{
    let total = 0
    for (let num of Numbers){
        total += num
    }
    return total
}
//console.log(sum([4,5,7]))


//helper function that appends a number to an array in an array
function appendTo(ArrayofArray: number [][] ,numToAppend: number): number [][]{
    ArrayofArray[lowestArray(ArrayofArray)].push(numToAppend);
    //ArrayofArray[1].push(numToAppend);
    return ArrayofArray
}

//console.log(appendTo([[2,3,6,100],[6,7,9],[7,14,56]], 98))

