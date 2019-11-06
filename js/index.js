// Ключові слова
//var,let,const
// let message = 'Hello';
// alert(message);
// message = 'world';
// alert(message);

// const year = 2019;
// alert(year);

// const nextYear = year + 1;
// message = ' new year will be = ' + year;
// alert(message);

const userName = prompt('Enter your name');
alert('Hello, ' + userName);

let userAge = parseFloat(prompt('enter your age'));
const userAgeNext = addOne(userAge);
alert('Your age next year, ' + userAgeNext);

if (userAge < 18) {
    alert('your are not adult')
} else {
    alert('you arre adult')
}

function addOne(num){
    const result = num +1;
    return result;
}

//all scalar data types in js
// String
// Number
// Boolean
// undefined
// null
// Object
// Symbol
