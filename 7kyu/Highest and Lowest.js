function highAndLow(numbers){
  
  const arr = numbers.split(' ');
  
  arr.sort(function (first, second) {
   return first - second;
});
  
  let low = arr[0]
  let high = arr[arr.length-1]
  
return `${high} ${low}`
  
}



//function highAndLow(numbers){
//  numbers = numbers.split(' ').map(Number);
//  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
//}