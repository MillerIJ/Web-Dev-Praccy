const nums = [13, 4, 2, 5, 1, 88, 99, 40, 23, 8, 3, 100, 94, 384, 2, 1, 7, 4, 3, 7, 3, 234, 2, 6, 1, 274, 5];
Math.max(nums); //NaN
Math.max(...nums); //384


const cats = ['Pudding', 'Charlie', 'Holly', 'Felix', 'Frodo', 'Bagheera', 'Blue'];
const copy = [...cats];
const dogs = ['Zachary', 'Ellie', 'Tucker', 'Zeus', 'Tigger', 'Mika'];
const allPets = [...cats, ...dogs, 'Crush', 'Leddy', 'Bailey', 'Juliet', 'Ciambella', 'Ally'];


const feline = {
    legs: 4,
    family: 'Felidae'
};
const canine = {
    isFurry: true,
    family: 'Canidae'
};
const catDog = { ...feline, ...canine };


const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
};

const newUser = { ...dataFromForm, id: 555, isAdmin: false };