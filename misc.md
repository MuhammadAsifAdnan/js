Language
================
# expression
# statement
# parameter
# argument
# var vs let vs const
-The const keyword does not carry its own weight. When we think of const, we think of a thing that doesn't change. But in programming, it means a variable that can't be re-assigned.
# equality
# immutable vs mutable
# coercion
# how do we resolve naming collision
# named function vs anonymous function in detail
# arrow function
# pure function
# hoisting
-its not a real thing. JS engine does not hoist, it does not move around things. english metaphor that we discovered the idea of lexical scoping, without thinking about lexical scoping.
-let doesn't hoist?? let and const hoist too but differently. var hoist to a function scope, let and const hoist to block scope, the difference is variables declared with let and hoist do not get initialized with undefined like variables declared with var.
The proof that let hoist is the following code would throws an reference error saying cannot access 'teacher' before initialization instead of 'teacher' is not defined.

var teacher = "Kyle";
{
    console.log(teacher);
    let teacher = "Suzy";
}
# scope
- scope in JS is Lexical.
- Function scope
- Block scope
# IIFE
- Immediately invoked function expression. A function that runs, but do not pollute the enclosing scope.
# closure
- is when a function is able to remember or access its lexical scope even when the function is executed outside that lexical scope.
example- when you take a function and you pass it as a callback or you take a function and return it back, and the scope that it was originally defined in has otherwise at least conceptually gone away, normally its been garbage collected, its done. But theses a function that survived that was defined in that scope, it turns out the scope didn't go away at all- THATS closure, not magic.
# Module pattern
modules encapsulate data and behavior together. The state of a module is held by its methods via closure. An outer enclosing function
# ES6 modules - import, exports
# event loop
# micro task queue
# value type vs reference type
# how do you use a js library inside a typescript file and vice versa
# How do JS talk to the internet
# Stack trace - debugging
# Promise
# Explain asynchronous behavior of JS
# Generators
# Async-await
# Prototype chain
- Prototypes are the mechanism by which JavaScript objects inherit features from one another. Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.
# Explain OOP in JS
# Objects
An object is a collection of related data and/or functionality. These usually consists of several variables and functions(which are called properties and methods when they are inside objects).
# Explain this
- A functions this references the execution context for that call, determined entirely by how the function was called.
You cannot look at a function and figure out what its this keyword refers to. The this keyword of a function is assigned based upon how the function is called.
# modules

Library
===============
React
===============
# React lifecycle hook
# React rendering
# Why hooks? what problem they solve
# Explain uni directional data flow
# context API
# Props drilling

Redux
==============

Angular
============

RxJS
============

NextJS
# What is SSR? why do we need it?
# different types of SSR
#

SWR
===========
# Advantages/disadvantages of API caching
# how SWR works

Local storage/session/indexedDB
======================================
# How they work

# Testing
==============

# Mock API
=============

Git
=========
# Flow
# Rebase vs merge
# how to rebase
# how to revert
# cherry picking

Methodology
================
# DRY
# OOP
# OOP vs FP
# SOLID
# ACID
# HTTP
# CORS
# Principle of list exposer: You should default to keeping everything private and only expose the minimum necessary.

Webpack
==========
# How do you optimize webpack for production

HTML/CSS
============


MISC
=========
# How do you measure performance of a web app
# How do you improve performance
# First paint
# I don't ever write code once and then I'm done with it. Code is always an iterative process while I'm refactoring it. When I start to write a function I almost certainly don't know yet exactly how and what the function is gonna for what the structure's gonna be. So I just accept the fact that whatever name I come up with, it's not written in stone and I'm gonna change it multiple times. If I legitimately can't come up with any good name yet, I start with the name TODO; because I'm in the habit of searching for TODO's before I commit my changes, and at that point may be I've a better sense of what that ought to be called. 

# Declarative vs Imperative language
Declarative means we declare the outcome the WHAT and we allow the abstraction of the language to handle the HOW, so that the reader is focused more on the WHAT the outcome and even more importantly on the WHY. Generally speaking declarative code communicates better. For example, the ... spread operator.

# Transpiler
Babel - 