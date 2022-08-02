function solution(nums){
  
  if(nums==null){
    return []
  }else{
    nums.sort(function (first, second) {
      return first - second;
    })
  
    return nums
  }
}