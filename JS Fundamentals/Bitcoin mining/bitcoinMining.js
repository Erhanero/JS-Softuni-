function bitcoinMining(input) {
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let countDays = 0;
    let totalGold = 0;
    let boughtBitcoins = 0;
    let totalMoney = 0;
    let firstDayPurchased = 0;
    let hasBitcoin = false;



    for (let i = 0; i < input.length; i++) {

        let minedGoldEachDay = input[i];
        countDays++;

        if (countDays === 3) {
            minedGoldEachDay = minedGoldEachDay - (minedGoldEachDay * 0.3);
            countDays = 0;
        }

        totalGold = minedGoldEachDay * goldPrice;
        totalMoney += totalGold;

        if (totalMoney >= bitcoinPrice) {
            if (hasBitcoin === false) {
                hasBitcoin = true;
                firstDayPurchased = countDays;
            }
            for (let j = totalMoney; j >= bitcoinPrice; j++) {


                j -= bitcoinPrice;
                totalMoney -= bitcoinPrice;
                boughtBitcoins++
            }
        }
    }
    console.log(`Bought bitcoins: ${boughtBitcoins}`);
    if (hasBitcoin === true) {
        console.log(`Day of the first purchased bitcoin: ${firstDayPurchased}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)

}
