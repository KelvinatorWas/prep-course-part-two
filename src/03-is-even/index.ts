/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

function isEven(n: number) {
    // Ja 'n' ir 4 (binary - 10'0') zemākais bits ir 0, un izteiksme ir "(4 & 1 === 0)" tā ir patiesa. 
    // Tātad 4 ir "even" skaitlis, jo zemākais bits "odd" skaitlim 1, tākā 5 ir (binary - 10'1'). 
    return (n & 1) === 0;
}

export { isEven };
