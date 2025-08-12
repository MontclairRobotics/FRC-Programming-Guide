## Lambdas
A quicker way to define functions, and looks neater (relative to the complexity of the original code). This is 'advanced java,' so prioritize understanding other 'fundamentals' before moving here. Lambdas are present in many other programming languages, so understanding it here will help you in your career. 
>A sample function defined as a method:
>```java 
>int add(int a, int b) {
>    return a + b;
>}
>```

>A sample lambda function:
>```java
>//@FunctionalInterface
>interface MathOperations {
>    int operate(int a, int b);
>}
>
>// Assigning a lambda to a variable. The lambda itself is still annonomous, but the variable is named. 
>MathOperations add = (a, b) -> {a + b};
>//[fINAME]    [lName]  (params)  return
>
>// Using it
>int result = add.operate(3, 4);
>// [type] [vName] = [lName].[OPERATE bc thats how the param is declared to lambda](params)
>System.out.println(result); // 7
>```
In Lambdas, we pass the parameters to a function, without having to declare an entire method. We define a functional interface first, because like a method, if you pass parameters to it like in `(a, b)`, the lambda will not know how to handle it, and will have an error. Java needs to have declared type parameters. 
>Notice how the parameters are defined in the `MathOperations` interface, and then again how the same parameters are being referenced from the declaration of the lambda, in `MathOperations add = (a, b) `
After declaring the lambda, we can use the function anywhere within its scope in the code. 
Right now, Lambdas may appear to be challenging and overcomplicate basic methods, such as `add`. However, we use them for concise syntax, prevent us from writing new methods and classes, and can be paired with loops, forEach. 


>A more complicated application of lambdas
>```java
>nums.forEach(new java.util.function.Consumer<Integer>() {
>    public void accept(Integer n) {
>        System.out.println(n);
>    }
>});
>```
> *vs*
>```java
>public interface Consumer<T> {
>    void accept(T t);
>}
>// Using a lambda expression
>nums.forEach(n -> System.out.println(n));
>```
> Notice the difference in complexity and readibility of the code. It is clearly idenfitiable which is written in 'lambda style' and which was written as a 'basic method.' 


For more information, check out [w3schools](https://www.w3schools.com/java/java_lambda.asp)


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