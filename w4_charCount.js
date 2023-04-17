/*
Theoretical HW: charCount
In this homework, you will be practicing working with frequency counters by creating a function called charCountthat counts the occurrences of each character in a given string.

Instructions
Build this homework in repl.it.
Write a function named charCount that accepts a single string argument and returns an object that represents the count of each character in the string.
The returned object should have keys that represent the character with its value set to the how many times the character appears in the string argument.

*Upper and lower case characters should be counted as the same character. (Hard part)

*Space characters should be completely ignored. (Hard part)

Examples
charCount('hello')should return { h: 1, e: 1, l: 2, o: 1 }.
charCount('Today is fantastic!')should return { t: 3, o: 1, d: 1, a: 3, y: 1, i: 2, s: 2, f: 1, n: 1, c: 1, '!': 1 }.
*/

function charCount(str) {
  const freqCounter = {};

  for (let i = 0; i < str.length; i++) {
    //skip whitespace
    if (str[i] === " ") continue;

    //ignore case
    str = str.toLowerCase();

    if (freqCounter[str[i]]) freqCounter[str[i]]++;
    else freqCounter[str[i]] = 1;
  }
  return freqCounter;
}

let str = "Today is fantastic";

console.log(charCount(str));
