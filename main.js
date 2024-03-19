// Functions

// Functions are a simple and effective way to keep your code compact and organised.
// This is how you create one.

function myFunction() {

}

// Note how you don't use 'let' to define the function. This is how Javascript understands it is supposed to be a function.
// The parenthesis at the end of the name of the function indicate the parameters. They have been left empty as this function does not have any.



function parameterFunction(par1, par2) {

}

// This function has two variables inside the parenthesis. Once again, note how you do not need to use 'let' to create these variables.
// When calling the function, these variables need to be given values, like this:

parameterFunction(5, 10);

// In this case, when parameterFunction() is called, we have given par1 a value of 5, and par2 a value of 10. Note how the values are separated: via a comma, same as how the variables were declared in the function.
// The separation and placement of the values is important. To pass a value to par1, we need to put the value in the first position inside the parenthesis, because par1 is in the first position. Similarily to pass a value to par2, because it is in the second position, we need to place the value in the second position.




// These variables are what is known as 'local variables'. They only exist inside the function, and when the function ends, they are destroyed and do not exist anymore. You cannot call these variables outside of the function.





// Here's an example of a function that logs a set of given coordinates to the console.

function graphPos(x, y) {
  let coords = [x, y];
  console.log(coords);
}

// If we call the function like this,

graphPos(2, 5);

// the function will return [2, 5] to the console as an array.



// A function can be 'called', or used, any number of times, unlike regular code.
// For example, if I want my code to do something multiple times, instead of copying and pasting that code the amount of times I want it to happen, I can simply write a function that does that, and then call the function each time I want that code to run.

