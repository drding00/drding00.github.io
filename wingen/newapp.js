console.log('app.js is connected!');

// a place to hold entry names
let entries = [];


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


// Add a name to the list
function addName(event){

// prevent the form from auto-running on submit
event.preventDefault();

    // Check to see if viewerEntries exists in localstorage. If not, create it and update it with the first name
    if(localStorage.getItem('viewerEntries') === null){


        // if the submit button is hit and the text input is empty
        if(nameInput.value === ""){
            errorDisplay.textContent = 'Enter a name!';
        }

        else{

            // Store name from form input
            let newName = nameInput.value;

            // when entering a new name, check to see if it already exists in the array
            if (entries.includes(newName)){
                nameInput.value = "";
                errorDisplay.textContent = 'That name already exists!';
            }
            
            // if the name isn't in the array, add it
            else{
                entries.push(newName);

                // create localStorage item with array as the value
                localStorage.setItem('viewerEntries', JSON.stringify(entries));

                // Reset displays
                nameInput.value = "";
                errorDisplay.textContent = "";
            
            }   

        }

    }


    // If the LS items it does exist, just add the new name
    else{
    
        // if the submit button is hit and the text input is empty
        if(nameInput.value === ""){
            errorDisplay.textContent = 'Enter a name!';
        }

        else{

            // Store name from form input
            let newName = nameInput.value;

            // Retrieve localStorage and save the value in a placeholder array
            let currentEntries = JSON.parse(localStorage.getItem('viewerEntries'));
            entries = currentEntries; // update local array 

            // when entering a new name, check to see if it already exists in the array
            if (entries.includes(newName)){            
                nameInput.value = "";
                errorDisplay.textContent = 'That name already exists!';
            }            
                    
            // if the name isn't in the array, add it
            else{

                // add new name to placeholder array
                entries.push(newName);

                // Update localStorage with placeholder array values
                localStorage.setItem('viewerEntries', JSON.stringify(entries));

                // Reset displays
                nameInput.value = "";
                errorDisplay.textContent = "";
            }

        }

    }
}

function getWinner(event){
    event.preventDefault();

    let rand, temp;

    // Retrieve localStorage and save the value in a placeholder array
    let currentEntries = JSON.parse(localStorage.getItem('viewerEntries'));
    entries = currentEntries; // update local array 

    // take the entries array and scramble it
    for(var i = entries.length -1; i > 0; i--){
        // Generate a random number
        rand = Math.floor(Math.random() * i);
    
        // Use the random number and store its corrosponding element in the temp variable
        tmp = entries[rand];
    
        // Set the randomly picked index to be current element
        entries[rand] = entries[i];
    
        // Set the current index to be the randomly picked element
        entries[i] = tmp;
    }

    // pick a random element from the array (code pulled from 8ball project)
    const winNum = Math.floor(Math.random() * entries.length);

    console.log(winNum);

    // update the winner display with the chosen name
    winnerDisplay.textContent = 'The winner is: ' + entries[winNum];
}


function clearEntries(){

    // Delete localStorage item from browser
    localStorage.removeItem('viewerEntries');

     // Reset the winner display regardless if it's been changed or not
    winnerDisplay.textContent = '';

    // Reset the entries array to an empty array
    entries = [];
}