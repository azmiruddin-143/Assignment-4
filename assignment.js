
// node assignment.js

function calculateTax(income, expenses) {

    if (income < 0 || expenses < 0 || expenses >= income) {
        return "Invalid Input";
    }
    
    let manthlyincomeabg = income - expenses
    let tax = manthlyincomeabg * .20;
    return tax;
}
let man = calculateTax(10000, 3000);
console.log(man);


