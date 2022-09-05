function betterThanAverage(classPoints, yourPoints) {
  let total = 0
  for(let i=0;i<classPoints.length;i++){
    total += classPoints[i]
  }
  const average = (total + yourPoints)/(classPoints.length+1)
  
  if(yourPoints > average){
    return true
  }else{
   return false 
  }
}