# Using recursion to implement power and factorial functions

# * the power function

def power(num, pwr):
    # breaking condition: if we reach zero, return 1
    if pwr == 0:
        return 1
    else:
        return num * power(num, pwr-1)
        # 2 ^3
        # first  2  *  2^2
        # then 2 * 2 *2



# the factorial function
# the factorial of five     5! = 5*4*3*2*1
# 0! = 1


def factorial(num):
    if (num == 0):
        return 1
    else:
        return num * factorial(num-1)


print("{} to the power of {} is {}".format(5, 3, power(5, 3)))
print("{} to the power of {} is {}".format(1, 5, power(1, 5)))
print("{}! is {}".format(4, factorial(4)))
print("{}! is {}".format(0, factorial(0)))


def fFun(num):
    if num == 0:
        return 1
    else:
        return num * fFun(num-2)


fFun(8)
# will be 8 * 6 * 4 * 2 = 384


def countUp(x):
    if (x == 128):
        return
    else:
        countUp(x+1)
# the braking condition is (if x ==128)