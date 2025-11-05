## Lambdas
Think of lambdas as a way to store functions for later use, kind of like how we store information (numbers, text, etc) in variables so that you can easily access it later. For example, imagine if you could do this in code: when button "x" is pressed on the joystick, run this function until we let go of the button. To do this requires implementation of a lambda function. 

For example, we need to pass in a function into a Command* so that when the button is pressed (at any point while the code is running), Java will take that stored function and run it on the spot. We used lambdas to implement a Command-based robot, in which actions are executed in real-time by functions we store for later through the use of lamdbas. 

*Commands are a specific WPILib Class to help with the execution of the lambdas, which we will cover in the FRC section of this textbook. 

>A sample function defined as a method:
>```java 
>void printSequence(String a, String b) {
>    System.out.println(a + b);
>}
>```

>A sample lambda function:
>```java
>@FunctionalInterface //denotes a functional interface, in which there can only be one abstract method. Used to implement lambdas.
>interface PrintOperations {
>    void operate(int a, int b);
>}
>
>//Creates an 'instance' of the FunctionalInterface PrintOperations, called printSequence, which is defined as a lambda function that takes in two inputs, a and b, and prints their sum. We know that a and b are both Strings because of the abstract definition of the 'operate' method.
>PrintOperations printSequence = (a, b) -> {
>   System.out.println(a + b);
>};
>
>//Using it
>printSequence.operate("Hello ", "World!");
>//Similar to methods, we use the . operator to execute a lambda function
>```
In Lambdas, we pass the parameters to a function, without having to declare an entire method. We define a functional interface first, because like a method, if you pass parameters to it like in `(a, b)`, the lambda will not know how to handle it, and will have an error. Java needs to have declared type parameters. 
>Notice how the parameters are defined in the `PrintOperations` interface, and then again how the same parameters are being referenced from the declaration of the lambda, in `PrintOperations printSequence = (a, b) -> {[...]}`
After declaring the lambda, we can use the function anywhere within its scope in the code. 
Right now, Lambdas may appear to be challenging and overcomplicate basic methods, such as `add`. However, we use them for concise syntax, prevent us from writing new methods and classes, and can be paired with loops, forEach. 

---
## Task: Practice with Lambdas

1. Create a functional interface called `StringModifier` that has one method:
```java
String modify(String s);
```

2. Use a lambda expression to implement `StringModifier` that takes a string and returns it in all uppercase.

3. Write a small program that:
   - Declares your lambda instance for `StringModifier`.
   - Uses it to convert a few example strings (like `"hello"`, `"world"`) to uppercase (like `"HELLO"`, `"WORLD"`).
   - You could reverse the order of chars in a string for another practice problem. 
   - Prints out the results in either case.

### Example structure to get you started:

```java
@FunctionalInterface
interface StringModifier {
    String modify(String s);
}

public class LambdaTest {
    public static void main(String[] args) {
        // Lambda to convert string to uppercase
        StringModifier toUpper = s -> s.toUpperCase();

        System.out.println(toUpper.modify("hello")); // HELLO
        System.out.println(toUpper.modify("world")); // WORLD

        // Lambda to reverse a string
        StringModifier reverse = s -> new StringBuilder(s).reverse().toString();
        System.out.println(reverse.modify("hello")); // olleh
    }
}
```

## Applications of Lambdas
There are a three types of common FunctionalInterfaces, or lambdas, that we interact with: Consumer, Supplier, and Runnable. Notice how each of these describes the action it will take. A Consumer lambda takes in a variable, with no outputs. A Supplier lambda takes in no inputs, and returns a value. A Runnable lambda is simply code that you want to run later. For example, let's say we want a function to be able to access the robot's arm angle throughout a match? Use lambdas. Want to tell Java, "Here's how we move our elevator to this height," so it can execute it on a button press? Use lambdas.    

Here's an example
```Java
>//function that takes in a supplier of our arm angle, and prints out the value
>void printArmAngle(Supplier<T> armAngleSupplier) {
    System.out.println("Arm angle: " + armAngleSupplier.get());
}
>//we can execute this as follows:
>printArmAngle(() -> getArmAngle());
>//notice how we pass in a lambda function to "supply" the function printArmAngle() with a way to get the current arm angle. If we were to simply pass in a variable, that would have the same value throughout the match instead of continuosly updating by ACTIVELY getting the arm angle each time we print it.
```

Here's another example
```Java
>//Commands.runOnce is a method that accepts a Runnable lambda, a function that we want to run later
>//When this command, zeroGyro is scheduled, it will proceed to call the function setGyroAngle(double angle) with an input of 0 radians
>Command zeroGyro = Commands.runOnce(() -> setGyroAngle(0));
>//Don't worry about the syntax with commands just yet. This is part of WPILib, which will be covered later
>
```
For more information, check out [w3schools](https://www.w3schools.com/java/java_lambda.asp)
