function solve(arr) {
    let map = new Map;
    let result = new Map;

    for (let el of arr) {
        let [juice, quantity] = el.split("=>");
        quantity = Number(quantity)

        if (!map.has(juice)) {
            map.set(juice, quantity)
        } else {
            let currentQuantity = map.get(juice);
            map.set(juice, currentQuantity + quantity)
        }

        let bottles = 0;
        let totalQuantity = map.get(juice)

        if (map.get(juice) >= 1000) {
            bottles = Math.trunc(totalQuantity / 1000);

            result.set(juice, bottles)
        }
    }
    [...result].forEach(x => {
        console.log(`${x[0]}=> ${x[1]}`);
    })



}
