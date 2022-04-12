class Fighter extends Character {
  constructor(hp = 12, dmg = 4, mana = 40, shield, state, specialDmg, specialName, specialShield, specialHeal, specialBoost, specialCost, description = "Dark Vision : inflige 5 dégâts. Jusqu'au prochain tour, chaque coup reçu sera réduit de 2. Coût 20 mana", name, img) {
      super(hp, dmg, mana, shield, state, specialName, specialDmg, specialShield, specialHeal, specialBoost, specialCost, description, name, img);
      this.state = "playing";
      this.specialDmg = 4;
      this.specialShield = 2;
      this.specialHeal = 0;
      this.specialBoost = 0;
      this.specialCost = 20;
      this.shield = 0;
      this.specialName = "Dark Vision";
      this.name = "Grace";
      this.img = "https://c.tenor.com/jP0qr_Ha7_MAAAAi/darksouls-knight.gif";
  }
}

