//start with a variable to save prompt input
let input = prompt('What would you like to do?');

//start with an array to add to or remove from
const todos = ['Collect Eggs', 'Clean Litter Box'];

//first establish finite loop, that will continue running until explicitly told to quit
while (input !== 'quit' && input !== 'q') {

    //inside the loop of variable input prompts, check if input matches one of the other commands
    if (input === 'list') {
        console.log('**********');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('**********');
    }

    //doesn't match previous condition, check if it matches another. add new todo to todos array
    else if (input === 'new') {
        const newTodo = prompt('Okay, what is your new to do?');
        todos.push(newTodo);
        console.log(`${newTodo} added to your list!`);
    }

    //check if it matches this condition instead of previous ones
    //this also checks if delete input is a valid number, able to be changed from string to number using parseInt. By checking that it is NOT 'NOT A NUMBER,' we can go through with the delete or ELSE tell the user their input wasnt a valid index
    else if (input === 'delete') {
        const index = parseInt(prompt('Okay, enter the index to delete the to do.'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Okay, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index.');
        }
    }

    //outside input variable will be checked and the loop will begin
    input = prompt('What would you like to do?');

}

//this is what will print when the while loop is quit
console.log('Okay, you quit the app.');