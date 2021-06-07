//SECOND APPROACH TO EVENTS
const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log('you clicked me!');
    console.log('i hope it worked');
}

function scream() {
    console.log('AAAAAAAHHH');
    console.log('STOP TOUCHING ME')
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = function () {
    alert('you clicked the H1!');
}


//THIRD APPROACH TO EVENTS
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("CLICKED!")
})


function twist() {
    console.log("TWIST")
}
function shout() {
    console.log("SHOUT")
}

const tasBtn = document.querySelector('#tas');

// tasBtn.onclick = shout; //DOESN'T WORK
// tasBtn.onclick = twist;

tasBtn.addEventListener('click', twist, { once: true }); //THIS DOES WORK!
tasBtn.addEventListener('click', shout);