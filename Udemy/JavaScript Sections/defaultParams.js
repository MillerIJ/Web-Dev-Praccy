function rollDie(numSides = 6) {    // = SIGN GIVES A DEFAULT VALUE IN CASE A VALUE IS NOT GIVEN, THIS KEEPS THE FUNCTION FROM GIVING NAN WHEN NO VALUE IS GIVEN
    return Math.floor(Math.random() * numSides) + 1;
}

function greet(person, msg = "Hey there", punc = "!") {
    console.log(`${msg}, ${person}${punc}`);
}