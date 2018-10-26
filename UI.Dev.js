// Capitalize and Trim a String
String.prototype.camelCase = function() {
  let str = this;
  const arr = str.split(' ');
  let disStr = '';
  for(let char = 0; char < arr.length; char++) {
    disStr += arr[char].charAt(0).toUpperCase() + arr[char].slice(1).toLowerCase();
  }
  return disStr;
}

// Get middle a String
function getMiddle(s) {
  const middle = (s.length / 2);
  const isInt = Number.isInteger(middle);
  const left = isInt ? middle - 1 : middle;
  const right = middle + 1;
  return s.substring(left, right);
}

// function getMiddle(str) {
//   const middle = parseInt(str.length / 2);
//   console.log(middle);
//   let disStr = str.length % 2 == 0 ? str[middle - 1] + str[middle] : disStr = str[middle];
//   return disStr;
// }

// function getMiddle(str) {
  // while(str.length > 2) {
  //   str = str.substring(1, str.length - 1);
  // }
  // return str;
// }

// function getMiddle(str) {
//   if(str.length <= 2) {
//     return str;
//   }
//   const disStr = str.substring(1, str.length - 1);
//   return getMiddle(disStr);
// }

// Return number of vowels in the given string
function getCount(str) {
  var vowelsCount = 0;
  
  // enter your majic here
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for( let c = 0; c < str.length; c++) {
    if(vowels.indexOf(str[c]) !== -1) {
      vowelsCount++;
    }
  }
  
  return vowelsCount;
}

// Is valid IP
function isValidIP(str) {
  const sIP = str;
  var ipRE  = /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/;
  if(ipRE.test(sIP)) {
    return true;
  }
  return false;
}

//Convert Number to binary string
function addBinary(a,b) {
  let s = a + b;
  if( s < 0) {
    s = 0xFFFFFFFF + s + 1;
  }
  const rs = parseInt(s, 10).toString(2);
  return rs;
}

//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
function pigIt(str){
  //Code here
  const TEXT = 'ay';
  const strs = str.split(' ');
  let disStr = [];
  for(let c = 0; c < strs.length; c++) {
    const subStr = strs[c].substring(1, strs[c].length);
    disStr.push(subStr + strs[c].charAt(0) + TEXT);
  }
  return disStr.join(' ');
}

// Config Run
const isCamelCase = false;
const isGetMiddleString = false;
const isGetCountVowelsChar = false;
const isCheckIPValid = false;
const isConvertNumberToBinary = false;
const isPigIt = true;

// Main
if(isCamelCase) {
  const word = 'hello javascript abc';
  const rs = word.camelCase();
  console.log('input: ', word, ' output: ', rs);
}

if(isGetMiddleString) {
  const word = "middle";
  const rs = getMiddle(word);
  console.log('input: ', word, ' output: ', rs);
}

if(isGetCountVowelsChar) {
  const word = "o a kak ushakov lil vo kashu kakao";
  const numVowels = getCount(word);
  console.log('input: ', word, ' output: ', numVowels);
}

if(isCheckIPValid) {
  const ip = '123.456.78.90';
  const isValid = isValidIP(ip);
  console.log('input: ', ip, ' output: ', isValid);
}

if(isConvertNumberToBinary) {
  const a = 0;
  const b = -3;
  const binaryString = addBinary(a, b);
  console.log('input: ', a,',', b, ' output: ', binaryString);
}

if(isPigIt) {
  const word = 'Pig latin is cool';
  const rs = pigIt(word);
  console.log('input: ', word, ' output: ', rs);
}
// kkkkkkkk

// eeeeee