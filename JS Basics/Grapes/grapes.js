function grapes([arg1, arg2, arg3, arg4]){
  let grapesarea=Number(arg1);
  let grapеssqrmeter=Number(arg2);
  let litrewine=Number (arg3);
  let workers=Number(arg4);

  let realproduct= grapesarea*0.4;
  let wine= (realproduct*grapеssqrmeter)/2.5;
  let result= Math.trunc(wine-litrewine);
  let wineforworkers=result/workers;

  if(wine<litrewine){
    console.log(`It will be a tough winter! More ${Math.abs(result)} liters wine needed.`)
  }else if(wine>=litrewine){
    console.log(`Good harvest this year! Total wine: ${wine} liters. `);
    console.log(`${Math.abs(result)} liters left -> ${Math.ceil(wineforworkers)} liters per person.`);
  }

}
