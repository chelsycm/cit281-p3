//Coin module that exports coinage functionality 

// valueDenominatior(coin) function 
// Test if parameter is a value in the array. 
const validDenomination = (coin) => {
    const array = [1,5,10,25,50,100]
    return false !== array.indexOf(coin) >=0 
}
console.log(validDenomination(2)); // false 

// valueFromCoinObject(obj) function 
const valueFromCoinObject = (obj) => {
let {denom = 0, count = 0} = obj;
return denom * count; 
};

// valueFromArray(arr) function 
function valueFromArray(arr){
    //reduces array into a single value
    const reducer = (accumulator, currentValue) => {return accumulator + valueFromCoinObject(currentValue)};
    return arr.reduce(reducer,0);
};

// coinCount(..coinage) function 
function coinCount(...coinage){
    return valueFromArray([...coinage]);
}


// Export coinCount to p3-modules.js 
module.exports = {
    coinCount
};

console.log("{}", coinCount({denom: 5, count: 3}));
console.log("{}s", coinCount({denom: 5, count: 3},{denom: 10, count: 2}));
const coins = [{denom: 25, count: 2},{denom: 1, count: 7}];
console.log("...[{}]", coinCount(...coins));