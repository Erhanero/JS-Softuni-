function vegetableStore([arg1, arg2, arg3]){
  let vegetable=arg1;
  let day= arg2;
  let quantity=Number (arg3);

  let price=0;

  if(day=="Monday" || day=="Tuesday" || day=="Wednesday" || day=="Thursday"|| day=="Friday"){
    if (vegetable=="banana"){
      price=2.5;
    }else if (vegetable=="apple"){
      price=1.20;
    }else if (vegetable=="orange"){
      price=0.85;
    }else if (vegetable=="grapefruit"){
      price=1.45;
    }else if(vegetable=="kiwi"){
      price=2.70;
    }else if (vegetable=="pineapple"){
      price=5.5;
    }else if (vegetable=="grapes"){
      price=3.85;
    }
  }
  if(day=="Saturday" || day=="Sunday"){
    if (vegetable=="banana"){
      price=2.7;
    }else if (vegetable=="apple"){
      price=1.25;
    }else if (vegetable=="orange"){
      price=0.9;
    }else if (vegetable=="grapefruit"){
      price=1.6;
    }else if(vegetable=="kiwi"){
      price=3;
    }else if (vegetable=="pineapple"){
      price=5.6;
    }else if (vegetable=="grapes"){
      price=4.2;
    }
    else{
    }
  }else{
    console.log("error")
  }
  console.log((quantity*price).toFixed(2));
}
