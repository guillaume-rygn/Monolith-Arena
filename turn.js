class Turn{
  constructor(player, victim, attackType){
    this.player = player;
    this.victim = victim;
    this.attackType = attackType; 
    this.attack();
  }

  attack(){
    if(this.attackType == "attack"){
      if (this.victim.hp > 0){
        this.player.dealDamage(this.victim);
        enemyaction.insertAdjacentHTML('beforeend', `<p>C'est au tour de ${this.player.name} qui attaque ${this.victim.name}</p>`);
        enemyaction.insertAdjacentHTML('beforeend', `<p>${this.victim.name} n'a plus que ${this.victim.hp} hp</p>`);
        if(this.victim.hp <=0){
          enemyaction.insertAdjacentHTML('beforeend', `<h3 style="color:color: rgb(100, 5, 5);">${this.victim.name} est mort</h3>`);
        }
        enemyaction.insertAdjacentHTML('beforeend', `<p>----------------------</p>`);
      }
    }

    if(this.attackType == "special"){
      if (this.victim.hp > 0){
        this.player.specialAttack(this.victim);
        enemyaction.insertAdjacentHTML('beforeend', `<p>C'est au tour de ${this.player.name} qui lance une super attaque ${this.victim.name}</p>`);
        enemyaction.insertAdjacentHTML('beforeend', `<p>${this.victim.name} n'a plus que ${this.victim.hp} hp</p>`);
        if(this.victim.hp <=0){
          enemyaction.insertAdjacentHTML('beforeend', `<h3 style="color:color: rgb(100, 5, 5);">${this.victim.name} est mort</h3>`);
        }
        enemyaction.insertAdjacentHTML('beforeend', `<p>----------------------</p>`);
      }
    }


  }
}


