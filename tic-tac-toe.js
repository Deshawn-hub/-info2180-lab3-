
//console.log(word)
//word.style.color = "pink";
//word.addEventListener("click", () => {
 //   alert("You clicked the status!");});

 //document.querySelector("div").className= "status";

 
 document.addEventListener("DOMContentLoaded" ,() =>{
     //select all the divs insode the board element 
    const squares = document.querySelectorAll("#board div");
    const titles = Array.from(document.querySelectorAll(".square"));
    const word = document.getElementById("status");
    const btn = document.querySelector(".btn")
    console.log(btn);
    // Loop through each div and add the 'square' class
    squares.forEach(square => {
        square.classList.add("square");


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


        if (checkWin()){
            winsStat(currentPlayer);
            gameactive = false; 
        }else if (options.every(option => option !== "")) {
            updateStatus("It's a tie!");
            gameactive = false;
        }
            if(currentPlayer == playerx){
            currentPlayer = playero;
        } else currentPlayer = playerx;


    }

    function checkWin() {
        return wins.some(combination => {
            return combination.every(index => options[index] === currentPlayer);
        });
    }

    function mousehover (event){
        event.target.classList.add("hover");
    }

    function not_mousehover_ (event){
        event.target.classList.remove("hover");
    }
    //check for a winner or a tie 
    function winsStat(message){

        if(message == "It's a tie!")
            word.textContent = message;
        else{
            
        word.textContent = `Congratulations! ${message} is the Winner!`;
        }
        word.classList.add("you-won");
        
    }

    function resetgame(){
        options= ["","","","","","","","",""];
        gameactive = true;
        currentPlayer = playerx;
        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O");
        });

        word.textContent = "Move your mouse over a square and click to play an X or an O.";
        word.classList.remove("you-won");

        

    }


    


    // put fuctions to the squares 
    squares.forEach(square => {
        square.addEventListener("click", handleClick);
        square.addEventListener("mouseover", mousehover);
        square.addEventListener("mouseout",not_mousehover_)
        
    });



    btn.addEventListener("click",resetgame);



    


   
    





 });











