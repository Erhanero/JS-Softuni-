class Hex {
    constructor(value) {
        this.value = Number(value);
    }
    valueOf() {
        return this.value.toString(16);
    }

    toString() {
        return ("0x" + this.value.toString(16)).toUpperCase();
    }
    plus(number) {
        number = Number(number)
        let result = (this.value + number).valueOf();
        return new Hex(result)
    }

    minus(number) {
        number = Number(number);
        let result = (this.value - number).valueOf();
        return new Hex(result)
    }


    static parse(string) {
        return parseInt(string, 16)

    }


}
