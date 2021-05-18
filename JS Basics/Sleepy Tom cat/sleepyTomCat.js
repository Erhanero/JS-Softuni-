function sleep([arg1]){
  let holidays=Number(arg1);

  let workdays= 365-holidays;
  let playtime= (workdays*63) + (holidays*127)
  let catsleep= Math.abs(30000-playtime);
  let hours=Math.trunc(catsleep/60);
  let minutes=catsleep%60;

  if(playtime>30000){
    console.log(`Tom will run away`)
    console.log(`${hours} hours and ${minutes} minutes more for play`
    )
  }else if (playtime<=30000){
    console.log(`Tom sleeps well` )
    console.log (`${hours} hours and ${minutes} minutes less for play`)
  }
}
