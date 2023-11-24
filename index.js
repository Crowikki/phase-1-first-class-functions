function Monday(){
    console.log("Go for a five-mile run");
    console.log("Pump iron");

}

function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}

function Wednesday(){
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
}

function Thursday(){
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}

function Friday(){
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}
function receivesAFunction(cb) {
    console.log(cb());
    //console.log returns the receive function 
}

function returnsANamedFunction(){
    // define the named function
    function namedFunction() {
        console.log("This is a named function")
}

    return namedFunction;
    // this is returning the named function
}
// the return function has no name to it the console.log logs this function has no name
function returnsAnAnonymousFunction(){
    return function(){
        console.log("This function has no name")
    }
}