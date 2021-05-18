function movie([arg1, arg2, arg3]){
  let projection= arg1;
  let rows=Number(arg2);
  let columns=Number(arg3);

  let price=0;
  let full=rows*columns;
  switch(projection){
    case "Premiere": price=12;break;
    case "Normal": price=7.5;break;
    case "Discount": price=5;break;

   }
  console.log((full*price).toFixed(2)+ " Leva")
}
