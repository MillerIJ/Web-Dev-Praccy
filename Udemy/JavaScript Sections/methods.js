const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num * num * num;
    }
}


//KEYWORD 'THIS'
const cat = {
    name: 'Bagheera',
    color: 'black',
    breed: 'maine coone',
    meow() {
        console.log(`${this.name} says MEOW!`)
    }
}