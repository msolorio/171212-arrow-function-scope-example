arrow functions are function scoped.
<br/>their `this` keyword refers to the `this` of the their parent function.

function keyword functions are object scoped.

sayHi's context is the same as it's parent function.
<br/>`this` refers to `this` of the parent function, the global object.

sayHiForReal's context is the parent object.
<br/>`this` refers to person.

```
function getPerson() {
  const person = {
    name: 'Zulu',
    sayHi: (var1, var2) => {
      console.log('arguments:', arguments);
      console.log('this:', this);
      console.log(`hi i'm ${this.name}`);
    },

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
```
