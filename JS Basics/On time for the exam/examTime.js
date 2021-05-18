function exam([arg1, arg2, arg3, arg4]){
  let examHour=Number(arg1);
  let examMinutes=Number(arg2);
  let arrivalHour=Number(arg3);
  let arrivalMinutes=Number(arg4);

  let examTotalMinutes=examMinutes+(examHour*60);
  let arrivalTotalMinutes=arrivalMinutes+(arrivalHour*60);

  let difference=examTotalMinutes-arrivalTotalMinutes;
  
  if(difference<0){
    console.log("late")
  }else if (difference<=30){
    console.log("On time")
  }else{
    console.log("Early")
    if(difference<60){
      console.log(`${difference}minutes before the start`)
    }
  }else {
    let hours=Math.abs(Math.trunc(difference/60));
    let minutes=Math.abs(difference%60);
    if(minutes<10){
      minutes="0"+minutes;
    }
    console.log(`${hours}:${minutes} hours before the start`)
  }
  }
