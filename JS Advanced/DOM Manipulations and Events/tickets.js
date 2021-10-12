function solve(arr, sortingCriterion) {
    let tickets = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (let el of arr) {
        let [destination, price, status] = el.split("|");
        price = Number(price);

        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket)

    }

    if (sortingCriterion == "price") {
        tickets = tickets.sort((a, b) => a.price - b.price);
    } else if (sortingCriterion == "destination") {

        tickets = tickets.sort((a, b) => a.destination.localeCompare(b.destination))
    } else if (sortingCriterion == "status") {
        tickets = tickets.sort((a, b) => a.status.localeCompare(b.status))

    }
    return tickets;

}
