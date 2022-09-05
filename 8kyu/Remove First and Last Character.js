function removeChar(str){
 
  let newStr = str.substring(1)
  newStr = newStr.slice(0, newStr.length - 1)
  
  return newStr;
};