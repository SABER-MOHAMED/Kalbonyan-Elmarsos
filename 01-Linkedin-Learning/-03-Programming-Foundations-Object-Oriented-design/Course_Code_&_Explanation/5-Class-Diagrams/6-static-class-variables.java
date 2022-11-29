
public class Spaceship {

  // instance variable 
  public string callSign;
  private int shieldStrength;

  // class variables 
  public static float toughness;

  //in addition to static variables, we can also create static methods that exist at the class level. 


  // other methods omitted
}

// When it comes to accessing instance level variables, we use the name of the object to get to them.



public class Spaceship {

  // private static variable 
  public static float toughness;

  // public static methods
  public static increaseDifficulty(float t) {
    toughness += t;
  }

  //Since static methods exist at the class level, they can only access static variables.
}