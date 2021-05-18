function store([arg1, arg2, arg3]){
  let productname=arg1;
  let city=arg2;
  let quantity=Number(arg3);

  let price=0;
  

  if(city=="Sofia"){
    if(productname=="coffee"){
      price =0.5;
     
    }else if(productname=="water"){
      price=0.8;
     
    }else if(productname=="beer"){
      price=1.20;
    }else if(productname== "sweets"){
      price=1.45;
    }else if(productname=="peanuts"){
      price=1.60;
    }
  }
  if(city=="Plovdiv"){
    if(productname=="coffee"){
      price =0.4;
    }else if(productname=="water"){
      price=0.7;
    }else if(productname=="beer"){
      price=1.15;
    }else if(productname== "sweets"){
      price=1.30;
    }else if(productname=="peanuts"){
      price=1.50;
    }
  }
  if(city=="Varna"){
    if(productname=="coffee"){
      price =0.45;
    }else if(productname=="water"){
      price=0.7;
    }else if(productname=="beer"){
      price=1.1;
    }else if(productname== "sweets"){
      price=1.35;
    }else if(productname=="peanuts"){
      price=1.55;
    }
  }
  console.log(quantity*price);
}
