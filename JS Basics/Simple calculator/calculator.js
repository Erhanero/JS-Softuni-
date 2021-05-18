function calculate([arg1, arg2, arg3]){
  let num1=Number (arg1);
  let num2=Number(arg2);
  let operate=arg3;

  
  let result=0;
  let output=0;
  numberis=0;

  if (num2==0 &&(operate=="/"|| operate=="&")){
    console.log("Cannot divide" + num1+ "by zero")
  }
if(operate=="+" || operate=="-" || operate=="*"){
  if (operate=="+"){
    result=num1+num2;
    
  }else if(operate=="-"){
    result=num1-num2;
  }else if (operate=="*"){
    result=num1*num2;
  }
  if(operate=="+"|| operate=="-"|| operate=="*"){
    if(result%2==0){
      numberis="even"
    }else{
      numberis="odd"
    }
  }
  console.log(`${num1} ${operate} ${num2} = ${result} - ${numberis}`)
}
  if( operate=="/"){
    result=(num1/num2).toFixed(2);
    console.log(`${num1} / ${num2} = ${result}`)
  }else if (operate=="%"){
    result=num1%num2;
    console.log(`${num1} % ${num2} = ${result}`)
  }
}  
