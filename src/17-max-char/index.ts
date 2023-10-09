/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string): string {
    const charCount: Record<string, number> = {};
    str.toLowerCase().replace(/\s+/g, "").split("").forEach(char => {charCount[char] = (charCount[char] || 0) + 1;});
    let maxChar = "";
    let maxCount = 0;
    for (const char in charCount) {
        if (charCount[char] > maxCount) {
            maxChar = char;
            maxCount = charCount[char];
        }
    }
    return maxChar;
}

export { maxChar };
