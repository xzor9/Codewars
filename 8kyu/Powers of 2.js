function powersOfTwo(n){
  let results = []
  for (i=0; i<=n; i++){
    results.push(Math.pow(2, i))
    }
  return results
}

powersOfTwo(10)