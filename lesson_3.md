# Lesson 3: Scope

[Previous Lesson](lesson_2.md)

Scope defines where a variable is accessible. There are two types of scope: global, and local. A global variable is something that is accessible to anything and everything in your code. Currently, you have been primarily using global variables, although you have used some local variables in the previous two lessons.

The only difference between a local and global variable is where it's declared. A local variable is often declared inside a function, although that isn't the only way to make a variable local.

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


## Your Task 
