## conditional operators

Conditional or Boolean expression:
Any expression that breaks down to either true or false

Relation operators
operand1 (operator) operand2 => True/False

Equality operator
operand1 == operand2 => True/False

UnEquality operator
operand1 != operand2 => True/False

Greater than operator
operand1 > operand2 => True/False

Less than operator
operand1 < operand2 => True/False

Greater than or equal operator
operand1 >= operand2 => True/False

Less than or equal operator
operand1 <= operand2 => True/False

Notice that:
15 Not equal "15"

### conditional content

you can make decision in code by using if statement

If condition :
do work if the condition is true
End If

the indentation is important

block: statements that are grouped together

we can add one more condition by using else-if statement

```
name = input("Hi, what's your name? ")
age = int(input("How old are you? "))
if (age < 13):
    print("You're too young to register", name)
else:
    print("Feel free to join", name)
plant = "Irises"
if plant == "Cacti":
    print(plant, "don't need a lot of water")
else:
    print(plant, "love water")
print("Thanks!")
```

## conditions in other languages

java
if (5 > 6) {
system.out.printLn("nope")
}
else {
system.out.printLn("yes")
}

Ruby:
If 5 > 6
puts "nope"
else
puts "yes"
end

**Made With 💛 by @SABER_Mohamed**
