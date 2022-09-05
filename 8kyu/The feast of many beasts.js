function feast(beast, dish) {
  
  const beastlen = beast.length
  const dishlen = dish.length
  
  if(beast[0] === dish[0] && beast[beastlen-1] === dish[dishlen-1]){
    return true
  }else{
    return false
  }
  
}