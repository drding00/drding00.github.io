

function getName(){
    let name = prompt("What is your name?");

    if (name === null){
        name = 'Friend';
        return name;
    }
    else {
        return name;
    }
}


class Body extends React.Component{
    render(){
        return(
            <div>
                <p id="welcome-message">Welcome {getName()} to this stupidly simple React app! Here's a picture of a forest:</p>
                <img src="images/forest.jpg" id="image"/>
            </div>
        )
    }
}