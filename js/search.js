
const myArray = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let totalSum = myArray.reduce(function(accu, number){
    return accu + number;
}, 0)

console.log('Сума чисел масиву:', totalSum);

function countOfPositive(myArray){
return myArray.filter( function( number ){ 
    return ( number >= 0 ); }).length; 
}

console.log('Кількість позитичних чисел:', countOfPositive(myArray))

let maxNumber = (a, b) => {
    return a > b ? a : b; 
},
    minNumber = (a, b) => {
        return a < b ? a : b
    };
    
console.log('Максимальне число в масиві:',myArray.reduce(maxNumber))
console.log('Індекс найбільшого числа:',myArray.indexOf(myArray.reduce(maxNumber)))

console.log('Мінімальне число в масиві:',myArray.reduce(minNumber));
console.log('Індекс найменшого числа:', myArray.indexOf(myArray.reduce(minNumber)))


function countOfNegative(myArray){
    return myArray.filter( function( elem ){ return ( elem < 0 ); }).length; 
    }
        
console.log('Кількість негативних чисел:', countOfNegative(myArray))


function countOfOddPositive(myArray) {
    let c = 0;
    for (let i = 0; i < myArray.length + 1; i++)
    if (myArray[i] % 2 != 0)
    c++;
    return c;
}
let resultPosNumber =  countOfOddPositive(myArray);
console.log('Кількість парних позитивних:', resultPosNumber)

function countOfEvenNegative(myArray) {
    let c = 0;
    for (let i = 0; i < myArray.length; i++)
    if (myArray[i] % 2 < 0)
    c++;
    return c;
    }
console.log('Кількість парних негативних:', countOfEvenNegative(myArray))  

let sumCNumber = myArray.reduce( function(sum , number) { return sum + ((number % 2 === 0 && number >0) ? number : 0); } , 0 ); 
console.log('Сума парних позитивних:', sumCNumber)

let sumNNumber = myArray.reduce( function(sum , number) { return sum + ((number % 2 != 0 && number >0) ? number : 0); } , 0 ); 
console.log('Сума непарних позитивних:', sumNNumber)

function productOfPositive(myArray) {
    return myArray.filter(a => a > 0).reduce((a, b) => a * b);
}
console.log('Добуток позитивних чисел:', productOfPositive(myArray))


maxNumber = Math.max(...myArray);
const result = myArray.map(v => v == maxNumber ? v : 0);

console.log('Обнулення масиву окрім максимального числа', result);


