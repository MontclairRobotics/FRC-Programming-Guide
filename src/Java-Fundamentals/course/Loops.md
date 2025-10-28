# Loops

This page is a continuation to the explanation of [control flow](./Control-Flow.md). Loops are extremely useful control flow statements that save time programming and make our code easier to read and debug. We'll go over the multiple types of loops and their differences in this page.

## While Loops

The `while` loop is the simplest loop and is used to repeat a part of the program repeatedly until the specified [Boolean condition](./Boolean-And-Equality-Operators.md#) is false. As soon as the Boolean condition becomes false, the loop automatically stops.

Here is the structure of a while loop:

```java
while (condition) { // the condition that is evaluated to true or false
    // Do things here

    // Last line of the loop body is the one right before the }
}
//after condition is evaluated to false the code jumps down to here and continues
```
Let's go over how this loop will be executed:
1. The condition is evaluated. If it evaluates to `false`, the code is skipped.
2. Loop body is executed only if the condition evaluates to `true`
3. Repeats 
   
> If the condition switches from evaluating to `true` to evaluating to `false` *during* step 2, the while loop won't stop until it ends and repeats step 1.

## For Loops

Another common loop is the for loop. The for loop is useful when you need to loop through a set number of items. Let's say we want to loop through a set of numbers to add them up, here is how you would do it:

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
   - This is run before we start the loop and sets the variable that the rest of the loop uses. This variable is sometimes named after a single letter such as `i` or `j`. This is named after [index](./Arrays.md)
2. ```java
    i < 10;
   ```
   - The loop's condition that it checks after each run-through. This uses [equality operators](./Boolean-And-Equality-Operators.md#equality-operators). If this condition is true, the loop runs again, otherwise the program moves on. This is identical to the while loop's condition that we saw above.
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

## For each loops

The for each loop runs code for every part of a collection. It will run a loop that is the number of indexes in an [Array](./Arrays.md) or String.

This may be confusing but the format is:
```java
for (theDataType name: nameOfArrayOrSomething) {
    [...]
}
``` 

This splits your array into individual data entries that can be referred to by a name in the loop.

```java
String[] appleTypes = new String[] {"Pink Lady", "Red Delicious", "Granny Smith", "umm I'm out of apple names"};
for (String theTypeOfApple: appleTypes) {
    [...]
    System.out.println(theTypeOfApple);
} //prints out every item in the array
```
Here we have an array of apple types. The code in for loop runs "for each" type of apple. In this code the type of apple we are currently on is referred to as `theTypeOfApple`. Each time this runs we are on a different entry in the array and the code is done on all of them. Each of these entries is of type `String` and we are calling them `theTypeOfApple` for the for loop. The array we are looping through is called `appleTypes`. That is why we have `String theTypeOfApple: appleTypes` because this runs through the everything in array with each individual String.

Here are some examples:
```java
String name = "Connor";
for (char letter: name) {
    //here there can be code where the code runs each character that makes up the String "name". Every character that it runs through will be referred to as "letter" every time the loop goes around.
}
```java
int[] numbers = new int[] {3, 5, -7, 1}
int total = 0
for (int number: numbers) {
    total += number
}
```
This last example adds every integer in numbers together. Also since arrays are often a named a plural noun, using it's singular to refer to each entry makes sense. Here we are referring to each number that is a part of numbers.

______________________________________________________________________

The regular loop can also be used to go through an Array or String but still allowing us to use the index in the code:
```java
for (int i = 0; i < arrayName.length; i++) {
    System.out.println("This is the index: " + i);
    System.out.println("And this is the value: " + arrayName[i]);
}
```
This lets us use both the index and the value (through `arrayName[index]`) in each iteration of the loop. This too will go through every entry into the array.

## Resources    

[W3Schools While Loop](https://www.w3schools.com/java/java_while_loop.asp)\
[W3schools For Loop](https://www.w3schools.com/java/java_for_loop.asp)
