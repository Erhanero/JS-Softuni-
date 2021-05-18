function birthday([arg1, arg2, arg3]){
  let age=Number(arg1);
  let price=Number(arg2);
  let pricetoy=arg3;

  let toy=0;
  let bonusmoney=0;
  let giftmoney=0;

  for (let i=1; i<=age; i++){
    
    if(i%2==0){
      bonusmoney+=10;
    giftmoney=giftmoney+bonusmoney-1
    }else{
      toy++;
    }
  } 
  let totaltoy=toy*pricetoy
 let  totalmoney= giftmoney+totaltoy
 let difference=Math.abs(totalmoney-price).toFixed(2);

 if(totalmoney>=price){
   console.log(`Yes! ${difference}`)
 }else{
   console.log(`No! ${difference}`)
 }

}
