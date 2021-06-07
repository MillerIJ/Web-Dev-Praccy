//CHANGING ALL IMAGES TO ONE IMAGE BY SELECTING ALL HTML IMG ELEMENTS, CREATING A VARIABLE FOR THE HTML COLLECTION, AND LOOPING OVER IT.
// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     img.src = 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80';
// }

// const squareImages = document.getElementsByClassName('square');
// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

//FINDING ALL LINKS INSIDE PARAGRAPHS AND PRINTING THEIR HREFS
const links = document.querySelectorAll('p a');
for (let link of links) {
    console.log(link.href);
}