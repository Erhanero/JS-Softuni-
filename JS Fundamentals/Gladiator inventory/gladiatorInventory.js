function gladiatorInventory(arr) {
    let inventory = arr.shift().split(" ");

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].split(" ");
        let command = current[0];
        let equipment = current[1];

        if (command === "Buy") {
            buy(equipment);
        } else if (command === "Trash") {
            trash(equipment);
        } else if (command === "Repair") {
            repair(equipment);
        } else if (command === "Upgrade") {
            upgrade(equipment);
        }
     }
  
    function buy(equip) {
        inventory.push(equip);
        return inventory;
    }

    function trash(equip) {
        let index = inventory.indexOf(equip);
        inventory.splice(index, 1);
        return inventory;
    }

    function repair(equip) {
        let index = inventory.indexOf(equip);
        let newArr = inventory.splice(index, 1);
        let newArrToString = newArr.toString()
        inventory.push(newArrToString)
        return inventory;
    }

    function upgrade(equip) {
        let index = inventory.indexOf(equip);
        let item = equip.split("-");
        for (let i = 0; i < inventory.length; i++) {
            if (item[0] === inventory[i]) {
                let newItem = item[0] + ":" + item[1];
                inventory.splice(i + 1, 0, newItem)
            }
        }
        return inventory;
    }

    console.log(inventory.join(" "))
}
