# Lesson 2: Return Statements

[Back to Lesson 1](lesson_one.md)

A function can be used to return values. So far, you are used to using <b>console.log</b> to recieve information. You can use a <b>return</b> statement to "return" data, allowing a function to have more usage.

When a function reaches a <b>return</b> statement, the function ends. Only one value can be returned, although you can return anything. Commonly, a function can return boolean data (<b>true</b> or <b>false</b>), a <b>number</b>, a <b>string</b>, or any other data type.

In the following case, only the first bunch of code will run. The second bunch will never be executed, because the function reaches a return statement first. Since the function is ended at that point, it doesn't go any further than that line.


```JS
function myFunction() {
  // a bunch of code
  return;
  // a bunch of other code
}
``` 
<br>

When we call this function, <b>isNumberFour</b>, it checks to see if the value we gave it is the number 4. If it is, the function returns <b>true</b> and ends. If it is anything other than 4, it returns <b>false</b> and ends.


```JS
function isNumberFour(num) {
  if (num == 4) {
    return true;
  } else {
    return false;
  }
}
```


```JS
function isOdd(num) {
  if (num % 2 == 0) {
    return false;
  } else {
    return true;
  }
}
```
