function squareSum(numbers){
  let result = 0
  for(let i = 0; i < numbers.length; i++){
    result += Math.pow((numbers[i]), 2)
  }
  return result;
}