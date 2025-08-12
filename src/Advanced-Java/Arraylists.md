## ArrayLists


Although arrays are useful, they are quite limiting in terms of storage. What if we want to change the number of things in an array, like when you need to add something to a shopping list? What about when you want to connect strings with items rather than indices, like storing settings for every user of a website? ArrayLists and HashMaps are the answer

## ArrayLists

ArrayLists are like arrays with 2 differences:

* ArrayLists are generic and therefore cannot be used with primitives (you must use objects)  
* The size of an ArrayList can change depending on how many values you put in it (not locked)

To use an ArrayList, you must import it. ArrayList is contained in the java.util package:

```java
import java.util.ArrayList;
```

>#### NOTE:
>
>ArrayList's type parameter is named `E`. This will be referenced from now on in this text.

### Creating and Modifying an ArrayList

You can create an ArrayList using normal instance-creation syntax for a class (using new), as long as you remember to provide the type parameter.

This syntax is as follows:

```java
import java.util.ArrayList;
ArrayList<Type> name = new ArrayList<Type>();
```

We use the method `.add(E obj)` to append an object (obj) to the end of the list.

We can also use the method `.add(int index, E obj)` to insert an object `obj` at position index (0 \<= index \<= length of array list), moving elements at position index and higher to the right.

For example:


```java
import java.util.ArrayList;

public class Program {

    public static void main(String[] args) {

        // Create the ArrayList
        ArrayList<String> dogs = new ArrayList<String>();
        // dogs looks like []

        // Add data to its end
        dogs.add("Golden Retriever");
        dogs.add("Poodle");
        dogs.add("Dalmatian");
        // dogs looks like ["Golden Retriever", "Poodle", "Dalmatian"]

        // Add data in front of the list
        dogs.add(0, "Pugs");
        // dogs looks like ["Pugs", "Golden Retriever", "Poodle", "Dalmatian"]

        System.out.println(dogs);
        // prints [Pug, Golden Retriever, Poodle, Dalmatian]
    }

}
```

---

## Helpful Methods of the ArrayList

We use `.size()` to return an int representing the number of elements in an ArrayList:

```java
dogs.size(); // 4
```

We use `.get(int index)` to return the element at position index in a list:

```java
dogs.get(1); //"Golden Retriever"
```


This can be thought of as analogous to the `array\[index\]` syntax used for Java's built-in arrays.

We use `.set(int index, E obj)` to replace the element at position index with obj: (also returns the object formerly at position index)

```java
String aDog = dogs.set(1, "Husky");
// aDog = "Golden Retriever"
// dogs = [Pug, Husky, Poodle, Dalmatian]
```

We use `.remove(int index)` to remove the element from the position index, moving elements at position index \+ 1 and higher to the left (subtracting 1 from their indices). (Also returns the element formerly at position index)

```java
String anotherDog = dogs.remove(1);
// anotherDog = "Husky"
// dogs = [Pug, Poodle, Dalmatian]
```

>For more information on ArrayLists, [check out w3schools](https://www.w3schools.com/java/java_arraylist.asp)

---

## Task

Create an ArrayList of Strings that contains a list of whatever you want, then:

* use a for loop to print everything in the ArrayList  
* also print the number of elements in the ArrayList

---
