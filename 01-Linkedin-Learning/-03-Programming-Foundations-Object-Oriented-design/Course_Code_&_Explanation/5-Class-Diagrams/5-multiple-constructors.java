
public class Spaceship {

  // instance variable 
  public string callSign;
  private int shieldStrength;

  // constructor methods 
  public Spaceship() {
    name = "the nameless ship"
    shieldStrength = 100;
  }

  // overload constructor 

  public Spaceship(string name) {
    callSign = name;
    shieldStrength = 200;
  }

  // other methods omitted
}

'''
Now when we instantiate a spaceship object, we have two ways of doing it.
We can use the word new with no parameters like before, which will call the first constructor method to give us the nameless ship, or, we can use the word new, along with a string parameter. 
When we include the string parameter, it's going to call the overloaded constructor, which sets those attributes to different values. 

Overloading multiple constructors gives us flexibility to pass in information when actually creating the object
'''