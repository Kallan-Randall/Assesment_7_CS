// 1) Sum zero
function addToZero(numbers) {
    for (let num of numbers) {
      if (numbers.includes(-num)) {
        return true;
      }
    }
    return false;
}


//  2) Unique Characters
function hasUniqueChars(word) {
    const uniqueChars = "fun";
  
    for (let char of word) {
      if (!uniqueChars.includes(char)) {
        return false;
      }
    }
    return true;
}

// const words = ["hello", "world", "unique", "characters", "problem"];
// for (let word of words) {
//   const hasUnique = hasUniqueChars(word);
//   console.log(`${word}: ${hasUnique}`);
// }
  
//  3) Pangram Sentence
function isPangram(sentence) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let char of alphabet) {
    if (!sentence.toLowerCase().includes(char)) {
      return false;
    }
  }

  return true;
}

const sentence1 = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(sentence1));  

const sentence2 = "I like cats, but not mice";
console.log(isPangram(sentence2));  

// 4) Longest Word
function findLongestWord(words) {
    let maxLength = 0;
  
    for (let word of words) {
      if (word.length > maxLength) {
        maxLength = word.length;
      }
    }
  
    return maxLength;
}
// const words = ["apple", "banana", "cherry", "elderberry"];
// const longestWordLength = findLongestWord(words);
// console.log(longestWordLength);
  
