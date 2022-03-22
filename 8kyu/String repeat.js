function repeatStr (n, s) {
  let newString = ''
  for(let i = 0; i < n; i++){
    newString += s
  }    
  return newString
}

// repeatStr = (n, s) => s.repeat(n)