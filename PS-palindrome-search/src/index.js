document.getElementById("palindromeButton").onclick = () => {
  const inputValue = document.getElementById("palindromeInput").value;
  console.log(inputValue);
  const result = getSecondLongestPalidromeFrom(inputValue);
  document.getElementById("output").innerHTML = result;
};

function isPalindrome(str) {
  var reverseStr = str
    .split("")
    .reverse()
    .join("");
  return reverseStr === str;
}

function getSecondLongestPalidromeFrom(str) {
  var reg = /[\W_]/g;
  var lowerStr = str.toLowerCase().replace(reg, "");
  const palindromes = [];

  for (let endIndex = str.length; endIndex > 1; endIndex--) {
    for (
      let beginIndex = 0;
      beginIndex <= str.length - endIndex;
      beginIndex++
    ) {
      const word = lowerStr.substring(beginIndex, endIndex + beginIndex);
      if (isPalindrome(word)) {
        palindromes.push(word);
        if (palindromes.length === 2) {
          return `Found Palindrome: ${palindromes[1]}`;
        }
      }
    }
  }

  if (palindromes.length === 1) {
    return "No Second Palindrome exists";
  }
  return "No Palindrome exists";
}
