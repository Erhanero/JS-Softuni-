function solve(input){
  let openTabs=Number(input[0]);
  let salary=Number(input[1]);

  for(let i=2; i<=input.length-1; i++){
    let currentTab=input[i];
      if(currentTab==="Facebook"){
        salary=salary-150;
      }else if(currentTab==="Instagram"){
        salary=salary-100;
      }else if(currentTab==="Reddit"){
        salary=salary-50
      }
      if(salary<=0){
        return(`You have lost your salary.`)
      }
      
  }

console.log(salary)
}
