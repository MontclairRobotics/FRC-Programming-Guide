# Functions




Functions are repeatable, modular blocks of code used to accomplish specific tasks. We can define our own functions that will optionally take input(s), do something with it, and optionally *return* an output. We first saw functions in the page on [Basic Syntax](./Basic-Syntax.md) where the function is called `main`.

To better explain how to read & write functions, lets look at the following example:

```java
int returnThree() {
    return 3;
}

int x = returnThree(); // 3

```

## Function Declaration

There's a lot of information to dissect in the above example but for now let's look at the first line:

- ```java
  int addTheseNumbers(int a, int b) { 
    // [...]
  }
  ```

This is known as the **function declaration** and it tells the compiler the name of the function alongside its inputs and outputs.

- `int`
  - A function declaration starts with a [data type](./Variables.md#data-types) that specifies what type of value the function will return back to us.
- `returnThree`
  - This is the name of the function, which we'll use to refer to it in our code.
- `() { [...] }`
  - Inside the `()` is where we would specify any inputs to the function, we'll go over this more in a bit.
- `return 3`
  - This is only line of code inside the curly brackets (and thus inside the function). We'll explain the `return` keyword in a second, but for know all you need to know is that whatever comes next on the line with the `return` is *returned* to wherever the function was called. In this case, `3` is *returned* back to where the function was called, and saved to the variable `x`.

> If the beginning of a function declaration has to be a data type, then how can we have a function that returns nothing? Good question. If we want to specify that the function returns *no* data, then we use the keyword `void` *instead* of a data type such as `int` or `boolean`

## Return Statement

In Java, every function is [declared with a return type](./Functions.md#function-declaration) such as `int`, `float`, `double`, `string`, etc. These return types required a return statement at the end of the function. The `return` keyword is used for returning the value.

> The void return type doesn't require any return statement. If we try to return a value from a void function, the code will fail.

There are 3 main use cases for using the `return` keyword:

- Returning a value:
  - ```java
    int three() {
      return 3;
    }
    ```
  - ```java
    double aNumber() { // return type is double since -1.3 is a decimal.
      return -1.3;
    }
    return -1.3;
    ```
  - ```java
    String sayHi() { // Remember, String is capitalized.
      return "Hello!";
    }
    ```
- Returning a variable:
  - ```java
    int myNumber() {
      int x = 7;
      return x; // 7
    }
    ```
  - ```java
    String message() {
      String hello = "Hello" + "World!";
      return hello;
    }
    ```
- Returning *another* function:
  - ```java
    int four() {
      return 4;
    }
    int five() {
      return four() + 1;
    }
    ```

## Accepting Input

### One Input

Information can be passed to functions as a **parameter**. Parameters act as [variables](./Variables.md) inside the function. Parameters are specified after the function name, *inside* the parentheses. You can add as many parameters/inputs as you want, but they have to be seperated by a comma

The following example has a function that takes a variable of type `String` called `name` as a parameter. When the function is called, we pass alongside a string, which is used inside the function in a print statement:

> The variables that we pass *through* the function when we call it are known as **arguments**

```java
void printName(String name) { // Remember, void means no value is returned from the function.

  /* will print whatever string is passed into the function, regardless of if what we pass in is a variable, a call to another function, a normal string, etc. */
  System.out.println(name); 
}

printName("Baebraham"); // Will call the function printName with the argument "Baebraham"
```

### Multiple Inputs

A function with multiple parameters is structured the same way as seen above, except the second parameter is followed by a comma. Consider the following function that adds 2 numbers named `a` and `b`

```java
int addNumbers(int a, int b) {
  return a + b;
}
```

This function has 2 inputs, `a` and `b`. Each input has a data type (`int`) followed by a name (`a`/`b`). The main difference here is that the 2 inputs are seperated by a comma, which tells the compiler that these are 2 seperate inputs.

There is no limit to how many parameters a function can have, but they need to be seperated by commas such as in the example above.

### Function Overloading

You can have multiple function with the same name in java, as long as they have different *function signatures*. This means that the parameters are different in some way. For example, both 

```java
int addNumbers(int a, int b) {}
```
and 
```java
int addNumbers(int a, int b, int c) {}
```

are valid.

You can also vary the data types:

```java
String numString(String a, int b) {}
```
and
```java
String numString(int a, String b) {}
```

can both appear in the same file (class).

>It is important to note that changing the names of parameters will just cause an error, unless the data types or order of parameters is also changed (The names are irrelevant).
