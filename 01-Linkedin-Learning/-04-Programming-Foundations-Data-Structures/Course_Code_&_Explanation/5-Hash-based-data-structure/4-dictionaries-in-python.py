# Key: State
# Value: Capital

statesToCapitals = {}

statesToCapitals["Texas"] = "Austin"
statesToCapitals["New York"] = "Albany"

print(statesToCapitals["New York"])




primaryColors = frozenset(["red", "blue", "yellow"])

color = "green"

if color.lower() in primaryColors:
    print(color + " is a primary color")
else:
    print(color + " is not a primary color")

letters = set(['a', 'b'])
letters.add('c')
print(letters)