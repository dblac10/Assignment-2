


const fruitAndveg = ["apples", "orange","Banana","Kiwi","Avacado","celery","Aubergine"]
const noAvacados = [];

//Starting point of the while loop


const noAvocados_2 = fruitAndveg.filter((fruit) => !fruit.includes("avocado"));
console.log(noAvocados_2);

// map method
const arrayOfRandomNumbers = [3, 7, 80, 20, 2];

const numbersDoubled = arrayOfRandomNumbers.map((num) => num * 2);
console.log(numbersDoubled);

// chaining methods
const numbersDoubledAndGreaterThan10 = arrayOfRandomNumbers
  .map((num) => num * 2)
  .filter((num) => num > 10);

console.log(numbersDoubledAndGreaterThan10);