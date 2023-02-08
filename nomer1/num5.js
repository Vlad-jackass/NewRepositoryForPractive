let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    for (let value of Object.entries(salaries)) {
        return Math.max(value)
    }
}
console.log(topSalary(salaries))