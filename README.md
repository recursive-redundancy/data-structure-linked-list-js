﻿# Linked List (Javascript)
Javascript implementation of Linked List data structure. Uses ES6 class notation. Script is a solution to the following practice problem:

## Problem
```
Implement a LinkedList class without using JavaScript’s built-in arrays ([]).
Your LinkedList should support just 2 methods: add and has:

class LinkedList {...}
let list = new LinkedList(1, 2, 3)
list.add(4)                           // undefined
list.add(5)                           // undefined
list.has(1)                           // true
list.has(4)                           // true
list.has(6)                           // false
```
Problem extracted from a Front End interview example page, which can be found here:

[PerformanceJS | The Best Frontend JavaScript Interview Questions (written by a Frontend Engineer)](https://performancejs.com/post/hde6d32/The-Best-Frontend-JavaScript-Interview-Questions-(Written-by-a-Frontend-Engineer))


## Solution
Solution is a singly linked list, as this covers the current requirements. Solution contained in [*linked-list.js*](/linked-list.js) script file.

## Testing (requires [NodeJS](https://nodejs.org/))
A simple testing script, [*test.js*](/test/test.js), is included.

### Test with NodeJS via command line
```
node .\test\test.js
```

### Test with NodeJS in Visual Studio Code
A config file for debug in VS Code is included in [*.vscode/launch.json*](/.vscode/launch.json)

Select the "Launch Test Program" config from within the VS Code Debug tab


## Analogous Research
For more information about the Linked List data structure, follow this link:

[Singly Linked List Tutorials & Notes | Data Structures | HackerEarth](https://www.hackerearth.com/practice/data-structures/linked-list/singly-linked-list/tutorial/)

I am not affiliated in any way with the group presenting the tutorial. However, the material aligns fairly closely with this example, with the exception that their code is presented in C language rather than Javascript.
