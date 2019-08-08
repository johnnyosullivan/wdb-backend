// function average(arr) {
//     var total = 0;
//     for(var i=0; i<arr.length; i++) {
//         total += arr[i];
//     }
//     var avg = Math.floor(total / arr.length);
//     console.log(avg);
// }

function average(scores){
    // add all scores together
    var total = 0;
    scores.forEach(function(score){
        total += score;
    });
    // divide by total number of scores
    var avg = total/scores.length;
    // round average
    return Math.round(avg);
}


var scores = [90, 98, 89, 100, 100, 86, 94];

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

console.log(average(scores));
console.log(average(scores2));