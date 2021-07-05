import {
  addTwoArrays,
  calculateTotal,
  locateNumber,
  removeEvenNumbers,
  sortedArrayOfObjects,
} from "./datastructures";

describe("Datastructures in Javascript", () => {
  it("should add two arrays together in the order provided", () => {
    const arr1 = [0, 2, 4];
    const arr2 = [6, 10, 20];
    const result = addTwoArrays(arr1, arr2);
    expect(result).toEqual([0, 2, 4, 6, 10, 20]);
  });

  it("should remove even numbers from the array", () => {
    const arr = [1, 7, 8, 2, 4, 5];
    const result = removeEvenNumbers(arr);
    expect(result).toEqual([1, 7, 5]);
  });

  it("should return the correct boolean if the number can be located in the array", () => {
    const arr = [0, 3, 34, 5, 9, 123, 2];
    const numberInArray = 34;
    const numberNotInArray = 77;

    const resultNumberInArray = locateNumber(arr, numberInArray);
    const resultNumberNotInArray = locateNumber(arr, numberNotInArray);
    expect(resultNumberInArray).toEqual(true);
    expect(resultNumberNotInArray).toEqual(false);
  });

  it("should return the total for the numbers provided in the array", () => {
    const arr = [1, 2, 3, 4];
    const result = calculateTotal(arr);
    expect(result).toEqual(10);
  });

  it("should sort the array of objects by name order", () => {
    const people = [
      {
        name: "James",
        age: 38,
        occupation: "Racounteur",
      },
      {
        name: "Autumn",
        age: 6,
        occupation: "Nuclear physicist",
      },
      {
        name: "Harry",
        age: 27,
        occupation: "Professional Footballer",
      },
    ];

    const peopleResult = [
      {
        name: "Autumn",
        age: 6,
        occupation: "Nuclear physicist",
      },
      {
        name: "Harry",
        age: 27,
        occupation: "Professional Footballer",
      },
      {
        name: "James",
        age: 38,
        occupation: "Racounteur",
      },
    ];

    const result = sortedArrayOfObjects(people);
    expect(result).toEqual(peopleResult);
  });
});
