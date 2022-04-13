class Assassin extends Character {
  constructor(hp = 6, dmg = 4, mana = 20, shield, state, specialDmg, specialName, specialShield, specialHeal, specialBoost, specialCost, description ="Shadow Hit : inflige 7 dégâts et permet de ne pas prendre de dégâts lors du prochain tour. Coût 20 mana.", name,img) {
    super(hp, dmg, mana, shield, state, specialName, specialDmg, specialShield, specialHeal, specialBoost, specialCost, description, name, img);
    this.state = "playing";
    this.specialDmg = 7;
    this.specialShield = 1000;
    this.specialHeal = 0;
    this.specialBoost = 0;
    this.specialCost = 20;
    this.shield = 0;
    this.specialName = "Shadow Hit";
    this.name = "Carl";
    this.img = "https://images.squarespace-cdn.com/content/v1/5b29c2dec258b4b6c5403167/1613452548858-KV0TTRBSPIV43UPASRDV/bard_animated.gif";
  }
}

