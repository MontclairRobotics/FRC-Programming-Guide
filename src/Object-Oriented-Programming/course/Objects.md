# Objects

An object is an instance of a class. 

While this may seem confusing, you can think of it like this:

You have a class called ```Animal```, which can store the name, weight, and species of a given animal. You might create an *instance* of the class ```Animal``` to represent your dog, Fido. 

>Each instance of a class has a copy of each non-static instance variable. These variables contain data specific to that instance.

### User-Defined Data Types

To declare a variable with a class as its type, use the same syntax that is used with primative types:

```java
type name;
```

Using the example of the ```Animal``` class,

```java
Animal fido;
```
>Even though class names are capitalized, variable names are still typically lowercase or camelCase.

### The ```new``` Operator

The ```new``` operator is used to create an instance of, or instantiate, a class.

This is how you would create an instance of class ```Animal``` using the constructor created in the previous lesson:

>To use a specific constructor, pass in arguments corresponding to the parameters of the desired constructor.

```java
new Animal(5, "Fido");
```

This creates an instance of the class ```Animal```, but does not do anything with it. You can assign an instance to a variable like this:

```java
fido = new Animal(5, "Fido");
```

## Objects and Methods

There are two types of methods in a class: static and non-static methods (regular methods).

### Static Methods

Static methods use a new keyword, the ```static``` keyword. You may have noticed its inclusion in the method header for the ```main``` method. 

You declare a static method like this:

```java
static type name() {}
```

>Instance variables can also be static, and are declared like this: ```static int num;```.

The main difference between static and non-static methods is that static methods are associated with the class, and non-static methods are associated with the instance.

That means that static methods can only access information that is *not* associated with a particular instance. Essentially, they can't access non-static instance variables.

To access a static field (instance variable) or method, you need to use the class name, and the *dot operator*:

```java
Test.method();
```

As you can see, the dot operator is used to access a field (instance/class variable), or to perform a method call on a class or object. //TODO CHECK

One possible use of a static method is to count the number of created instances of a class like this:

```java
public class Test {

    private static int count = 0;

    public Test() {
        count++; //same as count +=1;
    }

    private static void resetCount() {
        count = 0;
    }
}
```
Each time an instance of ```Test``` is created, the constructor is called and the variable ```count``` is increased by one.

>Non-static methods *can* access static variables.

To call the static method ```resetCount()```, you would write:

```java
Test.resetCount();
```

### Non-Static Methods

To access a non-static field or method, you *cannot* use the class name. Instead, you must call them on a specific *instance* of a class (an object).

Let's go back to the ```Animal``` example:

```java
public class Animal {
    //non-static instance variables
    private String name;
    private int age;
    
    public Animal(int a, String n) {
        //initialize instance variables
        age = a;
        name = n;
    }

    public String getNameAndAge() {
        return name + age;
    }
}

//Outside of the animal class
Animal fido = new Animal(10, "Fido");

//you call the method on the object

System.out.println(fido.getNameAndAge());
//Prints "Fido10"
```


## The `this` Keyword

`this` is a keyword used inside of classes to refer to the current object inside of a method or constructor.

The only time that you will likely use the `this` keyword is when you have created a local variable with the same name as an instance variable.

```java
public class Test {
    private int num;

    public Test(int num) {
        //Without "this", this line would set the parameter num equal to itself.
        this.num = num;
    }
}
```

## Object Equality

You may recall that equality of primitive types is assessed using the `==` operator.

This does not work the same way for objects. Instead of checking if two objects are "equal", it instead checks if two objects are *the same*. This means that they occupy the same location in memory. 

```java
String str1 = new String("dog");
String str2 = new String("dog");

//is false
str1 == str2;

//is true
str1.equals(str2);
```
However, by default, the `.equals()` method does the same thing as `==`. It will only do something else if you define this method in a class:

```java
public boolean equals(Object obj) {

    //You may also have to check that the object is of the correct type. Don't worry about this now.

    return //whatever conditions you care about
    ...
}
```

