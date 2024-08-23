# Boolean & Equality Operators

## Boolean Operators

There are 3 main boolean operators in Java (AND, OR, NOT). These operators are used to create conditions which will be used later.

> Conditions are statements that are created by the programmer which evaluate to either `true` or `false`

### The OR Operator (||)

Given 2 Booleans, the `||` operator can be used to see if **either** of the Booleans are true. This is illustrated in the table below:

| Input 1 | Input 2 | Output |
| ------- | ------- | ------ |
| True    | False   | True   |
| False   | True    | True   |
| False   | False   | False  |
| True    | True    | True   |

```java
boolean x = true;
boolean y = false;
boolean result = x || y; // true
```

```java
boolean x = false;
boolean y = false;
boolean result = x || y; // false
```

### The AND Operator (&&)

Given 2 Booleans, the `&&` operator can be used to see if **both** of the 2 Booleans are true. This is illustrated in the table below:

| Input 1 | Input 2 | Output |
| ------- | ------- | ------ |
| True    | False   | False  |
| False   | True    | False  |
| False   | False   | False  |
| True    | True    | True   |

```java
boolean x = true;
boolean y = false;
boolean result = x && y;// false
```

```java
boolean x = true;
boolean y = true;
boolean result = x && y; // true
```

### The NOT Operator (!)

The NOT operator is special as it only uses 1 boolean, the operator inverts whatever boolean is inputted into it. This is illustrated in the table below:

| Input | Output |
| ----- | ------ |
| True  | False  |
| False | True   |

```java
boolean x = !false; // Not False: True
boolean y = !x; // Not True: False
```

## Equality Operators

Equality operators are used to create conditions. You can check if two variables are equal, not equal, or if one is greater than the other. Equality operators will *evaluate* to either `true` or `false`. Similar to the boolean operators explained above

**These operators are often used on Booleans, Integers, and Doubles**

- `x != y`
  - If `x` does not equal `y`: will evaluate to `true`
- `x == y`
  - if `x` equals `y`: will evaluate to `true`

**These operators are often used on Integers and Doubles.**

- `x > y`
  - if `x` is greater than `y`: will evaluate to `true`
- `x < y`
  - if `y` is greater than `x`: will evaluate to `true`
- `x <= y`
  - if `y` is greater than *or* equal to `x`: will evaluate to `true`
- `x >= y`
  - if `x` is greater than *or* equal to `y`: will evaluate to `true`

Keep in mind that x and y don't have to be variables, they could be integers, doubles, strings, etc.

Let's look at a few examples of equality operators in action:

```java
int x = 3;
double y = 4.1;
boolean z = x > y; // False, 4.1 > 3
boolean = (y - 3) > 1; // True, 1.1 > 1 
```

```java
boolean x = false;
boolean y = false;
boolean result = (x == y); // true, false == false
```

> It's good practice to use parenthesis to separate the arithmetic from an equality operator, such as in the example above.

## Practice

1. What is the value of `result` in the following example?

```java
  double x = 9;
  double y = 4;
  double result = x < y;
```

<details>

`x` has a value of 9 and `y` has a value of 4. We then see if x is less than (\<) y and save the value to `result`. **Since 9 is less than 4, result has a value of** `false`.

</details>

______________________________________________________________________

2. Create 2 variables, `x` and `y`. Assign the value of `true` to x and `false` to y, then use the OR `||` operator on `x` and `y` and save it to a boolean named `result`

<details>

```java
boolean x = true;
boolean y = false;

boolean result = x || y;
```

</details>

______________________________________________________________________
