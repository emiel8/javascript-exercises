const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return 'ERROR';
    }
    if (num1 < 0 || num2 < 0){
        return 'ERROR';
    }
    let lower = Math.min(num1, num2);
    let upper = Math.max(num1, num2);
    let sum = 0;
    for (let i = lower; i <= upper; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
