'''
Queues: 
  collection that supports adding and removing 
  follow FIFO  rule 
  first in first out 
  first item added is the first item out
  Queue Uses 
    Order processing 
    Messanging
'''

# try out the Python queue functions
from collections import deque

# create a new empty deque object that will function as a queue
queue = deque()

# add some items to the queue
queue.append(1)
queue.append(2)
queue.append(3)
queue.append(4)

# print the queue contents
print(queue)

# pop an item off the front of the queue
x = queue.popleft()
print(x)
print(queue)