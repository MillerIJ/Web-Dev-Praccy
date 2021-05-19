// function isSnakeEyes(num1, num2) {
//     if (num1 === 1 && num2 === num1) {
//         console.log("Snake Eyes!");
//     } else {
//         console.log("Not Snake Eyes!");
//     }
// }

// function add(x, y){
//     if(typeof x !== 'number' || typeof y !== 'number'){
//         return false;
//     }
//     //if return stops further execution of function, so else statement is not necessary. if variables are not caught in if net, it will move on to the next piece of code to the next return statement. 
//     let sum = x + y;
//     return sum; // or 'return x + y;'
// }


//function that returns last element of an array without modifying the array
// function lastElement(targetArr) {
//     if (targetArr.length === 0) {
//         return null;
//     }
//     return targetArr[targetArr.length - 1];
// }


//function that capitalizes only the first letter of a string
// function capitalize(ogStr) {
//     return ogStr.slice(0, 1).toUpperCase() + ogStr.slice(1);
// }



//function that sums an array
// function sumArray(arr) {
//     let total = 0;
//     for (let num of arr) {
//         total += num;
//     }
//     return total;
// }


//function that takes numbers 1-7 and returns corresponding day of the week
function returnDay(num) {
    if (num === 0 || num > 7) {
        return null;
    }
    const weekDays = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'
    }
    return weekDays[num];
}