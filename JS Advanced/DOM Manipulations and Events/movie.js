class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this._screenings = [];
        this.profit = 0;
        this.totalSoldTickets = 0;
    }

    newScreening(date, hall, description) {
        let screen = this._screenings.find(x => x.date === date && x.hall === hall);
        if (screen === undefined) {
            this._screenings.push({
                date,
                hall,
                description
            })
            return `New screening of ${this.movieName} is added.`
        } else {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`)

        }

    }
    
    endScreening(date, hall, soldTickets) {
        let screen = this._screenings.find((x => x.date == date && x.hall == hall));

        if (screen == undefined) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`)

        } else {
            let index = this._screenings.indexOf(screen);
            this._screenings.splice(index, 1)
            // this._screenings = this._screenings.filter(x => x.date != date && x.hall != hall);
            let currentProfit = this.ticketPrice * Number(soldTickets);
            this.profit += currentProfit;
            this.totalSoldTickets += soldTickets;


            return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`
        }

    }

    toString() {
        let result = [];
        result.push(`${this.movieName} full information:`);
        result.push(`Total profit: ${this.profit.toFixed(0)}$`);
        result.push(`Sold Tickets: ${this.totalSoldTickets}`)

        if (this._screenings.length > 0) {
            result.push("Remaining film screenings:");
            this._screenings.sort((a, b) => a.hall.localeCompare(b.hall))
                .forEach(x => {
                    result.push(`${x.hall} - ${x.date} - ${x.description}`)
                })

        } else {
            result.push("No more screenings!")
        }
        return result.join("\n")



    }
}
