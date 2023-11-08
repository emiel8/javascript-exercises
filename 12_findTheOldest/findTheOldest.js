const findTheOldest = function(personArray) {
    let oldestAge = 0;
    let oldestPerson;
    
    personArray.forEach(person => {
        if ('yearOfDeath' in person){
            age = (person.yearOfDeath - person.yearOfBirth);
        } else {
            currentDate = new Date();
            currentYear = currentDate.getFullYear();
            age = (currentYear - person.yearOfBirth);
        }
        if (age > oldestAge){
            oldestAge = age;
            oldestPerson = person;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
