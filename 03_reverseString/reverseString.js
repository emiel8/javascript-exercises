const reverseString = function(to_reverse) {
    let result = '';
    for (let i = to_reverse.length - 1; i >= 0; i--){
        result += to_reverse[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
