# Lesson 1: What is a Function?

A function is a simple yet effective way to organise and compact your code. Functions are reusable, unlike regular code, so you can do the same thing as many times as you like - without copying all that code.

A function is like a recipe. You can use it as many times as you want, but the result is going to be different depending on how much of your ingredients you use in it. Sometimes, it's more like a packet of instant noodles. The ingredients never change, so you always get the same result.

The skeleton of a function is written like this:

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

### Using functions

Code that is placed inside the brackets of the function is part of the function, similar to how an <b>if</b> statement works. When a function is called, the code inside of the function is executed. For example, when we call the function below, <b>myFunction</b>, it prints "Hello World!".

When calling a function, you must use parenthesis at the end of the name. These parenthesis contain the parameters, like the when the function is declared.

```JS
function myFunction() {
  console.log("Hello World!");
}
```

```Output
myFunction();

Hello World!
```

This function has an example of parameters. It does some simple addition, adding the two numbers we give to it and printing it to the console.

```JS
function addition(num1, num2) {
  console.log(num1 + num2);
}
```

```Output
addition(12, 14);

26
```


[Next Lesson](lesson_2.md)


## Your Task 

### Who are you
Create a function called whoAreYou that prompts the user for:

- their name,
- their age,
- and their favourite hobby.

Store the users answers and finally output (Hello, "name" , you are "age" years old and your favourite hobby is "favourite hobby"!)
-Replace each " " with the users answer.

### Tax calculator
Create a function called tax_calculator(dollars), which takes in a dollar amount and prints the value with tax added (13%), onto the console. 

### Calculator 
Create a function called calculator(operator) that:
- asks the user for two numbers
- does math based on the first number modified by the second number by the operator, ie. numbers = 3 & 4, operator = *, does 3x4

### Challenge Pythagorean Theorem (Medium)
Create a function called pythagorean(legA, legB). This function will perform the Pythagorean theorum to solve for the hypotenuse.