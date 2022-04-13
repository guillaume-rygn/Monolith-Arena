class Wizard extends Character {
  constructor(hp = 10, dmg = 2, mana = 50, shield, state, specialDmg, specialName, specialShield, specialHeal, specialBoost, specialCost, description = "Fireball : inflige 7 points de dégât. Coût 25 mana.", name, img) {
    super(hp, dmg, mana, shield, state, specialName, specialDmg, specialShield, specialHeal, specialBoost, specialCost, description, name, img);
    this.state = "playing";
    this.specialDmg = 7;
    this.specialShield = 0;
    this.specialHeal = 0;
    this.specialBoost = 0;
    this.specialCost = 25;
    this.shield = 0;
    this.specialName = "Fireball";
    this.name = "Yennefer";
    this.img = "https://images.squarespace-cdn.com/content/v1/5b29c2dec258b4b6c5403167/1613452484852-32NRRB3J0B80YQT2PJ3E/mage_animated.gif";
  }
}
