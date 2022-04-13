class Paladin extends Character {
  constructor(hp = 16, dmg = 3, mana = 160, shield, state, specialDmg, specialName, specialShield, specialHeal, specialBoost, specialCost, description ="Healing Lighting: inflige 4 dégâts et soigne de 5. Coût 40 mana.", name, img) {
    super(hp, dmg, mana, shield, state, specialName, specialDmg, specialShield, specialHeal, specialBoost, specialCost, description, name, img);
    this.state = "playing";
    this.specialDmg = 4;
    this.specialShield = 0;
    this.specialHeal = 5;
    this.specialBoost = 0;
    this.specialCost = 40;
    this.shield = 0;
    this.specialName = "Healing Lighting";
    this.name = "Ulder";
    this.img = "https://images.squarespace-cdn.com/content/v1/5b29c2dec258b4b6c5403167/1613452650828-076AST2NF9WV0VP1BIPC/healer_animated.gif";
  }
}


