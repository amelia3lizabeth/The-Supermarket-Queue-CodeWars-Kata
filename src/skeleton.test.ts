import QUEUE_TIME from "./skeleton";

test("supermarket queue time", () => {
  expect(QUEUE_TIME([5, 3, 4], 1)).toBe(12);
});
// should return 12
// because when there is 1 till, the total time is just the sum of the times

test("supermarket queue time", () => {
  expect(QUEUE_TIME([10, 2, 3, 3], 2)).toBe(10);
});
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

test("supermarket queue time", () => {
  expect(QUEUE_TIME([2, 3, 10], 2)).toBe(12);
});
// should return 12
