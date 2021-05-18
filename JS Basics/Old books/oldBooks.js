function books(input){
  let book=input[0];
  let index=1;
  let currentBook=input[index];
  let bookIsFound=false;

 while(true){

   if(currentBook===book){
     bookIsFound=true;
     break;
   }
   
   index++
   currentBook=input[index];
 }
 if(bookIsFound===false){
   console.log(`The book you search is not here!`);
   console.log(`You checked ${index-1} books.`)
 }else{
   console.log(`You checked ${index-1} books and found it.`)
 }
}
