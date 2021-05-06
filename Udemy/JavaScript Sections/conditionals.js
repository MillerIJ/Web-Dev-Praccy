// let random = Math.random();
// if (random < 0.5) {
//     console.log("Your number is less than 0.5!");
// } else {
//     console.log("Your number is greater than or equal to 0.5!");
// }
// console.log(random);


// const dayOfWeek = prompt("Enter a day:").toLowerCase();
// if (dayOfWeek === "monday") {
//     console.log("Ugh, I hate Mondays.");
// }
// else if (dayOfWeek === "saturday") {
//     console.log("Yay! I love Saturdays!");
// }
// else if (dayOfWeek === "friday") {
//     console.log("Fridays are decent, especially after work.");
// }
// else {
//     console.log("Meh.");
// }


// 0-5 free
// 5-10 $10
// 10-65 $20
// 65+ $10

// const age = -35;
// if (age < 0) {
//     console.log("You don't even exist. Just go in, I guess.")
// } else if (age < 5) {
//     console.log("You are a baby. You get in for free.");
// } else if (age < 10) {
//     console.log("You are a child. You pay $10.");
// } else if (age < 65) {
//     console.log("You are an adult. You pay $20.");
// } else {
//     console.log("You are a senior. You pay $10.");
// }


// const password = prompt("Please enter a password.");
// if (password.length >= 6) {
//     if(password.indexOf(" ") === -1){
//         console.log("Valid Password!")
//     } else {
//         console.log("Password cannot contain spaces!")
//     }
// } else {
//     console.log("Password too short! Must be 6+ characters")
// }


const userInput = prompt("Enter Something!")
if (userInput) {
    console.log("Truthy!")
} else {
    console.log("Falsey!")
}