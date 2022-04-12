class Game{
  constructor(choice, enemystat1, enemystat2, enemystat3, enemystat4 ,turnLeft = 10){
    this.choice = choice;
    this.turnLeft = turnLeft;
    this.enemy1 = enemystat1;
    this.enemy2 = enemystat2;
    this.enemy3 = enemystat3;
    this.enemy4 = enemystat4;

    console.log(this.enemy2);
    console.log(this.choice);
    console.log(this.turnLeft);
    round.textContent = this.turnLeft;
    enemy1.style.display="block";
    enemy2.style.display="block";
    enemy3.style.display="block";
    enemy4.style.display="block";
    this.round();

  }

  round(){
    this.game();
  }

  final(){
    mycharacter.style.left ="40%"; 
    mycharacter.style.transform ="translateX(-50%, -50%)"; 
    mycharacter.style.bottom="0";
    enemy1.style.display="none";
    enemy2.style.display="none";
    enemy3.style.display="none";
    enemy4.style.display="none";

    eventinfo.style.display="none";
    
    if (this.choice.hp <= 0){
      winner.textContent="Votre Champion est mort"
    } else{
      crowd.pause();
      arena.pause();
      victory.play();
      victory.loop=true;
    }
    final.style.display="block";

    replay.addEventListener("click", function(){
      location.reload();
    })
  }

  game(){
    console.log(this.turnLeft)
    enemy1.addEventListener("click", e => {
      enemy2.style.border ="none";      
      enemy3.style.border ="none";      
      enemy4.style.border ="none";      
      mycharacter.style.border ="none"; 
      enemy1.style.border = "3px solid white";
      eventinfo.style.display="block";   
      enemyhp.textContent = this.enemy1.hp;
      enemymana.textContent = this.enemy1.mana;
      enemydamage.textContent = this.enemy1.dmg;
      enemyspecial.textContent = this.enemy1.description;
      attack1.style.display = "inline-block";
      attack2.style.display = "none";
      attack3.style.display = "none";
      attack4.style.display = "none";
      attackspecialem1.style.display = "inline-block";
      attackspecialem2.style.display = "none";
      attackspecialem3.style.display = "none";
      attackspecialem4.style.display = "none";
    
      attack1.addEventListener("click", e => {
        if (this.turnLeft > 0 && this.enemy1.hp > 0){
          this.choice.dealDamage(this.enemy1);

          enemy1.style.border ="none";      
          impact1.style.display = "block";
          setTimeout(function(){
            impact1.style.display = "none";
            enemy1.style.border = "3px solid white";  
          }, 1100);

          if(this.enemy1.hp <= 0){
            enemy1.style.display ="none";
            eventinfo.style.display="none";   
          } else {
            enemyhp.textContent = this.enemy1.hp;
          }  
          this.turnLeft --;
          round.textContent = this.turnLeft;
          if(this.turnLeft == 0 && this.choice.hp > 0){
            this.final();
          }
          if(this.enemy1.hp == 0 && this.enemy2.hp == 0 && this.enemy3.hp == 0 && this.enemy4.hp == 0){
            this.final();
          }
          if(this.choice.hp == 0){
            this.final();
          }
        }
      });
    
    });
    
    enemy2.addEventListener("click", e => {
      enemy1.style.border ="none";
      enemy3.style.border ="none";      
      enemy4.style.border ="none";      
      mycharacter.style.border ="none"; 
      enemy2.style.border = "3px solid white";   
      eventinfo.style.display="block";  
      enemyhp.textContent = this.enemy2.hp;
      enemymana.textContent = this.enemy2.mana;
      enemydamage.textContent = this.enemy2.dmg;
      enemyspecial.textContent = this.enemy2.description;
      attack1.style.display = "none";
      attack2.style.display = "inline-block";
      attack3.style.display = "none";
      attack4.style.display = "none";   
      attackspecialem1.style.display = "none";
      attackspecialem2.style.display = "inline-block";
      attackspecialem3.style.display = "none";
      attackspecialem4.style.display = "none";

      attack2.addEventListener("click", e => {
        if (this.turnLeft > 0 && this.enemy2.hp > 0){
          this.choice.dealDamage(this.enemy2);


          enemy2.style.border ="none";      
          impact2.style.display = "block";
          setTimeout(function(){
            impact2.style.display = "none";
            enemy2.style.border = "3px solid white";  
          }, 1100);

          if(this.enemy2.hp <= 0){
            enemy2.style.display ="none";
            eventinfo.style.display="none";   
          } else {
            enemyhp.textContent = this.enemy2.hp;
          }  
          this.turnLeft --;
          round.textContent = this.turnLeft;
          if(this.turnLeft == 0 && this.choice.hp > 0){
            this.final();
          }
          if(this.enemy1.hp == 0 && this.enemy2.hp == 0 && this.enemy3.hp == 0 && this.enemy4.hp == 0){
            this.final();
          }
          if(this.choice.hp == 0){
            this.final();
          }
        }
      });
    });
    
    enemy3.addEventListener("click", e => {
      enemy1.style.border ="none";
      enemy2.style.border ="none";      
      enemy4.style.border ="none";      
      mycharacter.style.border ="none"; 
      enemy3.style.border = "3px solid white";   
      eventinfo.style.display="block";   
      enemyhp.textContent = this.enemy3.hp;
      enemymana.textContent = this.enemy3.mana;
      enemydamage.textContent = this.enemy3.dmg;
      enemyspecial.textContent = this.enemy3.description;
      attack1.style.display = "none";
      attack2.style.display = "none";
      attack3.style.display = "inline-block";
      attack4.style.display = "none";
      attackspecialem1.style.display = "none";
      attackspecialem2.style.display = "none";
      attackspecialem3.style.display = "inline-block";
      attackspecialem4.style.display = "none";
    
      attack3.addEventListener("click", e => {
        if (this.turnLeft > 0 && this.enemy3.hp > 0){
          this.choice.dealDamage(this.enemy3);


          enemy3.style.border ="none";      
          impact3.style.display = "block";
          setTimeout(function(){
            impact3.style.display = "none";
            enemy3.style.border = "3px solid white";  
          }, 1100);

          if(this.enemy3.hp <= 0){
            enemy3.style.display ="none";
            eventinfo.style.display="none";   
          } else {
            enemyhp.textContent = this.enemy3.hp;
          }  
          this.turnLeft --;
          round.textContent = this.turnLeft;
          if(this.turnLeft == 0 && this.choice.hp > 0){
            this.final();
          }
          if(this.enemy1.hp == 0 && this.enemy2.hp == 0 && this.enemy3.hp == 0 && this.enemy4.hp == 0){
            this.final();
          }
          if(this.choice.hp == 0){
            this.final();
          }
        }
      });
    });
    
    enemy4.addEventListener("click", e => {
      enemy1.style.border ="none";
      enemy2.style.border ="none";      
      enemy3.style.border ="none";      
      mycharacter.style.border ="none"; 
      enemy4.style.border = "3px solid white";  
      eventinfo.style.display="block";   
      enemyhp.textContent = this.enemy4.hp;
      enemymana.textContent = this.enemy4.mana;
      enemydamage.textContent = this.enemy4.dmg;
      enemyspecial.textContent = this.enemy4.description;
      attack1.style.display = "none";
      attack2.style.display = "none";
      attack3.style.display = "none";
      attack4.style.display = "inline-block";
      attackspecialem1.style.display = "none";
      attackspecialem2.style.display = "none";
      attackspecialem3.style.display = "none";
      attackspecialem4.style.display = "inline-block";

    
      attack4.addEventListener("click", e => {
        if (this.turnLeft > 0 && this.enemy4.hp > 0){
          this.choice.dealDamage(this.enemy4);


          enemy4.style.border ="none";      
          impact4.style.display = "block";
          setTimeout(function(){
            impact4.style.display = "none";
            enemy4.style.border = "3px solid white";  
          }, 1100);

          if(this.enemy4.hp <= 0){
            enemy4.style.display ="none";
            eventinfo.style.display="none";   
          } else {
            enemyhp.textContent = this.enemy4.hp;
          }  
          this.turnLeft --;
          round.textContent = this.turnLeft;
          if(this.turnLeft == 0 && this.choice.hp > 0){
            this.final();
          }
          if(this.enemy1.hp == 0 && this.enemy2.hp == 0 && this.enemy3.hp == 0 && this.enemy4.hp == 0){
            this.final();
          }
          if(this.choice.hp == 0){
            this.final();
          }
        }
      });
    });


  }
}





