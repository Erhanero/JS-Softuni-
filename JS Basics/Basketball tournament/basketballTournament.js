function solve(input){

   
   let index=0;
   let win=0;
   let lose=0;
   let game=0;
   let totalGames=0;

    

   while(input[index]!="End of tournaments"){

    let nameTournament=input[index++];
    let numberGames=input[index++];
 for(let i=0; i<=input[index]; i++){
     let desiTeam=Number(input[index++]);
     let otherTeam=Number(input[index++]);
     game++
     if(desiTeam>otherTeam){
         win++
         console.log(`Game ${game} of tournament ${nameTournament}: win with ${desiTeam-otherTeam} points.`)
     }else if(desiTeam<otherTeam){
         lose++;
         console.log(`Game ${game} of tournament ${nameTournament}: lost with ${otherTeam-desiTeam} points.`)
     }
     if(game==numberGames){
         game=0;
     }
     totalGames++
     
 }

   
}
console.log(`${(win/totalGames*100).toFixed(2)}% matches win`);
console.log(`${(lose/totalGames*100).toFixed(2)}% matches lost`)
}
