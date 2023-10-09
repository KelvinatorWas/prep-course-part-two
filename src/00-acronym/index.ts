/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
    const str:string[] = input.toUpperCase().replace(/[^a-zA-Z0-9']/g, " ").split(" ");
    return str.map((word:string) => word.charAt(0)).join(""); 
}

export { parse };
