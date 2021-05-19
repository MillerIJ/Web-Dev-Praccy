// let count = 0;
// while (count < 10) {
//     console.log(`While Loop #${count}`);
//     count++;
// }
//IS THE SAME AS:
// for (let i = 1; i <= 10; i++) {
//     console.log(`For Loop #${i}`);
// }

// const SECRET = "babyHippo";
// let guess = prompt("enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("enter teh secret code...")
// }
// console.log("CONGRATS YOU GOT THE SECRET CODE!")

// let input = prompt("Hey say something");
// while (true) {
//     input = prompt(input);
//     if (input.toLocaleLowerCase() === "stop copying me") {
//         break;
//     }
// }
// console.log("ok you win");

// for (let i = 0; i <= 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }


// //GUESSING GAME
// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter the maximum number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// // console.log(targetNum);

// let guess = parseInt(prompt("Enter your first guess"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') {
//         break;
//     }
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess");
//     } else {
//         guess = prompt("Too low! Enter a new guess");
//     }
// }
// if (guess === 'q') {
//     console.log("ok you quit")
// } else {
//     console.log(`You got it! It took you ${attempts} guesses.`);
// }

