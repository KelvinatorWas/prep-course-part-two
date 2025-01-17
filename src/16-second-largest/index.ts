/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]) {
    return array.sort((a:number, b:number) => b - a)[1];
}

export { secondLargest };
