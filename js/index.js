console.log ("Hello World");
let Num1 = 10;
let Num2 = 6;

function sayHey()
{return 'Hey!';};


sayHey();

function conversation(){
    console.log("sayHey");//"Hey"
    console.log("How are you?");
    console.log('Goodbye');

}
  
 conversation();

 function sayHeyWithParameter(firstName){
    console.log("Hey,"+firstName);
 }
  
sayHeyWithParameter("Davina");

function addTwoNumbers(Num1, Num2){
    console.log(Num1+Num2);
}
    addTwoNumbers(1000, 20);
    addTwoNumbers(2000, 1);

    //CONSTRUCTOR FUNCTION
    function Book(name){
        return "This is"+name;
    }

    const book1 = new Book("book1");
    const book2 = new Book("book2");

    (function(){
        console.log ("Running Immediately");
    })();

    const apples = "apples";
    const oranges = "oranges";

    const isEqual = apples === oranges;
    const isNotEqual = apples !== oranges;

    console.log("Are apples and oranges the same?" + isEqual);
    console.log("Apples and oranges are not the same" + isNotEqual);

    const volunteers = 20;
    const students = 24;
    const pizzas = 25;

    const moreStudents = students > volunteers;
    console.log("Are there more students than volunteers?" + moreStudents);

    const lessStudents = students < pizzas;
    console.log("Are there fewer students than pizzas?" + lessStudents);

    const enoughPizzas = volunteers + students < pizzas;
    console.log("Do we have enough pizzas for everybody?" + enoughPizzas);

    const myAge = 44;
    const drivingAge = 18;

    const correctage =myAge >= drivingAge;

    console.log("Eligible to drive");

    if (myAge > drivingAge) {
        console.log("You are eligible to drive");
    } else {
        console.log("You are not eligible to drive");
    }

//ternary operator
    myAge >= drivingAge
    ? console.log("You are eligible to drive")
    : console.log("You are not eligible to drive");

    //check if a number is positive or Negitive
    let num = 200

    if (num > 0) {
        console.log("Number is positive");
    }else if (num=== 0) {
        console.log("Number is 0");
    } else {console.log("Number is negetive")}

    const mark = 92

    if (mark > 90){
    console.log("Your Grade is A+");
} else if (mark >80){
    console.log("Your Grade is A")}
    else if (mark >70){
        console.log("Your Grade is B")
    }else if (mark >60){
        console.log("Your Grade is C")
    }else if (mark >50){
            console.log("Your Grade is D")
    }else if (mark >40){
                console.log("Your Grade is E")}
                else 
                    console.log("Your Grade is F");
                
        
let shoeNumber = 1;
let limit = 5; //maximum

while (shoeNumber <= limit) {
    console.log(shoeNumber);
    shoeNumber = shoeNumber + 1;
}

let i = 1;
let total = 0;

while (i <= 10){
    total =i;
    i = i + 1;
}

console.log('Total: ' + total);

//

let randomnum = 1;

while (randomnum < 10) {
    console.log(randomnum + ":" + Math.random().toFixed(1));
    randomnum = randomnum + 1;
}


//for loop
for(let randomnum = 1; randomnum <10; randomnum+=1) {
    console.log(randomnum + ":" + Math.random().toFixed(1));
}

for(let shoeNumber = 1; shoeNumber<5; shoeNumber+=1){
    console.log(shoeNumber);
    
}

const animals = ["dog", "cat", "horse", "sheep"];
console.log(animals[0]) // first item in an array
console.log(animals[animals.length - 1]); // last item in an array
console.log(animals.length);

/*
i= 0
animals.length = 4
0<4 - true
// dog - first iteration

i=1
1<4 - true
//cat - second iteration

i=2
2<4 - true
//horse - third iteration

i=3
3<4 - true
//sheep - fourth iteration

i=4
4<4 - false
The fifth iteration results in false, the loops stop
*/
    animals.push("Zebra");
    console.log(animals);

    animals.unshift("Lion");
    console.log(animals);

    animals.pop();
    console.log(animals);

    animals.shift();
    console.log(animals);

    console.log(animals.sort());

    console.log(animals.reverse());



    const numbers = [1, 5, 3, 19, 22, 10];
    console.log(numbers.sort());

    function sortNumbersAscending(a,b) {
        return a - b;
    }

    console.log(numbers.sort(sortNumbersAscending));

// 1 and 5, return -4  => [1, 5, 3, 19, 20, 45, 6]
// 5 and 3, return 2 => [1, 3, 5, 19, 20, 45, 6]
// 5 and 19, return -14 => [1, 3, 5, 19, 20, 45, 6]
// 19 and 20, return -1 => [1, 3, 5, 19, 20, 45, 6]
// 20 and 45, return -25 => [1, 3, 5, 19, 20, 45, 6]
// 45 and 6, return 31 => [1, 3, 5, 19, 20, 6, 45]
//[1, 3, 5, 19, 6, 20, 45]
//[1, 3, 5, 6, 19, 20, 45]

// sort in descending order
console.log(numbers.sort(sortNumbersAscending).reverse());

















