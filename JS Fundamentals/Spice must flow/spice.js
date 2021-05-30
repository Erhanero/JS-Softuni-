function spice(startingYield) {

    let spice = 0;
    let mineDays = 0;
    let totalAmount = 0;

    while (startingYield >= 100) {

        spice = startingYield;
        spice -= 26;
        mineDays++;
        totalAmount += spice;
        startingYield -= 10;
        if (startingYield < 100) {
            totalAmount -= 26
        }
    }

    console.log(mineDays);
    console.log(totalAmount)

}
