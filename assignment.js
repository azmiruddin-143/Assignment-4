
// node assignment.js

function calculateTax(income, expenses) {

    if (income < 0 || expenses < 0 || expenses >= income) {
        return "Invalid Input";
    }

    let manthlyincomeabg = income - expenses
    let tax = manthlyincomeabg * .20;
    // return tax;
}
// let man = calculateTax(10000, 3000);
// console.log(man);



// task 2 start//

// node assignment.js

function sendNotification(email) {
    if (!email.includes("@")) {
        return "Invalid Email"
    }
    let username = "zihad.ph";
    let domingname = "gmail.com";
    // return username + " sent you an email from " + domingname
}

// let finall = sendNotification("zihad.ph@gmail.com");
// console.log(finall);




// task 3 start//

// node assignment.js

function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input"
    }

    let numberchek = /\d/;
    return numberchek.test(name);

}

//  let funal = checkDigitsInName("Raj123")
//  console.log(funal);



// task 4 start//

// node assignment.js

function calculateFinalScore(obj) {

      if(typeof obj !== "object"){
        return "Invalid Input";
      }

      

    if (obj.testScore >= 0 || obj.schoolGrade >= 0 || obj.isFFamily === false) {
        let finalscore = obj.testScore + obj.schoolGrade + man;
        if (finalscore >= 80) {
            return true;
        }
        else if(obj.isFFamily === true){
            let man = 80;
          }
        else {
            return false;
        }
    }

}

let final = calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true });

// let final = calculateFinalScore(5646);
console.log(final);