function getCount(str) {
  var vowelsCount = 0;
  
  for(let i=0;i<str.length;i++){
    if(str.charAt(i)==='a' || str.charAt(i)==='e' || str.charAt(i)==='i' || str.charAt(i)==='o' || str.charAt(i)==='u'){
      vowelsCount +=1
    }
  }
  return vowelsCount;
}

//function getCount(str) {
//  return (str.match(/[aeiou]/ig)||[]).length;
//}