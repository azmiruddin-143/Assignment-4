
// node assignment.js

function calculateTax(income, expenses) {

    if (income < 0 || expenses < 0 || income <= expenses) {
        return "Invalid Input";
    }
    let manthlyincome  = income - expenses
    let tax = manthlyincome  * 20 / 100;
    return tax;
}
let man = calculateTax(10000, 3000);
console.log(man);



// task 2 start//

// node assignment.js

function sendNotification(email) {
    if (!email.includes("@")) {
        return "Invalid Email"
    }
    let username = email.slice(0, 8);
    let domainname = email.slice(9);
    let notification = username + " " + "sent you an email from" + " " + domainname;
    return notification;
}

// let finall = sendNotification("zihad.ph@gmail.com");
// console.log(finall);


// task 3 start//

// node assignment.js

function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input"
    }
    for (let i = 0; i < name.length; i++) {
        let chek = name[i];

        if (chek >= "0" && chek <= "9") {
            return true;
        }
    }
    return false

}

// let funal = checkDigitsInName("Raj123")
// console.log(funal);







// task 4 start//

// node assignment.js

function calculateFinalScore(obj) {

    if (typeof obj !== "object") {
        return "Invalid Input";
    }

    else if (obj.testScore > 50 || obj.schoolGrade > 30) {
        return "Invalid Input"
    }

    if (obj.testScore >= 0 || obj.schoolGrade >= 0 || obj.isFFamily === true) {
        let finalscore = obj.testScore + obj.schoolGrade + 20;
        // if (finalscore >= 80) {
        //     return true;
        // }
        // else {
        //     return false;
        // }
    }

}

// let final = calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true });
// // let final = calculateFinalScore(5646);
// console.log(final);