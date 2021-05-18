function holiday([arg1, arg2]){
  let budget=Number(arg1);
  let season=arg2;

  let prcnt=0;
   let destination="";
  let holidayinfo=""; 

  if(budget<=100 ){
    
   
    if(season="summer"){
      destination="Bulgaria";
      holidayinfo="Camp"
      prcnt=0.3*budget;
    }else {
      destination="Bulgaria";
      holidayinfo="Hotel";
      prcnt=0.7*budget;
    } 
    
    
  }
  if(budget<=1000 && budget>100){
    if(season=="summer"){
      destination="Balkans";
      holidayinfo="Camp";
      prcnt=0.4*budget;

    }else{
      destination="Balkans";
      holidayinfo="Hotel";
      prcnt=0.8*budget;
    }
    
    
  }
  else{
    holidayinfo="Hotel"
    destination="Europe";
    prcnt=0.9*budget;
  }
  console.log(`Somewhere in ${destination}`);
  console.log(`${holidayinfo} - ${prcnt.toFixed(2)}`)
}
