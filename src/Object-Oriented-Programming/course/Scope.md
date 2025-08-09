# Scope

In Java, variables are only defined in certain parts of your program: the portion in which they are created. This is called the scope of the variable.

Scope in java is rather simple. If a variable is declared inside of a set of braces, it can be accessed without the `.` operator from anywhere within the set of braces.

>If two variables have the same name, the one defined closer to the reference is used.

For example

```java
public class Test {
    // Accessible outside of the class with the "." operator
    public int publicNum;
    
    // In scope throughout the class, only in this class, instance variable
    private int num = 7;


    public void returnGreater(int num) {
        // *method num* is in scope throughout the entire method, and any enclosed blocks


        if (this.num > num) { // The "this" keyword is used to access *instance variables* in the event of a conflict

            //this.num is the instance var
            return this.num;

        } else if (num > this.num) {

            //num is the method var
            return num;

        }

        // Default case
        return num;
    }

}
```
In the above snippet, `publicNum` is accessible through `Test.publicNum` throughout the codebase, but `Test.num` is inaccessible *outside* of the `Test` class, only within it. 

Then, another `num` is defined, it is the num of the *method*, `returnGreater()`. 
>This `num` is different from the private `num` in the class. If the `num` of the method had any other name to declare it by, the class variable `num` would remain accessible within the method, but because they both share the <i>same</i> variable name, the <u><b>one closest in scope</b> is referenced</u> when inside of the method (which is the parameter `num`).
>>So, to avoid confusion, if we ever wanted to reference the `num` of the class, we just access *this*.`num`, `this` inside of a class refers to `itself`. 

And finally, the `num` of the *method* is not accessible in the *class*, only within the *method*. 

While this was a simple example, the scope of variables will play an important role in debugging, so it is useful to understand the concept of scopes and how they effect your code. 