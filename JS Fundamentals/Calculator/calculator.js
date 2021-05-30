function calculator(number, operator, secondNumber){
   let result = 0;
  
    if(operator === "+"){
        result = (number + secondNumber).toFixed(2);
    }else if (operator === "-"){
        result = (number - secondNumber).toFixed(2);
    }else if(operator === "*"){
        result = (number * secondNumber).toFixed(2);
    }else if(operator === "/"){
        result = (number / secondNumber).toFixed(2);
    }
  
    console.log(result)
}
