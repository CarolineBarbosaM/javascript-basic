var myVariable = 'global'
myOtherVariable = 'global'

function myFuction() {
    var myVariable = 'local'
    return myVariable
}

function myOtherFunction() {
    myOtherVariable = 'local'
    return myOtherVariable
}

console.log(myVariable);
console.log(myFuction());
console.log(myOtherVariable);
console.log(myOtherFunction());