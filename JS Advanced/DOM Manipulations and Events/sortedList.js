class List {
    constructor(list = []) {
        this.list = list.sort((a, b) => a - b);
        this.size = this.list.length;
    }
    add(element) {
        this.list.push(element);
        this.list.sort((a, b) => a - b);
        this.size++;

    }

    remove(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error("Index doesn't exist")
        } else {
            this.list.splice(index, 1)
        }
    }

    get(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error("Index doesn't exist")
        } else {
            return this.list[index]
        }
    }
}
