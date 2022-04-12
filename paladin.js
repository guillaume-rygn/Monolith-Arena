class Paladin extends Character {
  constructor(hp = 16, dmg = 3, mana = 160, shield, state, specialDmg, specialName, specialShield, specialHeal, specialBoost, specialCost, description ="Healing Lighting: inflige 4 dégâts et soigne de 5. Coût 40 mana.", name, img) {
    super(hp, dmg, mana, shield, state, specialName, specialDmg, specialShield, specialHeal, specialBoost, specialCost, description, name, img);
    this.state = "playing";
    this.specialDmg = 3;
    this.specialShield = 0;
    this.specialHeal = 3;
    this.specialBoost = 40;
    this.specialCost = 0;
    this.shield = 0;
    this.specialName = "Healing Lighting";
    this.name = "Ulder";
    this.img = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9d70ef73-ee0b-4abf-b97a-3389eff38ed5/d9raxnv-babdac82-0d04-4fce-a52a-3baf46e4a01a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlkNzBlZjczLWVlMGItNGFiZi1iOTdhLTMzODllZmYzOGVkNVwvZDlyYXhudi1iYWJkYWM4Mi0wZDA0LTRmY2UtYTUyYS0zYmFmNDZlNGEwMWEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6itEV8bVfbg_oRpnILAicZHD8h-HjMFzR_pq8paGXhI";
  }
}


