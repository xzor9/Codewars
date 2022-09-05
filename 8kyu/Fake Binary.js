function fakeBin(x){
  const arrayOfDigits = Array.from(String(x), Number);
  
  for(let i=0;i<arrayOfDigits.length;i++){
    if(arrayOfDigits[i]<5){
      arrayOfDigits[i]=0
    }
    else{
      arrayOfDigits[i]=1
    }
  }
  
  return arrayOfDigits.join('')
}


//function fakeBin(x) {
//    return x.split('').map(n => n < 5 ? 0 : 1).join('');
//}