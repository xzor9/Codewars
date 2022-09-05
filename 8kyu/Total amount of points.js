function points(games) {
  let score = 0
  
  for(let i=0;i<10;i++){
    let x = String(games[i])[0]
    let y = String(games[i])[2]
    
    if(x>y){
      score+=3
    }else if(x===y){
      score+=1
    }
  }
  return score
}