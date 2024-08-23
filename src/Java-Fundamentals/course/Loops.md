# Loops

This page is a continuation to the explanation of control flow [here](./If-Else.md#java-branching-if-if-else). Loops are extremely useful control flow statements that save time programming and make our code easier to read and debug. We'll go over the multiple types of loops and their differences in this page.

## While Loops

The while loop is the simplest loop and is used to repeat a part of the program repeatedly until the specified [Boolean condition](./Boolean-And-Equality-Operators.md#) is false. As soon as the Boolean condition becomes false, the loop automatically stops.

Here is the structure of a while loop:

```java
while (condition) { // the condition that is evaluated
    // Do things here

    // Last line of the loop body is the one right before the }
}
```
Let's go over how this loop will be executed:
1. The condition is evaluated. If it evaluates to `false`, the code is skipped.
2. Loop body is executed only if the condition evaluates to `true`
3. Repeats 
   



> If the condition switches from evaluating to `true` to evaluating to `false` *during* step 2, the while loop won't stop until it reaches step 1.

## For Loops

Another common loop is the for loop. The for loop is useful when you need to loop through a set number of items. Let's say we want to loop through a set of numbers to add them up.
Here is how you would do it:

```java
int number = 3;

for (int i = 0; i < 10; i++) { // <- Important line!
    number = number + i;

    // Once again, the last line of the loop body is the one right before the }
}




```

The line containing the `for` statement itself contains several statements, let's break them down:

1. ```java
    int i = 0;
   ```
   - This is run before the first iteration of the loop and sets the variable that the rest of the loop uses. This variable is usually named after a single letter such as `i` or `j`.
2. ```java
    i < 10;
   ```
   - A condition utilizing [equality operators](./Boolean-And-Equality-Operators.md#equality-operators). If this condition is true, the loop runs again, otherwise the program moves on. This is identical to the while loop's condition that we saw above.
3. ```java
    i++;
   ```
   - Ran at the end of each iteration of the for loop, and in this specific example is utilizing [math shorthand](./Operators-And-Math.md#operator-shorthand) to increment `i` by 1

______________________________________________________________________

Finally, you have the actual code which is run each iteration. Notice we reference the [variable](./Variables.md#variables) `i` in the code.

One detail worth noting is that the for loop and while loop can both accomplish the same tasks. It is just a clearer and more convenient way to do many tasks. Here is what the above for loop example would look like as a while loop:

```java
int number = 0;
int i = 0;
while (i < 10) { // the condition that is evaluated
    number = number + 1;

    i++; //or i = i + 1;
    // Last line of the loop body is the one right before the }
}
```

______________________________________________________________________

## Resources    

[W3Schools While Loop](https://www.w3schools.com/java/java_while_loop.asp)\
[W3schools For Loop](https://www.w3schools.com/java/java_for_loop.asp)
