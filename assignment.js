
function calculateTax(income, expenses) {

    if (income < 0 || expenses < 0 || income <= expenses) {
        return "Invalid Input";
    }
    let manthlyincome = income - expenses;
    let tax = manthlyincome * 20 / 100;
    return tax;
}



function sendNotification(email) {
    if (!email.includes("@")) {
        return "Invalid Email";
    }
    let [username, domainname] = email.split("@");
    let notification = username + " " + "sent you an email from" + " " + domainname;
     return notification;
}



function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input";
    }
    for (let i = 0; i < name.length; i++) {
        let chek = name[i];

        if (chek >= "0" && chek <= "9") {
            return true;
        }
    }
    return false;

}



function calculateFinalScore(obj) {

    if (typeof obj !== "object") {
        return "Invalid Input";
    }
    
    let score = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily){
        finalscore = score + 20;
    }
    
     if(obj.isFFamily && score >=60){
        return true;
     }

     else if (!obj.isFFamily && score >=80){
        return true;
     }
     else {
        return false;
     }

}



function waitingTime(waitingTimes, serialNumber) {

    if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
        return ("Invalid Input");
    }

    let sum = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        sum = sum + waitingTimes[i];
    }

    let average = Math.round(sum / waitingTimes.length);
    let sirial = serialNumber - 1;
    let mysirial = sirial - waitingTimes.length;
    let sirialtime = average * mysirial;
    return sirialtime;
}




















// let score = obj.testScore + obj.schoolGrade;

//     if (obj.isFFamily) {
//         finalscore = score + 20;
//     }
     
//     if(obj.isFFamily && score >= 80 ){
//         return true;
//     }
//     else if (obj.isFFamily && score >= 60){
//         return true;
//      }
//      else if (obj.isFFamily && score < 60){
//         return false;
//      }

//     else if (!obj.isFFamily && score < 80){
//          return false;
//     }

//     else if (!obj.isFFamily && score >= 80){
//         return true;
//    }