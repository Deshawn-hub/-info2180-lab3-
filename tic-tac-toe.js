//let word = document.getElementById("status");
//console.log(word)
//word.style.color = "pink";
//word.addEventListener("click", () => {
 //   alert("You clicked the status!");});

 //document.querySelector("div").className= "status";
 document.addEventListener("DOMContentLoaded" ,() =>{
     //select all the divs insode the board element 
    const divider = document.querySelectorAll("#board div");
    // Loop through each div and add the 'square' class
    divider.forEach(square => {
        square.classList.add("square")
    })




 });
 

