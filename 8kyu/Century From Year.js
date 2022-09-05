function century(year) {
  let century = 0
  if (year%100==0){
    century = year/100
  }
  else{century = Math.floor(year/100)+1;}
  return century
}


//function century(year) {
//  return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
//}