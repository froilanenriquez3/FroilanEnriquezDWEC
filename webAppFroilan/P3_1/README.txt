In this folder, P3_1, is a collection of files built for a number guessing game. 
The js file was written to include an example of the programming concepts we had been learning up to that point, namely functions and callback functions.

In the program, there are two types of callbacks used, named and anonymous. 
The functions resetGame() and checkNum() both use callback functions. 

In the index.html, the resetGame function is called with the function getMessage, a previously defined function that displays a certain line of text to the user. 
In the script, beneath the section with the commented "main" line, the resetGame function is called with an anonymous function as a parameter, to display a different mesage to the user in the beginning of the game. 

The checkNum function has two callback parameters. 
This is called everytime the user clicks the "Submit" button. In the index.html, this calls two previously defined functions: compareNum and listPrevious. 
These two functions are executed in checkNum if the input from the user meets certain requirements, which are checked through a few if/else conditional structures.

In addition to if/else structures, there are also some loops. 
These are mainly used to work with the array of previous answers, declared as the array variable "answers". With this, all the requirements are met: 
Functions with anonymous and named callbacks
Loops
Conditionals

