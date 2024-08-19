# Classes

A class is Java's fundamental unit of storing code. Everything you write in Java will be inside of some kind of class (or similar structure). 

A class in java is used to represent **something**, similarly to how an ```int``` represents a number and a ```String``` represents a string of text. A class may be used to represent an animal, a game piece, or even a robot. 

You've probably seen this line at least once, at the top of your main file:

```java
public class Main { [...] }
```
>Don't worry about what `public`` means for now, we'll cover it more in depth in the page on [packages](./Packages.md).

The above statement defines a class called Main, with the code inbetween the opening `{` and closing `}` parenthesis being considered *a part* of that class.

> Class names must be unique within a package (folder), and are typically capitalized.

A class can contain three things:
* Methods (Functions).
* instance variables.
* Special methods called **constructors**.

## Instance Variables ##

Instance variables are [variables](../../Java-Fundamentals/course/Variables.md) that are located *within* a given class. They differ from the type of variables that we have covered previously in that they are declared *outside* functions (unlike all the code we've seen before)

You may or may not have learned the difference between a variable declaration and a variable initialization. 

Declaration is when you create a variable, but do not immediately assign it a value:

```java
int x;
```
Initialization is when you assign the variable a value. In Java you are not allowed to [access](../../Java-Fundamentals/course/Variables.md#variables) or [change a variable](../../Java-Fundamentals/course/Operators-And-Math.md) before *initalizing* it

Here's an example of variable initialization:

```java
x = 10;
```

Instance variables are variables that are declared at the top of a class, right after the class declaration. For example:

```java
public class Animal {
    public String name;
    public int age;
    public Animal child;
    
    ...
}
```

Instance variables will be initialized later, in the constructor, which will be explained later.

## Methods ##

Methods are the name given to functions in Java. 

> Methods == Functions

Any method within a class can access the instance variables of that class.

We'll talk more about methods later.

## Constructors ##

The Constructor of a class is what is used to create an instance of a class.

> If you don't know what an instance is, don't worry about it. It will be explained in the page on [Objects](./Objects.md)

They have no return type, and instead of a name, they use the name of the class.

Let's look at an example of a constructor:

```java
public class Animal {
    private String name;
    private int age;
    private Animal child;


    public Animal(int a, String n) {
        //initialize instance variables
        age = a;
        name = n;
    }
}

```

>You can have multiple constructors with the same name in a class, as long as they have different [signatures](../../Java-Fundamentals/course/Functions.md#function-overloading)

Let's look at an example of a class that has multiple constructors
```java
public class Animal {
    public String name;
    public int age;
    public Animal child;

    public Animal(int a, String n) {
        //initialize instance variables
        age = a;
        name = n;
    }

    public Animal(String n) {
        age = 0;
        name  = n;
    }
}
```

In the above example we can have multiple constructors due to the properties of [Method Overloading](../../Java-Fundamentals/course/Functions.md#function-overloading)

This is often used when you would like some instance variables to contain certain default values. (for instance, an animal's age starting at `0`)

If you don't need a constructor to do anything, you don't have to write one. All classes in java have an implicit, or implyed, constructor with no arguments which does nothing. We'll cover how to call the constructors we make (or ones that are implyed) [next](./Objects.md)










