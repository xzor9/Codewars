function squareDigits(num){
  
  //turn string into an array
  let arr = Array.from(num.toString()).map(Number);
  
  //square each digit
  for(let i=0;i<arr.length;i++){
    arr[i]=arr[i]*arr[i]
  }
  
  //turn array into integer
  const result = +arr.join("")
  
  return result;
}