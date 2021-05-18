function solve(input){
    let index=0;
    let countLocation=Number(input[index++]);
    let extraction=0;
    let averageExtraction=0;
    let day=0;
    let sumExtraction=0;


    while(index<input.length){
        let goalaverage=Number(input[index++]);
        let days=Number(input[index++])
        sumExtraction=0;
        for(let i=0; i<days;i++){
             extraction=Number(input[index++]);
             sumExtraction+=extraction;
             averageExtraction=(sumExtraction/days).toFixed(2);
            
            
        }
        if(averageExtraction>=goalaverage){
            console.log(`Good job! Average gold per day: ${averageExtraction}. `);

        }else if(averageExtraction<goalaverage){
            console.log(`You need ${(goalaverage-averageExtraction).toFixed(2)} gold.`)
        }  
        
        
    }

}
