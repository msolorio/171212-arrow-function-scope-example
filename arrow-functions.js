// arrow functions are function scoped
// their `this` keyword refers to the `this` of the their parent function
//
// function keyword functions are object scoped

function getPerson() {
  const person = {
    name: 'Zulu',

    // sayHi's context is the same as it's parent function
    // `this` refers to `this` of the parent function, the global object
    sayHi: (var1, var2) => {
      console.log('arguments:', arguments);
      console.log('this:', this);
      console.log(`hi i'm ${this.name}`);
    },

    // sayHiForReal's context is the parent object
    // `this` refers to person
    sayHiForReal: function(var1, var2) {
      console.log('arguments:', arguments);
      console.log('this:', this);
      console.log(`hi I'm ${this.name}`);
    }
  }

  return person;
}

getPerson().sayHi(1, 2);

console.log('================================');

getPerson().sayHiForReal(1, 2);
