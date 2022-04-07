function bonusTime(salary, bonus) {
  if(bonus){
    const money = salary*10
    return `£${money}`
  }
  else{
    return `£${salary}`
  }
}

//return bonus ? `£${10 * salary}` : `£${salary}`;