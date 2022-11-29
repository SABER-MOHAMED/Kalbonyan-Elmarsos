'''
Hash tables or dictionaries:
  associative arrays
  Advantages:
    every item have a key 
    key-to-value mapping are unique
    Keys are mapped to data values by using a hash to compute an index value.
    hash tables are typically are usually more efficient
  Cons: 
    for small datasets, arrays are usually more efficient
    hash tables don't order entries in predictable way 
'''

# demonstrate hashtable usage


# create a hashtable all at once
items1 = dict({"key1": 1, "key2": 2, "key3": "three"})
print(items1)

# or


convert_month = {
    "Jan": "january",
    "Feb": "february",
    "Mar": "march",
    4: " april",
    "May": 5,
}
# to access an item in the hash table
print(convert_month["Feb"])

# other way that allow you to put a message if the item is not exist
print(convert_month.get("ali", "the value is not exist"))

# create a hashtable progressively
items2 = {}
items2["key1"] = 1
items2["key2"] = 2
items2["key3"] = 3
print(items2)

# try to access a nonexistent key    ==>   O(1)  constant time
print(items1["key6"])


# replace an item
items2["key2"] = "two"
print(items2)

# iterate the keys and values in the dictionary
for key, value in items2.items():
    print("key: ", key, " value: ", value)