function getMiddle(s)
{
  console.log(s)
  let evenOrOdd = ''
  let letter = ''
  let middle = s.length/2
  
  if(s.length%2===0){
    evenOrOdd = 'even'
  }else{
    evenOrOdd = 'odd'
  }
  
  if(evenOrOdd === 'odd'){
    letter = s.charAt(middle)
    return letter
  }else{
    letter += s.charAt(middle-0.5)
    letter += s.charAt(middle+0.5)
    return letter
  }
}