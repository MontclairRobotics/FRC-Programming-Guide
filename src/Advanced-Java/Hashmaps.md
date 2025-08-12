## HashMaps

You've just learned that you can store a list of items as an ArrayList and access the values using their indexes.

HashMaps allow you to do the same thing, except the index can be **any unique value**.

For hashmaps and maps, the index is called the key, and the element corresponding to that key is called the value.

Both the key and value can be any type accepted by a type parameter.

Keys that are equal to one another are not allowed, but different keys can have the same value.

HashMap is also contained in `java.util`.

### General Syntax for Creating a HashMap

```java
import java.util.HashMap;
HashMap<KeyType, ValueType> name = new HashMap<KeyType, ValueType>();
```

To add items to a HashMap, use the method `.put(K key, V value)` where `K` is the key type parameter and `V` is the value type parameter.

Here is an example of a map that uses String names as keys and Integer ages as values:

```java
import java.util.HashMap;

public class Program {  
    public static void main(String[] args) {

        HashMap<String, Integer> ages = new HashMap<String, Integer>();

        ages.put("Johnny", 3);  
        ages.put("Carl", 16);  
        ages.put("Grandpa", 72);  
        ages.put("Someone very old", 241);

        System.out.println(ages);  
        // prints: {Johnny=3, Carl=16, Grandpa=72, Someone very old=241}  
    }  
}
```
### More Methods

To access a value, use `.get(K key)` and refer to its key:

```java
ages.get("Johnny"); // 3
```

To remove a value, use `.remove(K key)` and refer to its key:
```java
ages.remove("Johnny"); // Johnny is no longer in the HashMap
```

To get the number of items, use `.size():`
```java
ages.size();
```

To see if the map contains a key, use `.containsKey(K key):`
```java
ages.containsKey("Carl");  // true  
ages.containsKey("Billy"); // false
```
>For more information, check out [w3schools](https://www.w3schools.com/java/java_hashmap.asp)

---

## Task

Create a map with keys that are products (String) mapped to prices (Integer or Double). Print out some of the prices of products using `.get`.
