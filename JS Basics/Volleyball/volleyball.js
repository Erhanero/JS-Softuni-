function volleyball(input){
  let typeOfYear=input[0];
  let holidays=Number(input[1]);
   let weekends= Number(input[2]);

   let realWeekends=48-weekends;
   let playVolleyballWeekends= (realWeekends*0.75)+weekends;

  let playVolleyballHolidays=holidays*0.66;
  let totalGames=playVolleyballHolidays+playVolleyballWeekends;
  if(typeOfYear=="leap"){
    totalGames=totalGames+(totalGames*0.15);
  }
  console.log(Math.round(totalGames));
}
