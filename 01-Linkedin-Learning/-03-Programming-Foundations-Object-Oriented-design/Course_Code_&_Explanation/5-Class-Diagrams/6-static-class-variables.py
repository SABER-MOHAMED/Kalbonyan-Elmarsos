class Spaceship():

#Python doesn't use the static keyword. Instead, variables that are declared within a class, but outside of a method, are considered static or class variables
  # class variables 
  toughness = 0.8

  def __init__(self): 
    # instance variable 
    self.callSign = ""
    self._shieldStrength = 100

# When it comes to accessing instance level variables, we use the name of the object to get to them.

# in addition to static variables, we can also create static methods that exist at the class level. 