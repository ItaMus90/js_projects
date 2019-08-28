var buttons = document.querySelectorAll("button");
var modal = document.querySelector(".modal");
var backdrop = document.querySelector(".backdrop");

var outputP = document.getElementById("quote");
var textArea = document.querySelector(".modal textarea");

var quote = "A Modal Component On a Webpage - how hard could it be ?";
var editedQuote = "";


function updateP() {

    outputP.textContent = quote;

}

function closeModal(){

    modal.style.display = "none";
    backdrop.style.display = "none";

}

updateP();

// Open modal
buttons[2].addEventListener("click", function(){

    modal.style.display = "block";
    backdrop.style.display = "block";
    editedQuote = quote;
    textArea.value = quote;

});

//Class backdrop
backdrop.addEventListener("click", closeModal);

// Cancel button
buttons[0].addEventListener("click", closeModal);

// Confirm button
buttons[1].addEventListener("click", function(){

    closeModal();

    if(editedQuote.trim().length > 0){

        quote = editedQuote;
        updateP();

    }

});

textArea.addEventListener("input", function(){

    editedQuote = textArea.value;

});