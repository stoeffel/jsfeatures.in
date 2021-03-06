module.exports = [
  { 'Object.create': { code: `o = {};
                      // is equivalent to:
                      o = Object.create(Object.prototype);`,
    info: 'Creates a new object with the specified prototype object and properties.' }},

  { 'Object.defineProperty': { code: `Object.defineProperty(obj, 'answer', {
                                      value: 42,
                                      writable: true,
                                      enumerable: true,
                                      configurable: true
                                    });`,
      info: 'Defines a new property directly on an object, or modifies an existing property on an object, and returns the object.' } },

  { 'Object.defineProperties': { code: `var obj = {};
                                        Object.defineProperties(obj, {
                                          "name": {
                                            value: true,
                                            writable: true
                                          },
                                          "msg": {
                                            value: "Hello",
                                            writable: false
                                          }
                                          // etc. etc.
                                        });`,
    info: 'Defines new or modifies existing properties directly on an object, returning the object.' } },

  { 'Object.getPrototypeOf': { code: `var proto = {};
                                      var obj = Object.create(proto);
                                      Object.getPrototypeOf(obj) === proto; // true`,
      info: 'Returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.' } },

  { 'Object.keys': { code: `var arr = ['x', 'y', 'z'];
                            console.log(Object.keys(arr)); // ['0', '1', '2']`,
      info: 'Returns an array of a given object\'s own enumerable properties' } },

  { 'Object.seal': { code: `var obj =  {name: 'FooBar'}; Object.seal(obj);
                            obj.name = 'BarFoo' // Works
                            delete obj.name // returns false and doesn't delete`
                            ,
      info: 'Prevents any new addition of properties but defined properties can be changed.' } },

  { 'Object.freeze': { code: `var obj =  {name: 'FooBar'}; Object.freeze(obj);
                              obj.name = 'BarFoo';
                              obj.name // Will still be 'FooBar'
                              `,
      info: 'Makes an object immutable' } },

  { 'Object.preventExtensions': { code: `var obj =  {name: 'FooBar'}; Object.preventExtensions(obj);
                                         obj.name = 'BarFoo';
                                         obj.name // Will still be 'FooBar'
                                        `,
      info: 'Prevents future extensions to the object and "CONFIGURABLE" is not set to false for all the properites.' } },

  { 'Object.isSealed': { code: `var obj =  {}; Object.seal(obj); Object.isSealed(obj) // true`,
        info: 'Checks if a given object is sealed.' } },

  { 'Object.isFrozen': { code: `var obj =  {}; Object.freeze(obj); Object.isFrozen(obj) // true`,
      info: 'Checks if a given object is frozen.' } },

  { 'Object.isExtensible': { code: `var obj =  {}; Object.preventExtensions(obj); Object.isExtensible(obj) // false`,
        info: 'Checks if the given object can be extended.' } },

  { 'Object.getOwnPropertyDescriptor': { code: `Object.getOwnPropertyDescriptor({name:'foo'},'name');
                                                /*{ value: 'foo',
                                                  writable: true,
                                                  enumerable: true,
                                                  configurable: true }*/`,
      info: 'Returns a property descriptor for an own property i.e directly on the object and not the prototype chain.' } },

  { 'Object.getOwnPropertyNames': { code: `var obj = { 0: 'f', 1: 'o', 2: 'o' };
                                            Object.getOwnPropertyNames(obj).sort(); //'0,1,2'`,
      info: 'Returns an array of all properties (enumerable or not) found directly upon a given object.' } },

  { 'Date.prototype.toISOString': { code: `(new Date('1998-02-01')).toISOString();
                                           // 1998-02-01T00:00:00.000Z'`,
      info: 'Returns a string in simplified extended ISO format. YYYY-MM-DDTHH:mm:ss.sssZ' } },

  { 'Date.now': { code: `Date.now(); // Something like 1438525752688`,
      info: 'Returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.' } },

  { 'Array.isArray': { code: `Array.isArray(Array.prototype); // true
                              Array.isArray([]); // true
                              Array.isArray({}); // false
                              Array.isArray(null) // false`,
      info: 'Returns true if an object is an array, false if it is not.' } },

  { 'JSON': { code: `var JSONobj = JSON.stringify({}); // '{}'
                     var obj = JSON.parse(JSONobj); // {}`,
      info: 'Contains methods for parsing and creating JSON values.' } },

  { 'Function.prototype.bind': { code: `var log = console.log.bind(console)
                                        log('meow') // meow`,
      info: 'Creates a new function that, when called, has its exectuion context bound to the provided value.' } },

  { 'String.prototype.trim': { code: `var name = '   foo  ';
                                      name.trim(); // 'foo'`,
      info: 'Removes whitespace from both ends of a string' } },

  { 'Array.prototype.indexOf': { code: `var name = 'Brendan Eich'
                                        name.indexOf('Eich'); // 8
                                        name.indexOf('Brendan',5); // -1 `,
      info: 'Returns the index if found, else returns -1, takes an optional starting index.' } },

  { 'Array.prototype.lastIndexOf': { code: `var city = 'mississippi';
                                            city.lastIndexOf('i'); // 10 `,
      info: 'Returns the last index if found or -1 for the specified value, also takes an optional starting index.' } },

  { 'Array.prototype.every': { code: `[1,2,3].every(function(v,i,a){return v > 3}) // false
                                      [1,2,3].every(function(v,i,a){return v > 0}) // true`,
      info: 'Checks if all the elements of an array passes the specified test.' } },

  { 'Array.prototype.some': { code: `[1,3,5,7,6].some(function(v,i,a){return v % 2 === 0}) // true`,
      info: 'Checks if any of the elements of an array passes the specified test.' } },


  { 'Array.prototype.forEach': { code: `['foo','bar', 'baz'].forEach(function(v,i,a){console.log(v,i)});
                                        /*
                                            foo 0
                                            bar 1
                                            baz 2
                                        */
                                        `,
      info: 'For each element in an array performs the specified action.' } },

  { 'Array.prototype.map': { code: `[64,49].map(Math.sqrt); // [8, 7]`,
      info: 'Returns an array that contains the results of a invokation of the function passed to it.'
      } },

  { 'Array.prototype.filter': { code: `[1,'',true,false].filter(Boolean); // [ 1, true ]`,
      info: 'Returns an array that meet the condition specified in a callback function.' } },

  { 'Array.prototype.reduce': { code: `[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
                                            return previousValue + currentValue;
                                       }, 10); // 20`,
      info: 'Invokes the callback with an accumulator and each value of the array and reduce it to a single value.' } },

  { 'Array.prototype.reduceRight': { code: `[0,-1,-2,5,-6].reduceRight(function(previousValue, currentValue, index, array) {
                                                return previousValue + currentValue;
                                            }); // -4`,
      info: 'Similar to reduce, but acts upon the array from right-to-left instead.' } },

  { 'Getter property in objects': { code: `foo = { get x(){ return 42 } }; foo.x; // 42`,
      info: 'Binds an object property to a function that will be invoked when that property is accessed.' } },

  { 'Setter property in objects': { code: `var val=0;
                                           var foo = { set x(v){ val = v } };
                                           foo.x = 42
                                           val; // 42`,
      info: 'Binds an object property to a function that will be invoked when that property is been set.' } },

  { 'Property accessor of strings': { code: `"foobar"[2]; // 'o'`, info: 'Helps to access char in a string by index.' } },

  { 'Reserved word property name': { code: `{ class: 42 }.class // 42`, info: 'Using reserved as property names.' } },

  { 'ZWSP identifiers': { code: `var _\u200dc = 42; _\u200dc; // 42`, info: 'zero-width space identifiers.' } },

  { 'ignore leading zeros in parseInt()': { code: `parseInt('000420'); //420`, info: 'Ingoring the leading zero' } },

  { 'Immutable undefined': { code: `undefined = 42;
                                    typeof undefined; // 'undefined'`,
      info: 'Can not mutate undefined.' } },

]
