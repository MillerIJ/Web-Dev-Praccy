// function sum() {
//     return arguments.reduce((total, el) => total + el);
// }
//THIS DOES NOT WORK BC ARGUMENTS IS NOT AN ACTUAL ARRAY
//ARGUMENTS COLLECTS ALL THE ARGUMENTS FROM A FUNCTION, BUT IT CANNOT BE USED WITH ARRAY METHODS

function sum(...nums) {
    return nums.reduce((total, el) => total + el);

}

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`Gold Medal Goes To: ${gold}`);
    console.log(`Silver Medal Goes To: ${silver}`);
    console.log(`Thanks To All Other Participants: ${everyoneElse}`);
}