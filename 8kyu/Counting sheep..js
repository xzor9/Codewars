function countSheeps(arrayOfSheep) {
  let count = 0

  for(let i = 0; i<arrayOfSheep.length; i++){
   if (arrayOfSheep[i]){
     count ++;
     console.log("+1")
   }
  }
  return count;
}