const removeFromArray = function(array) {
    for (const ele of arguments) {
        const index = array.indexOf(ele);
        if (index > -1){
            array.splice(index, 1);
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
