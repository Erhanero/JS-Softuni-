function comission([arg1, arg2]){
  let city=arg1;
  let sale=Number(arg2);

let prcnt=0;

  if (city=="Sofia" ){
    if (sale>=0 && sale<=500){
      prcnt=0.05;
    }else if (500<sale && sale<=1000){
      prcnt=0.07;
    }else if (sale>=1000&& sale<=10000){
      prcnt=0.08;
    }else if (sale>10000){
      prcnt=0.12
    }
  }
  if (city=="Varna" ){
     if (0<=sale && sale<=500){
      prcnt=0.045;
    }else if (500<sale && sale<=1000){
      prcnt=0.075;
    }else if (1000<sale && sale<=10000){
      prcnt=0.1;
    }else if (sale>10000){
      prcnt=0.13
    }
  }
  if (city=="Plovdiv" ){
     if (0<=sale && sale<=500){
      prcnt=0.055;
    }else if (500<sale &&sale<=1000){
      prcnt=0.08;
    }else if (1000<sale && sale<=10000){
      prcnt=0.12;
    }else if (sale>10000){
      prcnt=0.145
    }
  }else{
    console.log("error")
  }
  console.log((prcnt*sale).toFixed(2));
}
