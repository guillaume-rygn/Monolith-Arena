
  class Character {
    constructor(hp, dmg, mana, state, shield, specialDmg, specialName, specialShield, specialCost, specialHeal, specialBoost, description, name, img){
      this.hp = hp;
      this.dmg = dmg;
      this.mana = mana;
      this.state = state;
      this.shield = shield;
      this.specialDmg = specialDmg;
      this.specialName = specialName;
      this.specialShield = specialShield;
      this.specialCost = specialCost;
      this.specialHeal = specialHeal;
      this.specialBoost = specialBoost;
      this.description = description;
      this.name = name;
      this.img = img;
    }
  
    takeDamage(attacker, damage){
      if (damage >= this.shield){
        if(this.hp - (damage - this.shield) <= 0){
          this.hp = 0;
          this.state = "looser";
          attacker.mana += 20;
        } else {
          this.hp -= (damage - this.shield);
        }
      }
    }
  
    dealDamage = (victim) => {
      victim.takeDamage(this, this.dmg);
    }
  
    specialAttack = (victim) => {
      if (this.mana >= this.specialCost){
        this.mana -= this.specialCost;
        if (this.specialShield > 0){
          this.shield += this.specialShield;
        }
        if (this.specialDmg > 0){
          victim.takeDamage(this, this.specialDmg);
        }
        if (this.specialHeal > 0){

          this.hp += this.specialHeal;

        }
        if (this.specialBoost > 0){
          this.dmg += this.specialBoost;
          if (this.hp > 1) {
            this.hp -= this.specialBoost;
          } else {
            this.hp = 0;
            this.state = "looser";
          }
        }
      } else {
        this.dealDamage(victim);
      }
    }
  }












