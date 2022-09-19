// Using the magic eight ball as a base, create a "fortune cookie" application. 

//This application should:

    // Create a "Fortune Cookie" class
    
    // On a button click, Show a fortune to the user that is generated from the Fortune Cookie class

    // Not allow the user to look at a new fortune unless:

        // The user clicks a separate button to "pick up a new fortune cookie"

        // Clicking this button will also replace the text on the screen with "Please open your cookie"

let fortune = "";
let printedFortunes = ["That wasn't chicken", "You peaked in High School", "Learn to live slowly", "Bring a rain coat"];

const button = document.querySelector('button');
const fortuneTxt = document.getElementById("fortuneTxt");
const paper = document.getElementById("paper");
const recycledPaper = document.getElementById("recycledPaper");

class Cookie{

    constructor(){
        this.flavor = 3;
        this.energy = 6;
        this.crunch = Math.random() * 10;
    };
    
}

class Fortune extends Cookie{
    constructor(flavor, energy, crunch){
        super(flavor, energy, crunch);
        this.kind = 'fortune cookie'
    }
    getFortune(){
        let fortuneNumber = Math.floor(Math.random() * printedFortunes.length);
    
        fortune = printedFortunes[fortuneNumber];
        return fortune;
    };

}
function updateBackground(){
    background = document.getElementsByClassName("bkgrd");
    curBkgrd = background[0].id;

    console.log("update bkgrd: " + curBkgrd);

    if (curBkgrd == "openBkgrd"){
        background = document.getElementById("openBkgrd");
        background.id = "fortuneBkgrd"
    } else if (curBkgrd == "fortuneBkgrd"){
        background = document.getElementById("fortuneBkgrd");
        background.id = "closedBkgrd"
    } else if (curBkgrd == "closedBkgrd"){
        background = document.getElementById("closedBkgrd");
        background.id = "fortuneBkgrd"
    } else {
        background = document.getElementsByClassName("bkgrd");
        background.id = "openBkrd"
    }
}

function recyclingPaper(){
    
    displayPaper = document.getElementById("paper");
    
    if (displayPaper.style.display === "flex"){
        displayPaper.style.display = "none";
    } else {
        displayPaper.style.display = "flex";
    } 
}

function updateButton(){

    if (button.id == 'open'){
        button.id = 'fortune';
        button.innerHTML = 'Pick up a new fortune cookie';
        displayFortune();
    } else if (button.id == 'fortune'){
        button.id = 'refresh';
        button.innerHTML = 'Please open your cookie';
    } else if (button.id == 'refresh'){
        displayFortune();
        button.id = 'fortune';
        button.innerHTML = 'Pick up a new fortune cookie'
    } else {
        button.id = 'open';
        button.innerHTML = 'Open fortune cookie';
    }
    updateBackground();
}

function displayFortune(){

    let cookie = new Fortune();
    let printedFortune = cookie.getFortune();
    fortuneTxt.innerHTML = printedFortune;
    console.log(printedFortune);


}

button.addEventListener("click", function(){
    
    recyclingPaper();

    updateButton();

})
