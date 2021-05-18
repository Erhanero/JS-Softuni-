function percent(args){
  let n= Number(args[0]);
  let p1=0;
  let p2=0;
  let p3=0;
  let p4=0;
  let p5=0;

  let p1prcnt=0;
  let p2prcnt=0;
  let p3prcnt=0;
  let p4prcnt=0;
  let p5prcnt=0;

  for( let i=1; i<=n; i++){
    let currentNum=Number(args[i]);
    if(currentNum<200){
      p1++
    }else if(currentNum<400){
      p2++
    }else if(currentNum<600){
      p3++
    }else if (currentNum<800){
      p4++
    }else{
      p5++
    }
    p1prcnt=(p1/n*100).toFixed(2);
    p2prcnt=(p2/n*100).toFixed(2);
    p3prcnt=(p3/n*100).toFixed(2);
    p4prcnt=(p4/n*100).toFixed(2);
    p5prcnt=(p5/n*100).toFixed(2);

  }
  console.log(p1prcnt);
  console.log(p2prcnt);
  console.log(p3prcnt);
  console.log(p4prcnt);
  console.log(p5prcnt)


}
