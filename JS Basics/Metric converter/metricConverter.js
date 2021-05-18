function speed(input){
  let num= Number(input[0]);
  let inpt=input[1];
  let output= input[2];

  if(inpt=="mm"){
    num=num/1000;
    


  }else if(inpt=="cm"){
    num=num1/100;
  

  }else{
    num=num

  }
  if(output=="m"){
    console.log(num.toFixed(3));
  }else if(output=="cm"){
    console.log((num*100).toFixed(3));

  }else if(output=="mm"){
    console.log((num*1000).toFixed(3));
  }
}
