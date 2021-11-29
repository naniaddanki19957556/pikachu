var s=0;
var temp=0;
var rem=0;
var n=promt("enter the number");
while(temp > 0){
  rem=temp%10;
  s=s+rem*rem*rem;
  tem=tem/10;
  if(s==n){
    console.log("number is armstrong");
  }else{
    console.log("number is not armstrong");
  }
}
