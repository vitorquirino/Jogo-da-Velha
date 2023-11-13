document.addEventListener('DOMContentLoaded', () => {


    let squares = document.querySelectorAll(".piece");

    squares.forEach((piece) => {
        piece.addEventListener('click', handleClick);
    })


})

function handleClick (event){
    console.log(event.target);
}