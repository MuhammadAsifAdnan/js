# Types

typeof doesntExist; // "undefined"
var v;
typeof v; // "undefined"
v = null;
typeof v; // "object" OOPS!
v = function() {}
typeof v; // "function"
v = [1,2,3];
typeof v; // "object"

undefined vs undeclared vs uninitialized (aka TDZ)
undefined means theres definitely a variable and at the moment it doesn't have any value
undeclared means its never been created in any scope that we have access to
uninitialized: certain variables like the blocked scoped ones, don't get initialized; they never get set initially undefined;
the typeof operator is the only operator in existence that is able to reference a thing that doesn't exist and not throw an error

Special values:
NaN (not a number, its wrong to think of it as not a number, cause essentially typeof NaN == "number", so thinking of NaN as an invalid number creates a better mental model) -> sentinel value indicates an invalid number
NaN === NaN; // false OOPS!
isNan("my son's age); // true OOPS!
Number.isNaN("my son's age); // false
NaNs are not equal to each other.
NaN is the only value in existence at least in javascript that does not have what we call the identity property, meaning it is not equal to itself.
isNaN coerces its argument to number first if necessary.
Number.isNaN does not coerces its argument
typeof NaN; // "number" wow!
Negative 0 (-0)
var x = -0;
x === -0; // true
x.toString(); // "0" OOPS
technically we can have the value -0; But we did not have any mechanism to determine if we had a negative 0, until ES6 added a utility called Object.is
Object.is(x, -0) // true
Object.is(x, 0) // false
(Object.is -> almost like a quadruple equal haha)

use New keyword with -> Object, Array, Function, Date, RegExp, Error
do not use New keyword with -> String, Number, Boolean. Use the function instead. Because the function coerces the value to respective type.
