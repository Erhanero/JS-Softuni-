function hotel([arg1, arg2]){
  let month=arg1;
  let days=Number(arg2);

 let studioprice=0;
  let apartamentprice=0;
  let studiodiscount=0;
  let apartamentdiscount=0;
  

  if(month=="May" || month=="Octomber"){
    studioprice=50*days;
    apartamentprice=65*days;
  }else if (month=="June" || month=="September"){
    studioprice=75.2*days;
    apartamentprice=68.7*days;
  }else if (month=="July" || month=="August"){
    studioprice=76*days;
    apartamentprice=77*days;
  }

   if(days>14){
       apartamentdiscount=0.1;
       if(month=="May" || month=="Octomber"){
           studiodiscount=0.3;

       }else if (month=="June" || month=="September"){
           studiodiscount=0.2;
       }
       else if(days>7 && (month=="May" || month=="Octomber")){
        studiodiscount=0.005;
    }
   }

    let studioresult=(studioprice-(studioprice*studiodiscount)).toFixed(2);
  let apartamentresult=(apartamentprice-(apartamentprice*apartamentdiscount)).toFixed(2);
 console.log(`Apartment: ${apartamentresult} lv.`);
 console.log(`Studio: ${studioresult} lv.`);
}
