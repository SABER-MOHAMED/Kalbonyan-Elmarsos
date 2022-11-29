
// .           space ship             .
// ___________________________________
// + callSign: String
// - shieldStrength: integer
// ___________________________________
// + fireMissile(): string
// + reduceShield(integer)

public class Spaceship {

  // instance variables
  public string callSign;
  private int shieldStrength;

  //methods
  public string fireMissile() {
    return "pew!";
  }
  public void reduceShield(int amount) {
    shieldStrength -= amount
  }
}

// this is similar to C# 