function solve(arr) {
    let matchEmoji = /(::|\*\*)[A-Z][a-z]{2,}\1/gm
    let matchDigit = /\d/g;
    let text = arr.join("");
    let coolEmojis = [];


    let emojis = text.match(matchEmoji);
    let digits = text.match(matchDigit);
    let coolTreshold = calculateCoolTreshold(digits);

    for (let emoji of emojis) {
        let currentEmoji = emoji.split("");
        let codeSum = 0;
        for (let i = 2; i < currentEmoji.length - 2; i++) {
            let charCode = currentEmoji[i].charCodeAt();
            codeSum += charCode;

        }
        if (codeSum >= coolTreshold) {
            coolEmojis.push(emoji)
        }
    }
    console.log(`Cool threshold: ${coolTreshold}`);
    console.log(`${emojis.length} emojis found in the text. The cool ones are:\n${coolEmojis.join("\n ")}`);
   

    function calculateCoolTreshold(arr) {
        arr = arr.map((x) => Number(x));
        let sum = 1;
        for (let i = 0; i < arr.length - 1; i += 2) {
            let current = arr[i];
            let second = arr[i + 1];
            sum *= current * second;
        }
        return sum;
    }



}
