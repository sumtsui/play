// https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e

// --------------------- class ---------------------
class ClassCar {
  drive() {
    console.log('Vroom!');
  }
}

const car1 = new ClassCar();
console.log(car1.drive());

// -------------------------- constructor --------------------------
function ConstructorCar() {}

ConstructorCar.prototype.drive = function () {
  console.log('Vroom!');
};

const car2 = new ConstructorCar();
console.log(car2.drive());

// --------------------------- factory -----------------------------
const proto = {
  drive() {
    console.log('Vroom!');
  },
};

const factoryCar = () => Object.create(proto);

const car3 = factoryCar();
console.log(car3.drive());

/**
 * In JavaScript, any function can return a new object. When it’s not a constructor function or class, it’s called a factory function.
 */

/**
 * ES6 classes desugar to constructor functions, so everything that follows about constructor functions also applies to ES6 classes:
 */

class Foo {}

console.log(typeof Foo); // function

/**
 * So, class and constructor and the SAME
 */
