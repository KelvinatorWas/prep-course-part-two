/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n: number): void {
    if (n > 0) {
        for (let y = 0, x = 1; y < n; y++, x++) {
            let char = " ".repeat(n - x)
            console.log(char +  "#".repeat(y + x) + char);
        }
    }   
}

export { pyramid };
