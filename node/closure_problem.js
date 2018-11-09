/* Closure Problem
const createClosure = function() {
    var i = 10;
    var closureFunction = function() {
        var x = 100;
        x = x + i;
        console.log(x);
    }
    i = 50;
    return closureFunction;
}
*/

//Closure Problem solved by immediately invoked function
const createClosure = function() {
    var i = 10;
    var closureFunction = (function(j) {
        return function() {
            var x = 100;
            x = x + j;
            console.log(x);
        }
    })(i)
    i = 50;
    return closureFunction;
}


var newFunction = createClosure();

newFunction();