/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  count(str: string): { [key: string]: number } {
    const words:string[] = str.toLowerCase().split(/\s/g).filter(Boolean);

    const wordCount:{[key:string]:number} = Object.create(null);
    words.forEach((word:string) => { wordCount[word] = (wordCount[word] || 0) + 1;});


    return wordCount;
  }
}

export { Words };
