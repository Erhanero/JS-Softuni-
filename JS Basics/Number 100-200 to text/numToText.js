function numbers([arg1]){
  let num=Number(arg1);
  let firstDigit=Math.floor(num/10);
  let secondDigit= num%10;

  if (num<20)
  {
    if(num==0){
      console.log("zero")
    }  
  else if(num==1){
    console.log("one")
  }
  else if(num==2){
    console.log("two")
  }
  else if(num==3){
    console.log("three")
  }
  else if(num==4){
    console.log("four")
  }
  else if(num==5){
    console.log("five")
  }
  else if(num==6){
    console.log("six")
  }
  else if(num==7){
    console.log("seven")
  }
  else if(num==8){
    console.log("eight")
  }
  else if(num==9){
    console.log("nine")
  }
  else if(num==10){
    console.log("ten")
  }
  else if(num==11){
    console.log("eleven")
  }
  else if(num==12){
    console.log("twelve")
  }
  else if(num==13){
    console.log("thirtheen")
  }
  else if(num==14){
    console.log("fourteen")
  }
  else if(num==15){
    console.log("fiveteen")
  }
  else if(num==16){
    console.log("sixteen")
  }
  else if(num==17){
    console.log("seventeen")
  }
  else if(num==18){
    console.log("eighteen")
  }
  else if(num==19){
    console.log("nineteen")
  }}


  
  
  if(firstDigit==2){
    firstDigit="twenty";
  }else if (firstDigit==3){
    firstDigit="thirty";
  }
  else if (firstDigit==4){
    firstDigit="fourty";
  }else if (firstDigit==5){
    firstDigit="fifty";
  }
  else if (firstDigit==6){
    firstDigit="sixty";
  }
  else if (firstDigit==7){
    firstDigit="seventy";
  }
  else if (firstDigit==8){
    firstDigit="eighty";
  }
  else if (firstDigit==9){
    firstDigit="ninety";
  }

if(num>20)
{
  if(secondDigit==1){
    secondDigit="one";
  }else if (secondDigit==2){
    secondDigit="two";
  }
  else if (secondDigit==3){
    secondDigit="three";
  }
  else if (secondDigit==4){
    secondDigit="four";
  }
  else if (secondDigit==5){
    secondDigit="five";
  }
  else if (secondDigit==6){
    secondDigit="six";
  }
  else if (secondDigit==7){
    secondDigit="seven";
  }
  else if (secondDigit==8){
    secondDigit="eight";
  }
  else if (secondDigit==9){
    secondDigit="nine";
  }}

  if(num==100){
    console.log("one hundred")
  }
  if(num>20 && num<100 &&secondDigit==0 ){
      console.log(firstDigit);
  }
  if (num > 20 && secondDigit!=0 && num<100 ){
    console.log(firstDigit+" "+secondDigit);
}
if(num<=-1 || num>=101){
    console.log("invalid number");
}}
