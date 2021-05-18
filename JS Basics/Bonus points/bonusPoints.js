function bonus([arg1]){
  let num=Number (arg1);
  let bonuspoint=0;
  
  if(num<=100){
    bonuspoint=5;
  }else if (num>1000){
    bonuspoint=0.1*num;
  }
  else if(num>100){
    bonuspoint=0.2*num;
  }
  

  if (num%2==0){
    bonuspoint=bonuspoint+1;
  }else if( num %10==5){
    bonuspoint=bonuspoint+2;}

  console.log (bonuspoint);
  console.log(num+bonuspoint);
}
