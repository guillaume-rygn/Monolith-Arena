class Fighter extends Character {
  constructor(hp = 12, dmg = 4, mana = 40, shield, state, specialDmg, specialName, specialShield, specialHeal, specialBoost, specialCost, description = "Dark Vision : inflige 5 dégâts. Jusqu'au prochain tour, chaque coup reçu sera réduit de 2. Coût 20 mana", name, img) {
      super(hp, dmg, mana, shield, state, specialName, specialDmg, specialShield, specialHeal, specialBoost, specialCost, description, name, img);
      this.state = "playing";
      this.specialDmg = 5;
      this.specialShield = 2;
      this.specialHeal = 0;
      this.specialBoost = 0;
      this.specialCost = 20;
      this.shield = 0;
      this.specialName = "Dark Vision";
      this.name = "Grace";
      this.img = "https://images.squarespace-cdn.com/content/v1/5b29c2dec258b4b6c5403167/1613452369548-DPF8PZPYJMHQIZOI7BX4/paladin_animated.gif";
  }
}

