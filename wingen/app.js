console.log('app.js is connected!');

// a place to hold entry names
let contestants = [];

// targeting message displays
const winnerDisplay = document.getElementById('winner');
const errorDisplay = document.getElementById('error');

// targeting form inputs
const submit = document.getElementById('add-user');
const nameInput = document.getElementById('userEntry'); 
const winner = document.getElementById('select-winner');
const clear = document.getElementById('clear-entries');


// listening for the form submit, clear, or selecting a winner
submit.addEventListener('click', addName);
winner.addEventListener('click', getWinner);
clear.addEventListener('click', clearEntries);


// add a name to the list
function addName(event){

    // prevent the form from auto-running on submit
    event.preventDefault();
    
    // if the submit button is hit and the text input is empty
    if(nameInput.value === ""){
        errorDisplay.textContent = 'Enter a name!';
    }

    else{

        let name = nameInput.value;

        // when entering a new name, check to see if it already exists in the array
        if (contestants.includes(name)){
            nameInput.value = "";
            errorDisplay.textContent = 'That name already exists!';
        }
        
        // if the name isn't in the array, add it
        else{
            contestants.push(name);
            nameInput.value = "";
            errorDisplay.textContent = "";
            console.log(contestants);
        }

    }

}

function getWinner(event){
    event.preventDefault();

    let rand, temp;

    // take the contestant array and scramble it
    for(var i = contestants.length -1; i > 0; i--){
        // Generate a random number
        rand = Math.floor(Math.random() * i);
    
        // Use the random number and store its corrosponding element in the temp variable
        tmp = contestants[rand];
    
        // Set the randomly picked index to be current element
        contestants[rand] = contestants[i];
    
        // Set the current index to be the randomly picked element
        contestants[i] = tmp;
    }

    console.log(contestants);

    // pick a random element from the array (code pulled from 8ball project)
    const winNum = Math.floor(Math.random() * contestants.length);

    console.log(winNum);

    // update the winner display with the chosen name
    winnerDisplay.textContent = 'The winner is: ' + contestants[winNum];
}


function clearEntries(event){
    event.preventDefault();

    // Reset the winner display regardless if it's been changed or not
    winnerDisplay.textContent = '';

    // Reset the contestants array to an empty array
    contestants = [];

    console.log(contestants);
    console.log("entries cleared!");
}