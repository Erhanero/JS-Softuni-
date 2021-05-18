function area([arg1, arg2, arg3, arg4, arg5]){
  let lengthlanding= Number (arg1);
  let widthtile=Number (arg2);
  let lengthtile= Number(arg3);
  let widthbench= Number (arg4);
  let lengthbench= Number(arg5);

  let arealanding= lengthlanding* lengthlanding;
  let onetilearea= widthtile*lengthtile;
  let areabench= widthbench*lengthbench;
   
  let realarealanding=arealanding-areabench;
  let tilesofarea= realarealanding/onetilearea;
  let time=tilesofarea*0.2;

  console.log(tilesofarea);
  console.log(time.toFixed(2));

}
