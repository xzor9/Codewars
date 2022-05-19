function check(a, x) {
  let found = false
  for(let i=0;i<a.length;i++){
    if(a[i]===x){
      found = true
    }
  }
  return found
}


//const check = (a,x) => a.includes(x);
