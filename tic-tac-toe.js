//let word = document.getElementById("status");
//console.log(word)
//word.style.color = "pink";
//word.addEventListener("click", () => {
 //   alert("You clicked the status!");});

 //document.querySelector("div").className= "status";

 
 document.addEventListener("DOMContentLoaded" ,() =>{
     //select all the divs insode the board element 
    const squares = document.querySelectorAll("#board div");
    const titles = Array.from(document.querySelectorAll(".square"));
    // Loop through each div and add the 'square' class
    squares.forEach(square => {
        square.classList.add("square")


    })


    let playerx = "X";
    let playero = "O";
     let currentPlayer = playerx;
    let gameactive = true;
    let options = ["","","","","","","","",""];

    const wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];


    function handleClick (event){
        const square = event.target;
        const index = Array.from(squares).indexOf(square);


        //Disallow cheating cant change the squares while there is someting in it 
        if (options[index] != "" || !gameactive)
            return;

        options[index] = currentPlayer;
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);

        if(currentPlayer == playerx){
            currentPlayer = playero;
        } else currentPlayer = playerx

    }

    function checkWin() {
        return wins.some(combination => {
            return combination.every(index => options[index] === currentPlayer);
        });
    }



    squares.forEach(square => square.addEventListener("click", handleClick));
    


   
    





 });











