// you create a constructor by simply defining a new method in the class with the same name as the class itself.

// unlike other methods, the constructor does not have a return type because you never call it yourself. 
// It gets called when you use the keyword new to instantiate a new object. 

//Inside the constructor, we set the initial state that we want these instance variables to have. 

//when we use that same line of code to instantiate the object, it will be initialized with those specific values that we want instead of the default values of Null and zero.
public class Spaceship {

  // instance variable 
  public string callSign;
  private int shieldStrength;

  // constructor methods 
  public Spaceship() {
    name = "the nameless ship"
    shieldStrength = 100;
  }

  // other methods omitted
}