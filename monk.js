class Monk extends Character {
  constructor(hp = 8, dmg = 2, mana = 200, shield, state, specialDmg, specialName, specialShield, specialHeal, specialBoost, specialCost, description = "Heal : rend 8 PV. Coût 25 mana.", name, img) {
    super(hp, dmg, mana, shield, state, specialName, specialDmg, specialShield, specialHeal, specialBoost, specialCost, description, name, img);
    this.state = "playing";
    this.specialDmg = 0;
    this.specialShield = 0;
    this.specialHeal = 5;
    this.specialBoost = 0;
    this.specialCost = 25;
    this.shield = 0;
    this.specialName = "Heal";
    this.name = "Moana";
    this.img = "https://media2.giphy.com/media/45dQHUNEdoFFVtWJAE/giphy.gif?cid=6c09b95247c122eba9579ccc11ce5456726405b40cd2cba7&rid=giphy.gif&ct=s";
  }
}


