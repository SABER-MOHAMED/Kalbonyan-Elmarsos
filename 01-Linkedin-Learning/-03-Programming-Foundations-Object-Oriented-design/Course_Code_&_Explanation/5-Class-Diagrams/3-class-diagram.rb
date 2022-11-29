# .           space ship             .
# ___________________________________
# + callSign: String
# - shieldStrength: integer
# ___________________________________
# + fireMissile(): string
# + reduceShield(integer)

class Spaceship 

    # instance variables 
    @call_sign
    @shield_strength
  
    # methods
    
    def fire_missile
      return "pew!"
    end
  
    def reduce_shield(amount)
      shield_strength -= amount
    end
  end