function areYouPlayingBanjo(name) {
  if(name.charAt(0) == 'r' || name.charAt(0) == 'R'){
    name = name + " plays banjo"
  }
  else{
    name = name + " does not play banjo"
  }
  return name;
}