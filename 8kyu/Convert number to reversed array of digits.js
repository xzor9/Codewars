function digitize(n) {

  let myFunc = num => Number(num);
  
  var intArr = Array.from(String(n), myFunc);
  
  return intArr.reverse();
}


//function digitize(n) {
  //return String(n).split('').map(Number).reverse()
//}