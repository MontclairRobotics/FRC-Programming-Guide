# Control Flow 
Control flow is the way a program decides what to do and when. Generally, code is executed top to bottom, in the order of appearance, but control flow statements allows for branching and conditionally-executed code.   can be modified using `functions`, `loops`, `if` / `else` statements, `jump` statements, and `try`/ `catch` blocks.

<hr>

# Terminology

**Functions** : Allow for repeated portions of code to be executed differently each time based on a paramater
>`System.out.println("HELLO")` is a function that changes its execution based on the parameter passed, the string. We'll cover these more in depth later. 

**Loops** : Repeats a block of code several times, either in iteration, or while a condition is true. 
>Imagine printing 
>```python
>>>> Hello 1
>>>> Hello 2
>>>> Hello 3
>```
>with just a single block of code rather than 3 lines. Its more cleaner.  
>They will be covered more in depth later.

**If/Else** statements : Let you branch between different executions of the same code based on a condition. 
>Like a human, we conditionally behave as well.
>```
>If hungry, Then Eat().
>Else, Sit(). 
>```
>They will be covered more in depth later. 

<hr>

## Jump Statements
These statements move the "flow" of execution of code. Instead of the code running in a straight line down the file, jump statements move around where the execution occurs in the code. 

```break``` : Stops a flow early
```java
for (int i = 0; i < 10; i++) {
    if (i == 3) break;
    System.out.println(i);
} // Will end loop at 2
```
>Output: 
>```python
>>>> 0
>>>> 1
>>>> 2
>```

```continue``` : Skips the current iteration:

```java
for (int i = 0; i < 5; i++) {
    if (i == 2) continue;
    System.out.println(i);
} // Will not execute at 2
```
>Output: 
>```python
>>>> 0
>>>> 1
>>>> 3
>>>> 4
>```

Switch Cases:
To chose between many options of a variable, and a cleaner than chaining ```if else``` statements.
```java
String day = "Tuesday";

switch (day) {
    case "Monday":
        System.out.println("Start of the week");
        break;
    case "Tuesday":
        System.out.println("Second day of the week");
        break;
    case "Friday":
        System.out.println("Almost the weekend!");
        break;
    default:
        System.out.println("Not a tracked day");
}
```
>Output:
>```python
>>>> Second day of the week
>```

```Return ``` : End a function or execution of a loop, and output a value from the call

```java
public class MyClass {
    public String greet() {
        return "Hello World";// Sets the value of the calling of the function
    }

    public static void main(String[] args) {
        MyClass obj = new MyClass();
        String message = obj.greet(); // Here, the variable is assigned from the return value
        System.out.println(message); // Will output Hello World
    }
}
```
>Output 
>```python
>>>> Hello World
>```

<hr>

## Try / Catch Blocks
`Try` and `Catch` blocks are used in error handling. 
They allow you to run code that might cause an error (inside `try`) without crashing the entire program. 
If an exception occurs, Java jumps to the `catch` block, skipping the rest of the `try` block.
This gives us a chance to handle the error gracefully, and then continue executing the program.


```java
try {
    // Code that might have an error
    int numerator = 10
    int denominator = 0
    int result = numerator / denominator; // This will throw ArithmeticException
    System.out.println("This line won't run");
} catch (ArithmeticException e) {
    // Handle the exception here
    System.out.println("Cannot divide by zero!");
}
System.out.println("Program continues...");
```
>Output:
>```python
>>>> Cannot divide by zero!
>>>> Program continues...
>```
Without the try catch block, if the ArithmeticException went to Java, then the rest of any code following would not execute (see the print statement after not present in the terminal output). 