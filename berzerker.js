class Berzerker extends Character {
  constructor(hp = 8, dmg = 4, mana = 0, shield, state, specialDmg, specialName, specialShield, specialHeal, specialBoost = 1, specialCost = 0, description="Rage : donne +1 pour ses attaques pour tout le reste de la partie mais lui enlevant 1 hp. Peut être utiliser plusieurs fois. Coût 0 mana.", name, img) {
    super(hp, dmg, mana, shield, state, specialName, specialDmg, specialShield, specialHeal, specialBoost, specialCost, description, name, img);
    this.state = "playing";
    this.specialDmg = 0;
    this.specialShield = 0;
    this.specialHeal = 0;
    this.specialBoost = 1;
    this.specialCost = 0;
    this.shield = 0;
    this.specialName = "Rage";
    this.name = "Draven";
    this.img = "https://images.squarespace-cdn.com/content/v1/5b29c2dec258b4b6c5403167/1613451475221-KBW107DDS4YDS6AGZ2XC/smith_animated.gif";
  }
}

