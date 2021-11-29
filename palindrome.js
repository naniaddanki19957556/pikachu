function palin(str) {
  var len=string.len;
  for(var i=0;i<len/2;i++) {
    if(str[i]!==str[len-i-1]){
      return "It is not a palindrome";
    }
  }else{
    return "It is a palindrome";
  }
}
const str=promt("enter the string");
var res=checkpalin(string);
console.log(res);
