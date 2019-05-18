#infertype

```shell
$ npm i infertype
```
#Usage

```javascript
const Type = require('../lib');

//returns the type inferred when a constructor is missing
console.log(Type.infer(undefined)); //undefined
console.log(Type.infer(null)); //null
console.log(Type.infer(1)); //number
console.log(Type.infer('')); //string
console.log(Type.infer(true)); //boolean
console.log(Type.infer({})); //object
console.log(Type.infer(Symbol())); //symbol

//returns the type inferred from the constructor
console.log(Type.infer([])); //Array
console.log(Type.infer(new String(''))); //String
console.log(Type.infer(new Boolean())); //Boolean
console.log(Type.infer(new Number(1))); //Number
console.log(Type.infer(new Map())); //Map
console.log(Type.infer(Promise.resolve())); //Promise
console.log(Type.infer(new Date())); //Date

//returns true if inferred types are strictly the same
console.log(Type.strictMatch(true, new Boolean('true'))); //false
console.log(Type.strictMatch(1, new Number(100))); //false
console.log(Type.strictMatch('', new String(''))); //false

//returns true if inferred types are match or if one of the inferred type is a wrapper class/primitive type of the other
console.log(Type.match(true, new Boolean('true'))); //true
console.log(Type.match(1, 1000)); //true
console.log(Type.match(1, new Number(100))); //true
console.log(Type.match('', new String(''))); //true
console.log(Type.match('', new String(''))); //true
```
