## VARIABLES

variable is simply a container for a value

the computer gives us space in its memory where we can put data that we want to use as a reference for later.

we make a variable by using the assignment operator [=] to assign a value to a variable that have a name

although we use an equal sign
but in programming:
the equals sign means I want to take the value on the right and store it in the variable on the left. It doesn't mean the two sides are equal.

```
age = 36
print(age)
```

age => the name of the variable
= => the assignment operator
36 => the value that will be stored in the variable

NOTICE when you use string => we put it inside a quotation mark.

```
name = "ali"
print(name)
```

how can we the type of the data that inside our variables ?

you can do that by using the type() function

```
print(type(age))
\# the result will be [int]
print(type(name))
\# the result will be [str]
```

**Variable across language**

some language require that you define your variables and their types before you can use them, like Java, C , and C++.
example in java
string cookie = "sugar";
system.out.println(cookie);

in other language
like Python, we don't need to declare a variable's type before using it.

**Name convention for variables**

Name can contain only :
letters
numbers
underscores

Notice:

- the name can't start with number
- Don't use white space, instead use underscore
- the name in programming is case sensitive
- variable can not be keywords that words which are reserved by the language like If, For, while

## numbers

There is two kind of numbers in python  
Integer:
a whole number

float:
a decimal number has a floating point

**operators**

- addition[+]
- subtraction[-]
- multiplication[*]
- division[/]
- modularity [%] => give you the reminder of the division
- exponent [**]

print(2 + 2)
4
print(5-3)
2
print(2 \* 5)
10
print(5 / 5)
1
print(5 % 5)
0
print(5 % 3)
2
'''
in programming the math work just like in the real life

meaning it respect the order of the operator

please excuse my dear aunt Sally

[P] parentheses first
[E] exponents
[MD] multiplication and division from left to right
[AS] addition and subtraction, from left to right
'''
print(3 + 5 _ 2)
13
print( (3 + 5) _ 2)
16
! in python coma cosidered as a floating point so don't use at as a separator

## strings

the name of string come from the fact that it's a string of characters one after the other. The characters can be letters, numbers, symbols, and even spaces.

you can wrap your string with single quote or double quote
just make sure don't use one more than time in the same string like "I'm ali" ==> X
the most common is using the double quote

## white spaces

- Python doesn't care about extra empty lines in your programs, just like most languages.
- in general developers add white space for readability and to make the code look better

**there are certain circumstances where white space really matters to Python.**
and that's when it relates to its special key words.

## comments

Comments are notes to your future self and others to describe what your code does.

in python you can make a line comment by adding a hash mark before the line
'''
or block comment by adding 3 single quote
like that
'''

in IDE like Vs code you can comment a line by press ctrl + /

comments have no impact on your code

**Made With 💛 by @SABER_Mohamed**
