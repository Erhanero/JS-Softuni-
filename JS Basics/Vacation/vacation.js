function solve(input){
  let target=Number(input[0]);
  let budget=Number(input[1]);
  let index=2;
  let days=0;
  let spendDays=0;


  while(true){

    let operation= input[index++];
    let amount=Number(input[index])

    if(operation==="spend"){
      spendDays++;
      days++;
      if(amount>budget){
        budget=0;
      }else{
      budget-=amount
      }
    }else if(operation==="save"){
      spendDays=0;
      days++;
      budget+=amount
    }
    if(spendDays===5){
      console.log("You can't save the money.")
      console.log(days);
      break;
    }
    if(budget>=target){
      console.log(`You saved the money for ${days} days.`)
      break;
    }
    index++;
  }
}
