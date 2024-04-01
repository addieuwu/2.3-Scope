# Lesson 3: Scope

###### [Jump to the task](#your-task)

Scope defines where a variable is accessible. There are two types of scope: global, and local. A global variable is something that is accessible to anything and everything in your code. Currently, you have been primarily using global variables, although you have used some local variables in the previous two lessons.

The only difference between a local and global variable is where it's declared. A local variable is often declared inside a function, although that isn't the only way to make a variable local. The parameters used in functions are a type of local variables as well. While not declared the same way as a normal function, they are exactly the same and live inside the function.

```JS
// global variable
let globalVar = '';

// local variable
function myFunction(localVar1) {
  let localVar2 = '';
}
```

There are two types of local variables here. The first is one declared as a parameter for <b>myFunction</b>, and the second is declared inside <b>myFunction</b> like a global variable would be declared. Both local variables are accessible only to <b>myFunction</b> and the code contained inside. If you try to call either localVar1 or localVar2 <i>outside</i> of <b>myFunction</b>, Javascript won't know that they exist - because they don't. 

```JS
function myFunction() {
  let localVar = "Hello!";
  // some code
  return;
}

console.log("This is the value of localVar:", localVar);
```
```Output
This is the value of localVar: undefined
```

When the function ends, all the variables used inside the function are destroyed. It is because they are destroyed that you cannot use them outside of their local environment. As long as the function the variables are local to is still running, the variables still exist. Because of this, if you call a function <i>inside</i> the first function, any variables declared in the first are accessible to the second as if they were global variables.

Because a local variable is destroyed when the function it's local to ends, you can have multiple different variables with the same name across multiple functions. This code does not have any issues with its variables because neither exists at the same time as the other.

```JS
function addition(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}
```
#### What is the output of this code:
```JS
let x = 5

function foo() {
  let x = 99;
  console.log(x);
}

function bar() {
  console.log(x);
}

foo()
bar()
console.log(x)
```

# Your Task 

### Testing Scope

Write some code with different scopes. Play around with the placement of variables here and there to see how scope works. Write one block of code that has <i>correct</i> scope and does work, and one block that has <i>incorrect</i> scope and does not work.

### Operation Plumber 
- You have just arrived to a client's house and their hot water will not turn on. The water boiler runs on the code in [tasks_lesson_3.js](tasks_lesson_3.js), which isn't working correctly.
- Try and fix the code so the function returns true, meaning the hot water turned on, instead of an error.
- Hint: when correctly working, hotWater() is supposed to return the temperature of the water <i>after</i> turning the boiler on.

