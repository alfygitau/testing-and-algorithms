function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substring(1)) + str.charCodeAt(0);
  }
}
 
module.exports = reverseString;