'''
there are many kinds of algorithm that you will find in any programming language 
Search algorithm 
  find specific data in a structure 
  (for example, a substrign within a string)
Sorting algorithm 
  take a set of dataset and apply a sort order to it 
computational algorithm
  Given one set of data, calculate another
  (is a given number prime?)
collection algorithm 
  working with collections of data 
  (count specific items, navigate among data elements, filter our unwanted data. etc)
'''

# * simple algorithm

# ? what will it do ?

# Todo: find the greatest common denominator (GCD) of two numbers

'''
Notice:
  the greatest common denominator of two numbers is
  the largest integer that divides both numbers without leaving a remainder.
  EX: 
  the GCD of 20 and 8 is 4 
  (because 8 / 4 is 2; and 20 / 4 is 5)
How the algorithm works ?
  1- for two integers a and b, where a > b, divide a by b.
  2- If the remainder, r, is 0, then stop: GCD is b.
  3- otherwise, set a to b, b to r, and repeat step one until r is 0.
Euclid's Algorithm:
the  GCD of (20,8) 
---------------------------
  step  |  a  |  b  |  r  |
---------------------------
  1     | 20  |  8  |  4  |
---------------------------
  2     |  8  |  4  |  0  |
---------------------------
'''


def gcd(a, b):
    while (b != 0):
        t = a       # set aside the value of a
        a = b       # set a equal to b
        b = t % b   # divide t (which is a) by b

    return a


# try out the function with a few examples
print(gcd(60, 96))  # should be 12
print(gcd(20, 8))   # should be 4
print(24 % 12)

'''
Now  let's try to figure out how this algorithm worked in the followed example 
print(gcd(60, 96))
--state =>   a = 60 ,  b = 96 
  1- assign t to a   meaning t = 60
  2- assign a to b   meaning a = 96 
  3- assign b to the reminder of divide t by b 
  meaning  b = 60 % 96  =>  60 
--state a = 96 , b = 60 
  1- assign t to a   meaning t = 96
  2- assign a to b   meaning a = 60 
  3- assign b to the reminder of divide t by b 
  meaning  b = 96 % 60  =>  36 
--state =>  a = 60 , b = 36 
  1- assign t to a   meaning t = 60
  2- assign a to b   meaning a = 36 
  3- assign b to the reminder of divide t by b 
  meaning  b = 60 % 36  =>  24
--state => a= 36 , b = 24 
  1- assign t to a   meaning t = 36
  2- assign a to b   meaning a = 24 
  3- assign b to the reminder of divide t by b 
  meaning  b = 36 % 24  =>  12 
--state =>  a = 24 , b = 12 
  1- assign t to a   meaning t = 24
  2- assign a to b   meaning a = 12 
  3- assign b to the reminder of divide t by b 
  meaning  b = 24 % 12  =>  0 
--state => a = 12 , b = 0 
Now we return the a   which is 12 
'''

**Walahi made with ❤ by @SABER**