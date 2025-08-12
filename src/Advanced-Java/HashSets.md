## HashSets
You’ve just learned that a HashMap stores key–value pairs, with each key being unique.

A `HashSet` is similar, except it stores only the values, and each value must be unique.
There are no keys — you just add elements, and the set makes sure no duplicates are allowed.

Like `HashMap`, `HashSet` is contained in `java.util`.

General Syntax for Creating a HashSet
```java
import java.util.HashSet;

HashSet<ElementType> name = new HashSet<ElementType>();
```
To add items to a HashSet, use the method .add(E element) where E is the element type parameter.

Here is an example of a set that stores String names:

```java
public class Program {
    public static void main(String[] args) {

        HashSet<String> names = new HashSet<String>();

        names.add("Johnny");
        names.add("Carl");
        names.add("Grandpa");
        names.add("Carl"); // duplicate - ignored

        System.out.println(names);
        // prints something like: [Grandpa, Johnny, Carl]
        // order is not guaranteed
    }
}
```
More Methods
To check if the set contains an element, use .contains(E element)

<b>`names.contains("Carl"); // true`</b>
<b>`names.contains("Billy"); // false`</b>

To remove an element, use .remove(E element)

<b>`names.remove("Johnny"); // Johnny is no longer in the set`</b>

To get the number of items, use `.size()`

<b>`names.size();`</b>

To remove all elements, use `.clear()`

<b>`names.clear();`</b>


>For more information, check out [w3schools](https://www.w3schools.com/java/java_hashset.asp)

---

## Task

Create a set of your favorite foods (Strings). Print the set, check if a certain food is in it, and remove one.