// define a function called "average"
// It should take a single parameter: an array of numerical test scores
// It should return the average score of the array rounded to the nearest whole number
// there's a Math. attribute that can round

var scores = [90, 98, 89, 100, 100, 86, 94]; 
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

function average(){
	var sum = 0;
    scores.forEach(function(grade){
        sum += grade;
     });
    var newsum = sum / scores.length;
    return Math.round(newsum);
    
}


// var scores = [90, 98, 89, 100, 86, 94]; 
// average(scores);
// var scores2 = [40, 65, 77, 80, 54, 73, 63, 95, 49];
// average(scores2);
