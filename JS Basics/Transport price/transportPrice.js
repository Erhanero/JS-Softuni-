function transport([arg1, arg2]){
  let km=Number(arg1);
  let period=arg2;

  let price=0;

  if(period== "day"&&km<20 ){
    price=(0.79*km)+0.7;
   }else if(km>=100){
    price=0.06*km;
   }else if (km>=20){
     price=0.09*km;
   }
   
   if(period=="night" && km<20){
     price=(0.90*km)+0.70;
   }
   else if (km>=100){
    price= 0.06*km;
   }else if (km>=20){
     price=0.09*km;
   }
   
  console.log(price);
}
