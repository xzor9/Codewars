function abbrevName(name){
    let spaceIndex = name.indexOf(' ')+1
    return name.charAt(0).toUpperCase()+"."+name.charAt(spaceIndex).toUpperCase();
}