function ticket([arg1, arg2, arg3]){
  let budget=Number (arg1);
  let type=arg2;
  let group=Number(arg3);

  let transport=0
  let ticket=0;
  

if (group<=4){
  transport=0.75*budget;
}else if(group<=9){
  transport=0.6*budget;
} else if (group<=24){
  transport=0.5*budget;
}else if (group<=49){
  transport=0.4*budget;
}else if (group>=50){
  transport=0.25*budget;
}

if(type=="Normal"){
  ticket=249.99*group;
}else if (type=="VIP"){
  ticket=499.99*group;
}
let realbudget=budget-transport;
let difference= (realbudget-ticket).toFixed(2);
if(realbudget>ticket){
  console.log(`Yes! You have ${difference} leva left.`)
}else{
  console.log(`Not enough money! You need ${Math.abs(difference).toFixed(2)} leva.`)
}
}
