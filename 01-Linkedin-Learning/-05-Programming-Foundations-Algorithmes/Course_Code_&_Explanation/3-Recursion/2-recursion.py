ef countdown(x):
    if x == 0:
        print("Done!")
        return
    else:
        print(x, "...")
        countdown(x-1)


# this recursion store data as stacks
countdown(5)

''' 
the result will be 
5 ...
4 ...
3 ...
2 ...
1 ...
Done!
'''


def countdown(x):
    if x == 0:
        print("Done!")
        return
    else:
        print(x, "...")
        countdown(x-1)
        print("foo!")


countdown(5)

''' 
the result will be:
5 ...
4 ...
3 ...
2 ...
1 ...
Done! 
foo!
foo!
foo!
foo!
foo!
'''