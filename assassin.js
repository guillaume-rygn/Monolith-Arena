class Assassin extends Character {
  constructor(hp = 6, dmg = 4, mana = 20, shield, state, specialDmg, specialName, specialShield, specialHeal, specialBoost, specialCost, description ="Shadow Hit : inflige 7 dégâts et permet de ne pas prendre de dégâts lors du prochain tour. Coût 20 mana.", name,img) {
    super(hp, dmg, mana, shield, state, specialName, specialDmg, specialShield, specialHeal, specialBoost, specialCost, description, name, img);
    this.state = "playing";
    this.specialDmg = 6;
    this.specialShield = 1000;
    this.specialHeal = 0;
    this.specialBoost = 0;
    this.specialCost = 20;
    this.shield = 0;
    this.specialName = "Shadow Hit";
    this.name = "Carl";
    this.img = "https://i.pinimg.com/originals/06/71/90/06719022f10299b76f31f933bff80483.gif";
  }
}

