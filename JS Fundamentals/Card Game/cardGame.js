function solve(arr) {
    let points = {
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1,
    }

    let obj = {};
    arr.forEach((el) => {
        let [name, cards] = el.split(": ");
        if (!obj.hasOwnProperty(name)) {
            obj[name] = new Set(cards.split(", "))
        } else {
            cards.split(", ").forEach((card) => {
                obj[name].add(card)
            })


        }
    })
    let objEntries = Object.entries(obj);
    for (let [name, cards] of objEntries) {
        let sum = 0;

        cards.forEach((card) => {
            card = card.split("")
            let type = card.pop();
            let power = card.join("");

            if (points.hasOwnProperty(power)) {
                sum += points[power] * points[type]
            } else {
                sum += power * points[type]
            }
        })
        console.log(`${name}: ${sum}`)
    }
}
