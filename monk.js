class Monk extends Character {
  constructor(hp = 8, dmg = 2, mana = 200, shield, state, specialDmg, specialName, specialShield, specialHeal, specialBoost, specialCost, description = "Heal : rend 8 PV. Coût 25 mana.", name, img) {
    super(hp, dmg, mana, shield, state, specialName, specialDmg, specialShield, specialHeal, specialBoost, specialCost, description, name, img);
    this.state = "playing";
    this.specialDmg = 0;
    this.specialShield = 0;
    this.specialHeal = 8;
    this.specialBoost = 0;
    this.specialCost = 25;
    this.shield = 0;
    this.specialName = "Heal";
    this.name = "Moana";
    this.img = "https://images.squarespace-cdn.com/content/v1/5b29c2dec258b4b6c5403167/1613452599458-WQC0GPNYUOE1BBMS4JL7/shaman_animated.gif";
  }
}


