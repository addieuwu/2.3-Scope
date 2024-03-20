# Lesson 2: Return Statements

[Previous Lesson](lesson_1.md)

A function can be used to return values. So far, you are used to using <b>console.log</b> to recieve information. While using <b>console.log</b> visually gives you data, you can't do anything with that data. Instead, you can use a <b>return</b> statement to "return" data. Using <b>return</b> allows you to get data back from a function, so you can use it.

When a function reaches a <b>return</b> statement, the function ends. Only one value can be returned, although you can return anything. Commonly, a function can return boolean data (<b>true</b> or <b>false</b>), a <b>number</b>, a <b>string</b>, or any other data type.

In the following case, only the first bunch of code will run. The second bunch will never be executed, because the function reaches a return statement first. Since the function is ended at that point, it doesn't go any further than that line.


```JS
function myFunction() {
  // a bunch of code
  return;
  // a bunch of other code
}
``` 

When we call this function, <b>isNumberFour()</b>, it checks to see if the value we gave it is the number 4. If it is, the function returns <b>true</b> and ends. It returns nothing if the value isn't the number 4.


```JS
function isNumberFour(num) {
  if (num == 4) {
    return true;
  }
}
```
```Output
isNumberFour(4);

true
```

You can use a return statement to return variables. Returning variables is useful if you want your function to do something that won't have a consistent output, like doing math for you based on values you give it. 

```JS
function addition(num1, num2) {
  return num1 + num2;
}
```

You can also have multiple return statements in your function. For example, if you have multiple possible outcomes. This function below returns <b>true</b> if the number is odd, and returns <b>false</b> if it is anything else.

```JS
function isOdd(num) {
  if (num % 2 == 1) {
    return false;
  } else {
    return true;
  }
}
```

[Next Lesson](lesson_3.md)


## Your Task 
