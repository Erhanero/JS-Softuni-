function solve(arr) {
    let obj = {
        vip: [],
        regular: [],
    };
    let indexOfParty = arr.indexOf("PARTY");
    let reservationLists = arr.slice(0, indexOfParty);
    let guests = arr.slice(indexOfParty + 1, arr.length);
    reservationLists.forEach((guest) => {

        if (isVip(guest) == true) {
            obj.vip.push(guest);
        } else {
            obj.regular.push(guest)
        }
    })

    guests.forEach((guest) => {
        if (Object.values(obj.vip).includes(guest)) {
            let index = obj.vip.indexOf(guest);
            obj.vip.splice(index, 1)
        } else if (Object.values(obj.regular).includes(guest)) {
            let index = obj.regular.indexOf(guest)
            obj.regular.splice(index, 1)
        }
    })
    
   function isVip(guest) {
        let character = guest[0];
        return !isNaN(character);
    }
  
    let allGuests = obj.vip.concat(obj.regular)
    console.log(allGuests.length);
    console.log(allGuests.join("\n"))
}
