# Operators & Arithmetic

Operators represent basic mathematical operations. Addition, subtraction, division, multiplication, and one other we'll get to later. It's important to remember that Java follows PEMDAS (Parentheses, Exponents, Multiplication & Division, Addition & Subtraction).

Consider the following example:

```java
double x = 6.0;
double y = 2.1;
double z = -1.5;
double three = (6 + 2) - 5; // 3
double xy = x * y; // 12.6
double b = y / z; // -1.4
```

### Operator Shorthand

Java also supports a shorthand for performing math on a variable quickly.

```java
int x = 3;
x = x * 2; // x * 2 = 6
```

```java
int x = 3;
x *= 2; // x * 2 = 6
```

**Both** of the above snippets multiply x by 2. `*=` multiplies a variable by the number next to the equal sign, same for `/=`, `+=`, and `-=`, for division, addition, and subtraction respectively.

### Applications To Strings

Some of these operators can also be used when working with strings, for example when you need to add strings together:

```java
double string1 = "The quick brown fox ";
double string2 = "jump over the lazy dog!";
double result = string1 + string2; // The quick brown fox jumps over the lazy dog
```

### Accidental Casting

It's important to be mindful of what data types you're working with when using the division operator. Consider the following:

```java
int x = 3;
int y = 4;
double z = y / x; // 4/3 = 1.33~?
```

While the expected value of `z` is 1.33~, this is not the case. `z` actually ends up having a value of 1.

*Why do you think this is?*

<details>
While the expected value of <code>z</code> is 1.33~, this is not the case. <code>z</code> ends up having a value of 1. This is because since <b>both</b> <code>x</code> and <code>y</code> are of type <code>int</code>, it rounds to the nearest integer. To avoid this, <b>make sure that at least one of the types you are dividing by is of type</b> <code>double</code>
</details>

### Modulo

> Given two positive numbers `a` and `n`, `a` modulo `n` (often abbreviated as a mod n) is the remainder of the division of a by n, where `a` is the dividend and `n` is the divisor.

The Modulo operator is used to get the remainder of any given division. It's helpful to think of it as doing integer division, then returning the remainder. It is represented by the `%` sign.

```java
5 % 3 // 2
9 % 2 // 1
3 % 3 // 0
25 % 5 // 0

```
## Resources
[CodeDamn](https://codedamn.com/news/java/what-is-modulo-modulus-remainder-operator-in-java)
