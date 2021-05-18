function demo(input){
    let length=Number(input[0]);
    let width=Number(input[1]);
    let height=Number(input[2]);
    let percent=Number(input[3]);
  
  let capacity=length*width*height;
  let totallitres= capacity*0.001;
  let reallitres=totallitres-(totallitres*(percent*0.01))
  
  console.log(reallitres)
  }
