'''
stack: 
  collection that support push and pop operations
  stacks are great for programs where you need to reverse things
  Stacks are also good for keeping track of state as things are pushed on and popped off the stacks
  It follow the  LIFO  rule 
  last in first out
  The last item pushed is the first one popeped
  stacks Uses
    Expression processing 
    Backtracking: browser back stack, for example
'''


# try out the Python stack functions

# create a new empty stack
stack = []

# push items onto the stack
stack.append(1)
stack.append(2)
stack.append(3)
stack.append(4)

# print the stack contents
print(stack)

# pop an item off the stack
x = stack.pop()
print(x)
print(stack)