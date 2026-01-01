function outerfun(x){
let vat = 'abubkar' // name is a local variable defined insede
function innerfun(){// innerfun is the inner function a closure
    console.log(vat);// use vriable declared in the parent functuin 
}
innerfun()
}
outerfun();

/////////////// main sawalo ke jawab  //////////////////
  // =================================================
  // 1. FUNCTION
  // =================================================
  // Function ek block of code hota hai
  // jo baar-baar reuse kiya ja sakta hai

  function add(a, b) {
    return a + b;
  }
  console.log("Function:", add(2, 3));
  // =================================================
  // 2. OBJECT
  // =================================================
  // Object key-value pairs ka collection hota hai
  const user = {
    name: "Aman",
    age: 22,
    skills: ["JS", "React"]
  };
  console.log("Object:", user.name);
  // =================================================
  // 3. ARRAY
  // =================================================
  // Array multiple values ko ek variable me store karta hai
  const numbers = [1, 2, 3, 4, 5];
  console.log("Array:", numbers);
  // =================================================
  // 4. CLOSURE
  // =================================================
  // Closure tab banta hai jab inner function
  // outer function ke variables ko yaad rakhta hai
  function outer() {
    let count = 0;
    return function inner() {
      count++;
      console.log("Closure count:", count);
    };
  }
  const counter = outer();
  counter();
  counter();
  // =================================================
  // 5. CALLBACK FUNCTION
  // =================================================
  // Callback wo function hota hai
  // jo dusre function ke argument me pass hota hai

  function greet(name, callback) {
    console.log("Hello " + name);
    callback();
  }
  function afterGreet() {
    console.log("Callback executed");
  }
  greet("Rahul", afterGreet);
  // =================================================
  // 6. PROMISE
  // =================================================
  // Promise async operation ko handle karta hai
  // States: pending, fulfilled, rejected
  const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      resolve("Promise resolved");
    } else {
      reject("Promise rejected");
    }
  });
  myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));
  // =================================================
  // 7. CONSTRUCTOR FUNCTION
  // =================================================
  // Constructor function se multiple objects bante hain
  // 'new' keyword use hota hai
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  const p1 = new Person("Rohit", 25);
  const p2 = new Person("Aman", 22);
  console.log("Constructor:", p1, p2);



  // =================================================
  // 8. PROTOTYPE
  // =================================================
  // Prototype JS ka mechanism hai
  // jisse methods sab objects ke sath share hote hain

  Person.prototype.sayHello = function () {
    console.log("Hello, my name is " + this.name);
  };

  p1.sayHello();
  p2.sayHello();



  // =================================================
  // 9. INHERITANCE (using Constructor + Prototype)
  // =================================================
  // Ek constructor dusre constructor ki properties
  // inherit kar sakta hai

  function Employee(name, age, role) {
    Person.call(this, name, age);
    this.role = role;
  }

  // Prototype inheritance
  Employee.prototype = Object.create(Person.prototype);

  const emp1 = new Employee("Sahil", 28, "Developer");

  console.log("Inheritance:", emp1);
  emp1.sayHello();
///////////////                       /////////////////
// ==========================================
// Q1. Star Pattern using Nested for loop
// ==========================================
//
// Output:
// *
// * *
// * * *
// * * * *
// * * * * *

let pattern = "";

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  pattern += "\n";
}

console.log(pattern);



// ==========================================
// Q2. FizzBuzz (1 to 45)
// ==========================================
//
// Multiple of 3  -> Fizz
// Multiple of 5  -> Buzz
// Multiple of 3 & 5 -> FizzBuzz

for (let i = 1; i <= 45; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
// ==========================================
// Q3. Sum of all numbers in an array
// ==========================================

var numbersArray = [1, 13, 22, 123, 49];
let sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i];
}
console.log("Sum:", sum);
// ==========================================
// Q4. Sum of two arrays
// =================================
