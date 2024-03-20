# Unit-2-Teaching-Assignment

## Lesson 1: What is a Function?

A function is a simple yet effective way to organise and compact your code. Functions are reusable, unlike regular code, so you can do the same thing as many times as you like - without copying all that code.

A function is like a recipe. You can use it as many times as you want, but the result is going to be different depending on how much of your ingredients you use in it.

This is how to write the skeleton of a function.

```JS

function myFunction() {

}

```

Note how the function is declared. Instead of using <b> let </b> to declare it, we use <b>function</b>. This tells Javascript that this is a function, not a variable. <br>
You may have spotted the parenthesis at the end of the name of the function. These contain the parameters of the function, but this function does not have any parameters so they remain empty.

This is a function <i>with</i> parameters.

```JS

function myFunction(myVar1, myVar2) {

}

```

This function does nothing, but it has two fancy variables in it - known as parameters.

Parameters are almost the same thing as variables, but they differ in how they are declared. Parameters are declared inside the parenthesis of a function, and act exactly the same as variables otherwise. 

When declaring a parameter, it does not have a value. The value is given to the parameter when the function is called. For example, if we wanted to give myVar1 a value of 2 and myVar2 a value of 5, we would do it like this:

```JS

myFunction(2, 5);

function myFunction(myVar1, myVar2) {

}

```

This way, when we call myFunction(), myVar1 and myVar2 have the values of 2 and 5 that we wanted. The placement of these numbers corresponds to the placement of the parameters.


## Your task
