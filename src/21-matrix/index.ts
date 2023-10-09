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
  private matrix3x3:number[][];

  constructor(private matrix: string) {
    this.matrix3x3 = matrix.split("\n").map(row => row.split(" ").map(Number));
  }

  get rows():number[][] {
    return this.matrix3x3;
  }

  get columns():number[][] {
    const column: number[][] = new Array(this.matrix3x3[0].length);
    for (let col = 0; col < this.matrix3x3[0].length; col++) {
      column[col] = new Array(this.matrix3x3.length);
      for (let row = 0;row < this.matrix3x3.length; row++) {
        column[col][row] = this.matrix3x3[row][col];
        }
      }
    return column;
    }
  }

export { Matrix };
