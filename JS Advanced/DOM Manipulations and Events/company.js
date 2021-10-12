class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(username, salary, position, department) {
        if (!username || salary <= 0 || !position || !department) {
            throw new Error("Invalid input!");
        }


        if (!this.departments[department]) {
            this.departments[department] = [];

        }
        this.departments[department].push({ username, salary, position });
        return `New employee is hired. Name: ${username}. Position: ${position}`

    }

    bestDepartment() {
        let currentBest = "";
        let maxAverage = 0;
        let entries = Object.entries(this.departments).forEach(([department, workers]) => {
            let average = 0;
            workers.forEach(worker => {
                average += worker.salary;

            })
            average = average / workers.length
            if (average > maxAverage) {
                maxAverage = average;
                currentBest = department
            }
        }
        )

        let result = `Best Department is: ${currentBest}\nAverage salary: ${maxAverage.toFixed(2)}`;
        let test = Object.values(this.departments[currentBest])
            .sort((a, b) => b.salary - a.salary) || a.username.localeCompare(b.username)
        test.forEach(el => {
            result += `\n${el.username} ${el.salary} ${el.position}`
        })

        return result;
    }

}
