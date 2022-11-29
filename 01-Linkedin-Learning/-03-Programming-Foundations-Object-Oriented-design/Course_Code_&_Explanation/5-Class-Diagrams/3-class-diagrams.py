'''
.           space ship             .
___________________________________
+ callSign: String
- shieldStrength: integer
___________________________________
+ fireMissile(): string
+ reduceShield(integer)
'''

class Spaceship():
  def __init__(self):

    # instance variables 
    self.callSign = ""
    self._shieldStrength = 100 

    # methods 

    def fireMissile(self):
      return "pew!"

    def reduceShield(self, amount):
      self.shieldStrength -= amount


# python doesn't really differentiate between public and private variables. 
# It puts trust in the hands of the programmer not to do anything foolish. 
# So we've added an underscore to the shield strength variable name to indicate that it should be treated as if it were private.