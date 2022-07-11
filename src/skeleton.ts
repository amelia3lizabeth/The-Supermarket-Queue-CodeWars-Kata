/**
 * There is a queue for the self-checkout tills at the supermarket.
 * Your task is write a function to calculate the total time required
 * for all the customers to check out
 * @param CUSTOMERS- an array of the amount of time each customer will need to checkout
 * @param NUM_TILLS - the number of tills at the supermarket
 * @returns the total time required for all the customers tro checkout, an integer
 */
function QUEUE_TIME(CUSTOMERS: number[], NUM_TILLS: number): number {
  return CUSTOMERS.length * NUM_TILLS;
}

export default QUEUE_TIME;
