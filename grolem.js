class Grolem extends Character {
  constructor(hp = 10, dmg = 4, mana = 20, shield, state, specialDmg, specialName, specialShield, specialHeal, specialBoost, specialCost, description ="Iceball : inflige 6 dégâts. Coût 20 mana.", name,img) {
    super(hp, dmg, mana, shield, state, specialName, specialDmg, specialShield, specialHeal, specialBoost, specialCost, description, name, img);
    this.state = "playing";
    this.specialDmg = 6;
    this.specialShield = 0;
    this.specialHeal = 0;
    this.specialBoost = 0;
    this.specialCost = 20;
    this.shield = 0;
    this.specialName = "Iceball";
    this.name = "Görn";
    this.img = "https://images.squarespace-cdn.com/content/v1/5b29c2dec258b4b6c5403167/1613450241764-N8M7G2IIEJFTMQZFOLQW/golem_animated.gif";
  }
}

