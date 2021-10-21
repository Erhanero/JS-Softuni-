class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = Number(budgetMoney);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        for (let product of products) {
            let [name, quantity, totalPrice] = product.split(" ");
            quantity = Number(quantity);
            totalPrice = Number(totalPrice);
            if (this.budgetMoney >= totalPrice) {
                this.budgetMoney -= totalPrice;

                if (!this.stockProducts[name]) {
                    this.stockProducts[name] = quantity;

                } else {
                    this.stockProducts[name] += quantity;
                }
                this.history.push(`Successfully loaded ${quantity} ${name}`)
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`)
            }
        }

        return this.history.join("\n")

    }

    addToMenu(meal, neededProducts, price) {
        price = Number(price)

        if (!this.menu[meal]) {

            this.menu[meal] = {
                products: {},
                price
            }
            for (let product of neededProducts) {
                product = product.split(" ");

                let [productName, productQuantity] = product;

                if (product.length > 2) {
                    productQuantity = product.pop();
                    productName = product.join(" ");
                }
                productQuantity = Number(productQuantity)
                this.menu[meal].products[productName] = productQuantity

            }
            let meals = Object.keys(this.menu)
            if (meals.length == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            } else {
                return `Great idea! Now with the ${meal} we have ${meals.length} meals in the menu, other ideas?`
            }

        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }


    }

    showTheMenu() {
        let result = [];
        if (Object.entries(this.menu).length == 0) {
            return `Our menu is not ready yet, please come later...`;
        }

        Object.entries(this.menu).forEach(meal => {
            result.push(`${meal[0]} - $ ${meal[1].price}`)
        })
        return result.join("\n")
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        let hasProducts = true;

        Object.entries(this.menu[meal].products)
            .forEach(x => {
                let [needProduct, needQuantity] = x;

                if (this.stockProducts[needProduct]) {
                    if (needQuantity <= this.stockProducts[needProduct]) {
                        this.stockProducts[needProduct] -= needQuantity;
                    } else {
                        hasProducts = false;

                    }
                } else {
                    hasProducts = false;
                }

            })

        if (hasProducts) {
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
        } else {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
        }

    }

}

let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));


