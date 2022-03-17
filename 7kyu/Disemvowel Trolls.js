function disemvowel(str) {
  const noVowels = str.replace(/[aeiou]/gi, '');
  return noVowels;
}