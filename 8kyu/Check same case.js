function sameCase(a, b){
  let first = ""
  let second = ""
  
if(a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase()){
  return -1
}
  
  if (a == a.toUpperCase()) {
 first = "upper"
}
  if (a == a.toLowerCase()){
 first = "lower"
}
  if (b == b.toUpperCase()) {
 second = "upper"
}
  if (b == b.toLowerCase()){
 second = "lower"
}
  
  if(first === second){
    return 1
  }else{
    return 0
  }
  

}


//function sameCase(a, b){
// if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
//    return -1
//  }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
//      return 1
// }else{
//    return 0
//  }
//}