/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n: number): void {
    if (n > 0) {
        for (let x = 1, y = 0; y < n; y++, x++) {
            console.log("#".repeat(x) + " ".repeat(n-x))
        }
    }
}

export { steps };
