function test(input){
   let days=Number(input[0]);
   let index=1;
   let winMoney=0;
   let totalWin=0;
   let totalLost=0;
   let money=0;
   let daysWon=0;
   let daysLost=0;
   
    while(index<input.length){
        let current=input[index]
        let typeGame=input[index++];
        let result=input[index];
       if(current==="Finish"){
           
           if(totalWin>totalLost){
               winMoney=winMoney+(winMoney*0.1);
               money+=winMoney;
               winMoney=0;
               totalWin=0;
               totalLost=0;
               daysWon++
        continue;
           }else {
               daysLost++
               money+=winMoney;
               winMoney=0;
               totalWin=0;
               totalLost=0;
               
               continue;
               
           }
           
       }
        if(result==="win"){
            winMoney+=20;
            totalWin++
        }
        else if(result==="lose"){
            totalLost++
        }
       

        index++;
    }
    if(daysWon>daysLost){
        let total=money+(money*0.2);
        console.log(`You won the tournament! Total raised money: ${total.toFixed(2)}`);
    }
    else {
       console.log(`You lost the tournament! Total raised money: ${money.toFixed(2)}`);
    }
}
