## functions

Function
is a block of code packaged together with a name.
and they are core feature of all programming language
they help us to avoid writing the same lines of code again and again.

**Example**

```
def say_hello():
    # def is a short for define
    # after def you put the name of the function followed by () and :
    # the function name must be unique and respect the language rules
    # after that put the indentation
    print("Hello, friends!")
# after making the function
# you must call the function (declare it) by writing its name
say_hello()
say_hello()
say_hello()
```

**Parameters**

Parameters - they allow functions to change their behavior based on some input.

Arguments - the name used for the values given to functions

**Examples**

```
def wash_car(amount_paid):
  # amount_paid   is the parameter
    if (amount_paid == 12):
        print("Wash with tri-color foam")
        print("Rinse twice")
        print("Dry with large blow dryer")
    if (amount_paid == 6):
        print("Wash with white foam")
        print("Rinse once")
        print("Air dry")
wash_car(6)
# 6 is the argument
```

**Return keyword**

```
def withdraw_money(current_balance, amount):
    if (current_balance >= amount):
        current_balance = current_balance - amount
        return current_balance
balance = withdraw_money(100, 80)
if (balance <= 50):
    print("We need to make a deposit")
else:
    print("Nothing to see here!")
def get_favorite_food():
    food = input("what's your favorite food?")
    return food
```

**functions in other languages**
java
Void hello() {
system.out.printLn("Hi, friend")
}

the Void word mean that the function doesn't return value
Unlike Python, Java requires that you always specify explicitly what the return type is of a function, even when that function isn't going to return a value.

Kotlin
fun CheckGrade(grade: string){
if (grade == "A")
printLn("You aced the class")
}

Unlike Python, we have to specify what the type of our parameter is when we define the function. We do that by placing a colon after the parameter's name

ruby
def calculate_check(hourly_rate)
hourly_rate \* 40
end

JavaScript
function isEven(number) {
if (number % 2 == 0)
return "yes";
else
return "No";
}

**Made With 💛 by @SABER_Mohamed**
