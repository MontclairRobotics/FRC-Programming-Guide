# Scope

In Java, variables are only defined in certain parts of your program: the portion in which they are created. This is called the scope of the variable.

Scope in java is rather simple. If a variable is declared inside of a set of braces, it can be accessed without the `.` operator from anywhere within the set of braces.

For example

```java
public class Test {
    //In scope throughout the class
    private int num;

    //Accessible outside of the class with the "." opertor
    public int publicNum;

    public void returnGreater(int num) {
        //num is in scope throughout the entire method, and any enclosed blocks.

        //If two defined variables have the same name, the one defined closer to where it is accessed is used. 

        //The "this" keyword can be used to    access instance variables in the event of a conflict.

        if (this.num > num) {
            //this.num is defined
            return this.num;
        } else if (num > this.num) {
            //num is defined
            return num;
        }

        //Default case
        return num;
    }
}