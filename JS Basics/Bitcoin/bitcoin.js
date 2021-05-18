function bitcoin([arg1, arg2, arg3]){
   let bitcoin= Number(arg1);
   let chinese=Number(arg2);
   let comission=Number(arg3);

   let totalbitcoin=bitcoin*1168;  //leva
   let totalchinese= (chinese*0.15)*1.76; //leva
   let totaleuro= (totalbitcoin+totalchinese)/1.95; //euro
   let com= (totaleuro*comission)/100;
   let result= totaleuro-com;

   console.log(result.toFixed(2));
}
