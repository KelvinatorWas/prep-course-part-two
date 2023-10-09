/**
 * Matrix
 * Given a string representing a matrix of numbers, return the rows and columns of that matrix.
 *
 * So given a string with embedded newlines like:
 *
 *     9 8 7
 *     5 3 2
 *     6 6 7
 *
 * representing this matrix:
 *
 *         1  2  3
 *       |---------
 *     1 | 9  8  7
 *     2 | 5  3  2
 *     3 | 6  6  7
 *
 * your code should be able to spit out:
 *
 * A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
 * A list of the columns, reading each column top-to-bottom while moving from left-to-right.
 *
 * The rows for our example matrix:
 *
 *     9, 8, 7
 *     5, 3, 2
 *     6, 6, 7
 *
 * And its columns:
 *
 *     9, 5, 6
 *     8, 3, 6
 *     7, 2, 7
 */

class Matrix {
  private matrix:number[][];

  constructor(private matrixInput: string) {
    this.matrix = matrixInput.split("\n").map(row => row.split(" ").map(Number));
  }

  get rows():number[][] {
    return this.matrix;
  }

  get columns():number[][] {
    /*
    # pārmainam rows to columns, es pat kārtīgi nesaprotu matrix
        [0]   [1]    [2]
      [ 89, | 1903,|  3 ],
      [ 18, |   3, |  1 ],
      [  9, |   4, |800 ]

      \/ \/ \/ \/ \/ \/ 

      0:[  89, | 18, |   9],
      1:[1903, |  3, |   4],
      2:[   3, |  1, | 800]
    */
    return this.matrix.map((_, col) => this.matrix.map(row => row[col]));
  }
}

export { Matrix };
