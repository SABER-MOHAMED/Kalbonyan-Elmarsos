'''
array is:
  a collection of elements, where each item is identified by an index or key
  data structure is a collection with defined way of accessing and sorting items
  
  every element in the array have an unique index 
  the index start from 0 
multidimensional arrays 
  2d array is an array and every element in the array is an array itself 
'''
#! the data type list in python is actually an array

array = [1, 2, 3, 4, 5]
# to access any element in the array we write the array name followed by the index of the element
print(list[0])


the_2D_array = [
    [1, 2, 3]
    [4, 5, 6]
    [7, 8, 9]
]
# that is how  we access an element in 2d array
print(the_2D_list[0][2])
# ==> 3

'''
Array operations 
  calculate item index: 
    O(1)
    consistent duration of algorithms in same time (or space) 
    regardless of size of the input
  insert or delete items at beginning:
    O(n)
  insert or delete items in middle:
    O(n)
    because the remaining items must be moved to their new memory locations. 
  insert or delete item at end: 
  O(1)
'''