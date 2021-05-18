function sum(args){
  let n=Number(args[0]);
  let sum=0;
  let max=Number(args[0]);
  let currentNumber=0;
  let difference=0; 

 for(let i=1; i<=n; i++){
   currentNumber=Number(args[i]);
   sum=sum+currentNumber
   if(currentNumber>max){
     max=currentNumber
   }
  }
   if(max==sum-max){
     console.log(`Yes sum = ${max}`)
   }else{
     difference=Math.abs(max-(sum-max));
     console.log(`No Diff = ${difference}`)
   }
 
 
}
