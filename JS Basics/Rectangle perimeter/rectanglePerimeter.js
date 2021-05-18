function rectangle ([arg1, arg2, arg3, arg4]){
     x1= Number(arg1);
     y1= Number(arg2);
     x2= Number(arg3);
     y2= Number(arg4);
     
     let a= Math.abs(x1-x2);
     let b= Math.abs(y1-y2)

   console.log(a*b);
   console.log(2*(a+b));
}
