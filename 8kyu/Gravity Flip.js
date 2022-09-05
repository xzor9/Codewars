const flip=(d, a)=>{
  
  if (d=='R'){

    var numArray = a;
    numArray.sort(function(a, b) {
    return a - b;
});
    
    sorted=numArray
    
  } 
  
  else if (d=='L'){

  var numArray = a;
  numArray.sort(function(a, b) {
  return a - b;
});
    
    sorted = numArray.reverse();
  }
  
  console.log(sorted)
  return sorted;
  
}