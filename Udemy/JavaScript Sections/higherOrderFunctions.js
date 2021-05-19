
//FUNCTION THAT ACCEPTS OTHER FUNCTION AS ARGUMENT
// function callTwice(func) {
//     func();
//     func();
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll)
// }

// callTwice(rollDie);



//FUNCTION THAT RETURNS OTHER FUNCTION - MUST BE CAPTURED WITH A VARIABLE TO EXECUTE
// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log('Congrats, I am a good function!')
//             console.log('You win a million dollars!')
//         }
//     } else {
//         return function () {
//             alert('You have been infected by a computer virus!')
//             alert('Stop trying to close this window!')
//             alert('Stop trying to close this window!')
//             alert('Stop trying to close this window!')
//             alert('Stop trying to close this window!')
//             alert('Stop trying to close this window!')
//             alert('Stop trying to close this window!')
//         }
//     }
// }

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}
//by itself this function returns it's inner function - in order to execute the function that it has created with our variables, you must save it to a variable, so that it preserves the min and max from earlier, and then you can run it like its own function
// makeBetweenFunc(5, 10);



// function isBetween(num) {
//     return num >= 50 && num <= 100;
// }
// function isBetween2(num) {
//     return num >= 1 && num <= 10;
// }