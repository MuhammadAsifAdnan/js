JS code execution process-> two steps
first pass -> compilation (parsing)
second pass -> execution

Execution context -> execution thread, memory
function execution context is Garbage collected once the execution is done.
For the first time in history, we are able to return back to a functions execution context after we've left it. -> Generators


# let vas var
In JavaScript, var and let are both used to declare variables. The main difference between them is their level of scope. var variables are function-scoped, meaning they are only accessible within the function in which they are declared. let variables are block-scoped, meaning they are only accessible within the block of code (e.g. a loop or an if statement) in which they are declared.

# == vs ===
== and === both checks the types first, if the types are different, === immediately returns false. on the other hand == goes on to perform coercion if possible and then checks equality of the values.

# coercion priority

# Function declaration vs function expression

Function declaration add their marbles to the enclosing scope, while function expressions add their marbles to their own scope. Function expressions are read-only.

Why prefer named function expression over anonymous function expression:
1. Reliable function self-reference (recursion etc)
2. More debuggable stack strace
3. More self-documenting code

The purpose your code is not to be convenient to type, but to communicate more clearly your intent.

Personal rule of thumb -> I prefer function declaration if its more than 3 lines of code, otherwise generally i'd make it an inline function expression, unless that thing needs to be called multiple times, in that case i'm gonna make it a function declaration.

# Arrow function

Arrow functions are anonymous(the obvious, still, huh)!
I don't think you should use anonymous function expressions(revisit prev section?)
Arrow functions shouldn't be used as a general replacement of all other functions. You shouldn't be using them because they are nice and short and their concise syntax, that isn't why they were created. Thats only one of the characteristics. The shorter the syntax by the way the more complex the corner cases of syntax are. It doesn't come without a cost.

The only way you can figure out what an arrow function is doing is to read its function body. But when I read the function name, I don't need to read any code, theres one english name in there that tells me the purpose of that function. Often the function body will be completely self obvious, maybe its self obvious, but its still an inference, you are still having to infer the purpose of that from the code rather than seeing the purpose listed out.

var getId = person => person.id;
var ids = people.map(getId);

you can assign an arrow function to a variable and get almost the same benefit of a function declaration right? right. (but the function declaration is actually fewer characters if you count it :p)

More concise code does not automatically mean more readable code.

# Make a block for variables that is only there to live for couple of line of codes

function formatStr(str) {
    {
        let prefix, rest;
        prefix = str.slice(0,3);
        rest = str.slice(3);
        str = prefix.toUpperCase() + rest;
    }

    if(/^FOO:/.test(str)){
        return str;
    }

    return str.slice(4);
}
It is extremely unlikely that you will be able to see or be able to observe any performance difference. There are theoretic reasons, but in practice, extremely unlikely.

# const
const is even better than let, prefer const over let whenever possible.
But the problem with const is it does not carry its own weight.
const means -> a variable that can't be reassigned -> JS -> for the rest of this block I'm not gonna get re-assigned
another nice use-case of block scoping is to wrap a block around let. cause im significantly shortening the scope that can reassign to the const
Only use const with primitive/immutables

# Hoisting
-its not a real thing. JS engine does not hoist, it does not move around things. english metaphor that we discovered the idea of lexical scoping, without thinking about lexical scoping. 
JS code execution process-> two steps
first pass -> compilation (parsing)
second pass -> execution
misconception: JS does not re-organize your code

## var hoisting?
usually bad
teacher = "Kyle"
var teacher;
//
## function hoisting
IMO actually pretty useful
getTeacher();
function getTeacher(){
    return "Kyle";
}
Remember, in C, the function definition always have to be before the call?

{
    teacher = "Kyle"; // TDZ error!
    let teacher; 
}

The statement "let doesn't hoist" is meant in good spirit, but it's in accurate.
1. let and const hoist to a block, but var hoist to a function
2. var, when it creates its variable, it also says when the scope starts initialize it to undefined. When let hoists its variables into its block scope it says, create a location, but don't initialize it, it stays un-initialized, means you can't touch it yet.
It's important to note that hoisting only applies to declarations, not assignments.

It's a good idea to declare all variables at the top of the relevant scope to avoid potential issues with hoisting.

TDZ error: why did they make this an error? I used to believe that the primary reason for this TDZ error in this scenario, TC39 was trying to socially engineer you to stop assigning to variables earlier in scopes to where you declared them. But it turns out, The reason TDZ exist is because of const. Think about const being attached to a block scope. Imagine if const initialized itself to undefined. And then line 1 of a block you did console.log of that variable and you saw it undefined and then later you saw it with the value 43. Technically that const would have had two different values at two different time, which violates the academic concept of const. Then they said, well if we are doing it for const we might as well do it for let.

let and const -> the variables are created when their containing lexical environment is instantiated. When the lexical binding is evaluated, not when the variable is created.

Definition: In short, variables are accessible and functions are callable even before there declaration.

# Closure
Is when a function is able to remember its lexical scope even when the function is executed outside that lexical scope.
You don't close over a value, you close over a variable - the link is alive!

# Namespace pattern
Taking a set of functions and data and putting them inside

# Module
Modules encapsulate data and behavior(methods) together. The state(data) of a module is held by its methods via closure.
The module pattern requires the concept of encapsulation -> hiding data and behavior

var workshop = (function Module(teacher){
    var publicAPI = { ask, };
    return publicAPI;

    //*****

    function ask(question) {
        console.log(teacher, question);
    }
})("Kyle");

workshop.ask("It's a module, right?");
// Kyle, It's a module, right?

## ES6 module

# Objects (Oriented)
## this
A functions this references the execution context for that call, determined entirely by how the function was called.
You cannot look at a function and figure out what its this keyword refers to. The this keyword of a function is assigned based upon how the function is called.

A this-aware function can thus have a different context each time it's called. Which makes it more flexible and reusable.
There are four different ways we can invoke a function.

Objects do not define scopes, functions do.

1. Implicit binding

### Example 1
var workshop = {
    teacher: "Kyle",
    ask(question){
        console.log(this.teacher, question);
    },
};

workshop.ask("What is implicit binding?");

### Example 2
function ask(question){
    console.log(this.teacher, question);
}

var workshop1 = {
    teacher: "Kyle",
    ask: ask,
};

var workshop2 = {
    teacher = "Suzy",
    ask: ask,
}

workshop1.ask("How do I share a method?");
// Kyle How do I share a method?

workshop2.ask("How do I share a method?");
// Suzy How do I share a method?

How does it figure out what the this keyword should point at? Because of the call-site. Because of the call-site the this keyword is gonna end up pointing at the object that is used to invoke it.
workshop.ask() says invoke ask function with the this keyword pointing at workshop.

2. Explicit binding (the .call() method)

function ask(question){
    console.log(this.teacher, question);
}

var workshop1 = {
    teacher: "Kyle",
};

var workshop2 = {
    teacher = "Suzy",
}

ask.call(workshop1, "Can I explicitly set context?");
// Kyle Can I explicitly set context?
ask.call(workshop2, "Can I explicitly set context?");
// Suzy Can I explicitly set context?

Hard binding (a variation of explicit binding)

var workshop = {
    teacher: "Kyle",
    ask(question){
        console.log(this.teacher, question);
    },
};

setTimeout(workshop.ask, 10, "Lost this?");
// undefined Lost this?

setTimeout(workshop.ask.bind(workshop), 10, "Hard bound this?");
// Kyle Hard bound this?

3. the new keyword to invoke a function
the new keyword does 4 very specific things when used to invoke a function.
a. Create a brand new empty object
b. Link that object to another object
c. Call function with this set to the new object
d. If function does not return an object, assume return of this.

4. fallback method -> default binding
var teacher = 'Kyle';

function ask(question){
    console.log(this.teacher, question);
}

function askAgain(question){
    "use strict";
    console.log(this.teacher, question);
}

ask("What's the non-strict-mode default?");
// Kyle What's the non-strict-mode default?
askAgain("What's the non-strict-mode default?");
// TypeError

## crazy calling - binding rule precedence
var workshop = {
    teacher: "Kyle",
    ask: function ask(question){
        console.log(this.teacher, question);
    },
};

new (workshop.ask.bind(workshop))("What does this do?");
// undefined What does this do?
determination of this keyword:
1. Is the function called by new?
2. Is the function called by call() or apply()?
   Note: bind() effectively uses apply()
3. Is the function called on a context object?
4. DEFAULT: global object(except strict mode)

An arrow function does not define this keyword at all. if you put a this inside an arrow function, it resolves lexically(move up the scope chain (lexical this))


## class {}
Syntactic sugar layard on top of prototype system.

class Workshop{
    constructor(teacher){
        this.teacher = "Kyle";
    }
    ask(question){
        console.log(this.teacher, question);
    }
}

var deepJS = new Workshop("kyle");
var reactJS = new Workshop("Suzy");


## Prototype
A constructor call makes an object linked to its own prototype
Javascript is the only object oriented language?!!! Yes js can create an object without a class!!

Various ways to set up the prototype of an object. 

polyfill for Object.create
if(!Object.create){
    Object.create = function(o) {
        function F() {}
        F.prototype = o;
        return new F();
    }
}

Prototypes are the mechanism by which JavaScript objects inherit features from one another. In this article, we explain what a prototype is, how prototype chains work, and how a prototype for an object can be set.

Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

# Object
An object is a collection of related data and/or functionality. These usually consists of several variables and functions(which are called properties and methods when they are inside objects).

## Inheritance vs Behavior Delegation
    (OO vs OLOO)


## tagged function
