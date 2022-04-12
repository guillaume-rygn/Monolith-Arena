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
    this.img = "http://25.media.tumblr.com/46bb60c670bf8d5b4dac7c2ef5f8807a/tumblr_mk3sxtmUEm1rt6jibo1_250.gif";
  }
}

