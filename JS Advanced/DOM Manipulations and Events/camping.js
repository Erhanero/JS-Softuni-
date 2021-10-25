class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        money = Number(money);
        if (!this.priceForTheCamp[condition]) {
            throw new Error("Unsuccessful registration at the camp.");

        }
        if (this.listOfParticipants.some(x => x.name == name)) {
            return `The ${name} is already registered at the camp.`
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`
        }

        let participant = {
            name,
            condition,
            power: 100,
            wins: 0
        }
        this.listOfParticipants.push(participant);

        return `The ${name} was successfully registered.`
    }

    unregisterParticipant(name) {
        let checkTheName = this.listOfParticipants.find(x => x.name == name);

        if (checkTheName == undefined) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }

        this.listOfParticipants = this.listOfParticipants.filter(x => x != checkTheName);
        return `The ${name} removed successfully.`
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (participant1 != "" && participant2 != undefined) {
            if (!this._checkTheName(participant1) || !this._checkTheName(participant2)) {
                throw new Error(`Invalid entered name/s.`)
            }
        } else {
            if (!this._checkTheName(participant1)) {
                throw new Error(`Invalid entered name/s.`)

            }
        }


        if (typeOfGame == "WaterBalloonFights") {

            let player1 = this.listOfParticipants.find(x => x.name == participant1);
            let player2 = this.listOfParticipants.find(x => x.name == participant2);

            if (player1.condition != player2.condition) {
                throw new Error(`Choose players with equal condition.`)
            }

            if (player1.power > player2.power) {
                player1.wins += 1;
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            } else if (player2.power > player1.power) {
                player2.wins += 1;
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`
            }


        }
        if (typeOfGame == "Battleship") {

            let participant = this.listOfParticipants.find(x => x.name == participant1);
            participant.power += 20
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }



    }

    _checkTheName(name) {
        if (this.listOfParticipants.some(x => x.name == name)) {
            return true;
        } else {
            return false
        }

    }

    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        this.listOfParticipants
            .sort((a, b) => b.wins - a.wins)
            .forEach(x => {
                result.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`)
            })
        return result.join("\n")
    }
}


const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
console.log(summerCamp.toString());