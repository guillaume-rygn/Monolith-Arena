class Game{
  constructor(choice, enemystat1, enemystat2, enemystat3, enemystat4 ,turnLeft = 10){
    this.choice = choice;
    this.turnLeft = turnLeft;
    this.enemy1 = enemystat1;
    this.enemy2 = enemystat2;
    this.enemy3 = enemystat3;
    this.enemy4 = enemystat4;
    round.textContent = this.turnLeft;
    mychampion.textContent = this.choice.name;
    enemy1.style.display="block";
    enemy2.style.display="block";
    enemy3.style.display="block";
    enemy4.style.display="block";

    this.round();

  }

  round(){
    this.game();
  }

  enemyTurn(){
    eventinfo.style.display="none";
    firstaction.style.display="none";

    setTimeout(e =>{

      enemyorderArray.push(this.enemy1, this.enemy2, this.enemy3, this.enemy4);
      player1 = enemyorderArray[Math.floor(Math.random()*enemyorderArray.length)];
      player2 = enemyorderArray[Math.floor(Math.random()*enemyorderArray.length)];
      player3 = enemyorderArray[Math.floor(Math.random()*enemyorderArray.length)];
      player4 = enemyorderArray[Math.floor(Math.random()*enemyorderArray.length)];

      order = [];

      while (player2 == player1){
        player2 = enemyorderArray[Math.floor(Math.random()*enemyorderArray.length)];
      }
      while (player3 == player1 || player3 == player2){
        player3 = enemyorderArray[Math.floor(Math.random()*enemyorderArray.length)];
      }
      while (player4 == player1 || player4 == player2 || player4 == player3){
        player4 = enemyorderArray[Math.floor(Math.random()*enemyorderArray.length)];
      }
      order = [player1, player2, player3, player4];

      
      allPlayer = [this.choice, this.enemy1, this.enemy2, this.enemy3, this.enemy4];

      target1= allPlayer[Math.floor(Math.random()*allPlayer.length)];
      target2= allPlayer[Math.floor(Math.random()*allPlayer.length)];
      target3= allPlayer[Math.floor(Math.random()*allPlayer.length)];
      target4= allPlayer[Math.floor(Math.random()*allPlayer.length)];

      while (target1 == player1 || target1.hp <= 0){
        target1= allPlayer[Math.floor(Math.random()*allPlayer.length)];
      }
      while (target2 == player2 || target2.hp <= 0){
        target2= allPlayer[Math.floor(Math.random()*allPlayer.length)];
      }
      while (target3 == player3 || target3.hp <= 0){
        target3= allPlayer[Math.floor(Math.random()*allPlayer.length)];
      }
      while (target4 == player4 || target4.hp <= 0){
        target4= allPlayer[Math.floor(Math.random()*allPlayer.length)];
      }


      eventinfo.style.display="none";
      enemy1.style.border ="none";
      enemy2.style.border ="none";
      enemy3.style.border ="none";
      enemy4.style.border ="none";

      if(player1.hp > 0){
        if(player1.mana > player1.specialCost){
          new Turn(player1, target1,"special");
        } else {
          new Turn(player1, target1,"attack");
        }
        this.check();
      }
        
      if(player2.hp > 0){
        if(player2.mana > player2.specialCost){
          new Turn(player2, target2,"special");
        } else {
          new Turn(player2, target2,"attack");
        }
        this.check();
      }

      if(player3.hp > 0){
        if(player3.mana > player3.specialCost){
          new Turn(player3, target3,"special");
        } else {
          new Turn(player3, target3,"attack");
        }
        this.check();
      }

      if(player4.hp > 0){
        if(player4.mana > player4.specialCost){
          new Turn(player4, target4,"special");
        } else {
          new Turn(player4, target4,"attack");
        }
        this.check();
      }
      enemyaction.style.bottom="0";
      darkscreen.style.display="block";
    }, 1300);
    


  }


  final(){
    mycharacter.style.left ="40%"; 
    mycharacter.style.transform ="translateX(-50%, -50%)"; 
    mycharacter.style.bottom="0";
    enemy1.style.display="none";
    enemy2.style.display="none";
    enemy3.style.display="none";
    enemy4.style.display="none";
    
    if (this.choice.hp <= 0){
      stop.style.display ="none";
      eventinfo.style.display="none";
      crowd.pause();
      arena.pause();
      defeat.play();
      defeat.loop=true;
      winner.textContent="Votre Champion est mort"
    } else{
      victoryconfetti.style.display="block";
      mycharacter.style.zIndex="197";
      stop.style.display ="none";
      eventinfo.style.display="none";
      crowd.pause();
      arena.pause();
      victory.play();
      victory.loop=true;
    }
    final.style.display="block";
    crowd.pause();
    arena.pause();

    replay.addEventListener("click", function(){
      swordaudio.play();
      location.reload();
    })
  }


  check(){
    eventinfo.style.display= "none";
    myhp.textContent = this.choice.hp;
    mydamage.textContent = this.choice.dmg;
    mymana.textContent = this.choice.mana;

    this.choice.specialShield = 0;

    if(this.enemy1.hp <= 0){
      enemy1.style.display ="none";     
      this.enemy1.state = "looser";
    }

    if(this.enemy2.hp <= 0){
      enemy2.style.display ="none";     
      this.enemy2.state = "looser";
    }

    if(this.enemy3.hp <= 0){
      enemy3.style.display ="none";     
      this.enemy3.state = "looser";
    }

    if(this.enemy4.hp <= 0){
      enemy4.style.display ="none";     
      this.enemy4.state = "looser";
    }

    if(this.choice.hp <= 0){
      this.final();
    }

    if(this.enemy1.state == "looser" && this.enemy2.state == "looser" && this.enemy3.state == "looser" && this.enemy4.state == "looser"){
      this.final();
    }
  }

  game(){ 

    actionenemy.addEventListener("click", e=>{
      swordaudio.play();
      enemyaction.style.bottom="0";
      darkscreen.style.display="block";
    })

    darkscreen.addEventListener("click", e=>{
      this.check();
      swordaudio.play();
      enemyaction.style.bottom="-50vh";
      darkscreen.style.display="none";
    })


    enemy1.addEventListener("click", e => {
      this.check();
      enemy2.style.border ="none";      
      enemy3.style.border ="none";      
      enemy4.style.border ="none";      
      mycharacter.style.border ="none"; 
      enemy1.style.border = "3px solid white";
      eventinfo.style.display="block";  
      mytarget.textContent = this.enemy1.name; 
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
          mycharacter.style.transform="translatex:50px";
          swordaudio.play();
          this.choice.dealDamage(this.enemy1);


          enemy1.style.border ="none";      
          impact1.style.display = "block";
          setTimeout(function(){
            impact1.style.display = "none";
          }, 1100);

          if(this.enemy1.hp <= 0){
            enemy1.style.display ="none";
            eventinfo.style.display="none";  
            mymana.textContent = this.choice.mana;
            upmana.style.display="block";
            setTimeout(function(){
              upmana.style.display="none"; 
            }, 1100);
          } else {
            enemyhp.textContent = this.enemy1.hp;
          }  
          this.turnLeft --;
          round.textContent = this.turnLeft;
          if(this.turnLeft == 0 && this.choice.hp > 0){
            eventinfo.style.display="none";
            this.final();
          }
          if(this.enemy1.hp <= 0 && this.enemy2.hp <= 0 && this.enemy3.hp <= 0 && this.enemy4.hp <= 0){
            eventinfo.style.display="none";
            this.final();
          }
          if(this.choice.hp <= 0){
            eventinfo.style.display="none";
            this.final();
          }
          enemyaction.insertAdjacentHTML('beforeend', `<p>C'est au tour de ${this.choice.name} qui attaque ${this.enemy1.name}</p>`);
          enemyaction.insertAdjacentHTML('beforeend', `<p>${this.enemy1.name} n'a plus que ${this.enemy1.hp} hp</p>`);
          if(this.enemy1.hp <=0){
            enemyaction.insertAdjacentHTML('beforeend', `<h3 style="color:color: rgb(100, 5, 5);">${this.enemy1.name} est mort</h3>`);
          }
          enemyaction.insertAdjacentHTML('beforeend', `<p>----------------------</p>`);
          this.enemyTurn();
        }
      });

      attackspecialem1.addEventListener("click", e=>{
        if (this.turnLeft > 0 && this.enemy1.hp > 0 && this.choice.mana >= this.choice.specialCost){
          specialsound.play();
          this.choice.specialAttack(this.enemy1);

          enemy1.style.border ="none";   
          if (this.choice.specialDmg != 0){
            special1.style.display = "block";
            setTimeout(function(){
              special1.style.display = "none";
            }, 1300);
          }   
          if(this.choice.specialHeal != 0){
            uplife.style.display = "block";
            setTimeout(function(){
              uplife.style.display = "none";
            }, 1300);
          }
          

          if(this.enemy1.hp <= 0){
            if(this.enemy2.state == "looser" && this.enemy3.state == "looser" && this.enemy4.state == "looser"){

            }else{
              enemy1.style.display ="none";
              eventinfo.style.display="none"; 
              this.enemy1.state = "looser";
              mymana.textContent = this.choice.mana;
              upmana.style.display="block";
              setTimeout(function(){
                upmana.style.display="none"; 
              }, 1100);
            }
          } else {
            enemyhp.textContent = this.enemy1.hp;
          }  
          enemyaction.insertAdjacentHTML('beforeend', `<p>C'est au tour de ${this.choice.name} qui lance une super attaque ${this.enemy1.name}</p>`);
          enemyaction.insertAdjacentHTML('beforeend', `<p>${this.enemy1.name} n'a plus que ${this.enemy1.hp} hp</p>`);
          if(this.enemy1.hp <=0){
            enemyaction.insertAdjacentHTML('beforeend', `<h3 style="color:color: rgb(100, 5, 5);">${this.enemy1.name} est mort</h3>`);
          }
          enemyaction.insertAdjacentHTML('beforeend', `<p>----------------------</p>`);
          this.turnLeft --;
          round.textContent = this.turnLeft;
          if(this.turnLeft == 0 && this.choice.hp > 0){
            eventinfo.style.display="none";
            this.final();
          }
          if(this.enemy1.hp <= 0 && this.enemy2.hp <= 0 && this.enemy3.hp <= 0 && this.enemy4.hp <= 0){
            eventinfo.style.display="none";
            this.final();
          }
          if(this.choice.hp <= 0){
            eventinfo.style.display="none";
            this.final();
          }
          if(this.choice.mana < this.choice.specialCost){
            attackspecialem1.style.display = "none";
          };
          this.enemyTurn();
        } else {
          attackspecialem1.style.display = "none";
        }
      });

      if(this.choice.mana < this.choice.specialCost){
        attackspecialem1.style.display = "none";
      };
    
    });
    
    enemy2.addEventListener("click", e => {
      this.check();
      enemy1.style.border ="none";
      enemy3.style.border ="none";      
      enemy4.style.border ="none";      
      mycharacter.style.border ="none"; 
      enemy2.style.border = "3px solid white";   
      eventinfo.style.display="block";  
      mytarget.textContent = this.enemy2.name; 
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
          swordaudio.play();
          this.choice.dealDamage(this.enemy2);


          enemy2.style.border ="none";      
          impact2.style.display = "block";
          setTimeout(function(){
            impact2.style.display = "none";
          }, 1100);

          if(this.enemy2.hp <= 0){
            enemy2.style.display ="none";
            eventinfo.style.display="none";  
            mymana.textContent = this.choice.mana;
            upmana.style.display="block";
            setTimeout(function(){
              upmana.style.display="none"; 
            }, 1100);
          } else {
            enemyhp.textContent = this.enemy2.hp;
          }  
          this.turnLeft --;
          round.textContent = this.turnLeft;
          if(this.turnLeft == 0 && this.choice.hp > 0){
            eventinfo.style.display="none";
            this.final();
          }
          if(this.enemy1.hp <= 0 && this.enemy2.hp <= 0 && this.enemy3.hp <= 0 && this.enemy4.hp <= 0){
            eventinfo.style.display="none";
            this.final();
          }
          if(this.choice.hp <= 0){
            eventinfo.style.display="none";
            this.final();
          }
          enemyaction.insertAdjacentHTML('beforeend', `<p>C'est au tour de ${this.choice.name} qui attaque ${this.enemy2.name}</p>`);
          enemyaction.insertAdjacentHTML('beforeend', `<p>${this.enemy2.name} n'a plus que ${this.enemy2.hp} hp</p>`);
          if(this.enemy2.hp <=0){
            enemyaction.insertAdjacentHTML('beforeend', `<h3 style="color:color: rgb(100, 5, 5);">${this.enemy2.name} est mort</h3>`);
          }
          enemyaction.insertAdjacentHTML('beforeend', `<p>----------------------</p>`);
          this.enemyTurn();
        }
      });

      attackspecialem2.addEventListener("click", e=>{
        if (this.turnLeft > 0 && this.enemy2.hp > 0 && this.choice.mana >= this.choice.specialCost){
          specialsound.play();
          this.choice.specialAttack(this.enemy2);

          enemy2.style.border ="none";      
          if (this.choice.specialDmg != 0){
            special2.style.display = "block";
            setTimeout(function(){
              special2.style.display = "none";
            }, 1300);
          }   
          if(this.choice.specialHeal != 0){
            uplife.style.display = "block";
            setTimeout(function(){
              uplife.style.display = "none";
            }, 1300);
          }

          if(this.enemy2.hp <= 0){
            if(this.enemy1.state == "looser" && this.enemy3.state == "looser" && this.enemy4.state == "looser"){

            }else{
              enemy2.style.display ="none";
              eventinfo.style.display="none"; 
              this.enemy2.state = "looser";
              mymana.textContent = this.choice.mana;
              upmana.style.display="block";
              setTimeout(function(){
                upmana.style.display="none"; 
              }, 1100);
            }
          } else {
            enemyhp.textContent = this.enemy2.hp;
          }  
          enemyaction.insertAdjacentHTML('beforeend', `<p>C'est au tour de ${this.choice.name} qui lance une super attaque ${this.enemy2.name}</p>`);
          enemyaction.insertAdjacentHTML('beforeend', `<p>${this.enemy2.name} n'a plus que ${this.enemy2.hp} hp</p>`);
          if(this.enemy2.hp <=0){
            enemyaction.insertAdjacentHTML('beforeend', `<h3 style="color:color: rgb(100, 5, 5);">${this.enemy2.name} est mort</h3>`);
          }
          enemyaction.insertAdjacentHTML('beforeend', `<p>----------------------</p>`);
          this.turnLeft --;
          round.textContent = this.turnLeft;
          if(this.turnLeft == 0 && this.choice.hp > 0){
            eventinfo.style.display="none";
            this.final();
          }
          if(this.enemy1.hp <= 0 && this.enemy2.hp <= 0 && this.enemy3.hp <= 0 && this.enemy4.hp <= 0){
            eventinfo.style.display="none";
            this.final();
          }
          if(this.choice.hp <= 0){
            eventinfo.style.display="none";
            this.final();
          }
          if(this.choice.mana < this.choice.specialCost){
            attackspecialem2.style.display = "none";
          };
          this.enemyTurn();
        } else{
          attackspecialem2.style.display = "none";
        }
      });

      if(this.choice.mana < this.choice.specialCost){
        attackspecialem2.style.display = "none";
      };

    });
    
    enemy3.addEventListener("click", e => {
      this.check();
      enemy1.style.border ="none";
      enemy2.style.border ="none";      
      enemy4.style.border ="none";      
      mycharacter.style.border ="none"; 
      enemy3.style.border = "3px solid white";   
      eventinfo.style.display="block";   
      mytarget.textContent = this.enemy3.name; 
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
          swordaudio.play();
          this.choice.dealDamage(this.enemy3);


          enemy3.style.border ="none";      
          impact3.style.display = "block";
          setTimeout(function(){
            impact3.style.display = "none";
          }, 1100);

          if(this.enemy3.hp <= 0){
            enemy3.style.display ="none";
            eventinfo.style.display="none";  
            mymana.textContent = this.choice.mana;
            upmana.style.display="block";
            setTimeout(function(){
              upmana.style.display="none"; 
            }, 1100);
          } else {
            enemyhp.textContent = this.enemy3.hp;
          }  
          this.turnLeft --;
          round.textContent = this.turnLeft;
          if(this.turnLeft == 0 && this.choice.hp > 0){
            eventinfo.style.display="none";
            this.final();
          }
          if(this.enemy1.hp <= 0 && this.enemy2.hp <= 0 && this.enemy3.hp <= 0 && this.enemy4.hp <= 0){
            eventinfo.style.display="none";
            this.final();
          }
          if(this.choice.hp <= 0){
            eventinfo.style.display="none";
            this.final();
          }
          enemyaction.insertAdjacentHTML('beforeend', `<p>C'est au tour de ${this.choice.name} qui attaque ${this.enemy3.name}</p>`);
          enemyaction.insertAdjacentHTML('beforeend', `<p>${this.enemy3.name} n'a plus que ${this.enemy3.hp} hp</p>`);
          if(this.enemy3.hp <=0){
            enemyaction.insertAdjacentHTML('beforeend', `<h3 style="color:color: rgb(100, 5, 5);">${this.enemy3.name} est mort</h3>`);
          }
          enemyaction.insertAdjacentHTML('beforeend', `<p>----------------------</p>`);
          this.enemyTurn();
        }
      });

      attackspecialem3.addEventListener("click", e=>{
        if (this.turnLeft > 0 && this.enemy3.hp > 0 && this.choice.mana >= this.choice.specialCost){
          specialsound.play();
          this.choice.specialAttack(this.enemy3);

          enemy3.style.border ="none";      
          if (this.choice.specialDmg != 0){
            special3.style.display = "block";
            setTimeout(function(){
              special3.style.display = "none";
            }, 1300);
          }   
          if(this.choice.specialHeal != 0){
            uplife.style.display = "block";
            setTimeout(function(){
              uplife.style.display = "none";
            }, 1300);
          }

          if(this.enemy3.hp <= 0){
            if(this.enemy1.state == "looser" && this.enemy2.state == "looser" && this.enemy4.state == "looser"){

            }else{
              enemy3.style.display ="none";
              eventinfo.style.display="none"; 
              this.enemy3.state = "looser";
              mymana.textContent = this.choice.mana;
              upmana.style.display="block";
              setTimeout(function(){
                upmana.style.display="none"; 
              }, 1100);
            }
          } else {
            enemyhp.textContent = this.enemy3.hp;
          }  
          enemyaction.insertAdjacentHTML('beforeend', `<p>C'est au tour de ${this.choice.name} qui lance une super attaque ${this.enemy3.name}</p>`);
          enemyaction.insertAdjacentHTML('beforeend', `<p>${this.enemy3.name} n'a plus que ${this.enemy3.hp} hp</p>`);
          if(this.enemy3.hp <=0){
            enemyaction.insertAdjacentHTML('beforeend', `<h3 style="color:color: rgb(100, 5, 5);">${this.enemy3.name} est mort</h3>`);
          }
          enemyaction.insertAdjacentHTML('beforeend', `<p>----------------------</p>`);
          this.turnLeft --;
          round.textContent = this.turnLeft;
          if(this.turnLeft == 0 && this.choice.hp > 0){
            eventinfo.style.display="none";
            this.final();
          }
          if(this.enemy1.hp <= 0 && this.enemy2.hp <= 0 && this.enemy3.hp <= 0 && this.enemy4.hp <= 0){
            eventinfo.style.display="none";
            this.final();
          }
          if(this.choice.hp <= 0){
            eventinfo.style.display="none";
            this.final();
          }
          if(this.choice.mana < this.choice.specialCost){
            attackspecialem3.style.display = "none";
          };
          this.enemyTurn();
        } else{
          attackspecialem3.style.display = "none";
        }
      });

      if(this.choice.mana < this.choice.specialCost){
        attackspecialem3.style.display = "none";
      };

    });
    
    enemy4.addEventListener("click", e => {
      this.check();
      enemy1.style.border ="none";
      enemy2.style.border ="none";      
      enemy3.style.border ="none";      
      mycharacter.style.border ="none"; 
      enemy4.style.border = "3px solid white";  
      eventinfo.style.display="block";  
      mytarget.textContent = this.enemy4.name;  
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
          swordaudio.play();
          this.choice.dealDamage(this.enemy4);


          enemy4.style.border ="none";      
          impact4.style.display = "block";
          setTimeout(function(){
            impact4.style.display = "none";
          }, 1100);

          if(this.enemy4.hp <= 0){
            enemy4.style.display ="none";
            eventinfo.style.display="none";  
            mymana.textContent = this.choice.mana; 
            upmana.style.display="block";
            setTimeout(function(){
              upmana.style.display="none"; 
            }, 1100);
          } else {
            enemyhp.textContent = this.enemy4.hp;
          }  
          this.turnLeft --;
          round.textContent = this.turnLeft;
          if(this.turnLeft == 0 && this.choice.hp > 0){
            eventinfo.style.display="none";
            this.final();
          }
          if(this.enemy1.hp <= 0 && this.enemy2.hp <= 0 && this.enemy3.hp <= 0 && this.enemy4.hp <= 0){
            eventinfo.style.display="none";
            this.final();
          }
          if(this.choice.hp <= 0){
            eventinfo.style.display="none";
            this.final();
          }
          enemyaction.insertAdjacentHTML('beforeend', `<p>C'est au tour de ${this.choice.name} qui attaque ${this.enemy4.name}</p>`);
          enemyaction.insertAdjacentHTML('beforeend', `<p>${this.enemy4.name} n'a plus que ${this.enemy4.hp} hp</p>`);
          if(this.enemy4.hp <=0){
            enemyaction.insertAdjacentHTML('beforeend', `<h3 style="color:color: rgb(100, 5, 5);">${this.enemy4.name} est mort</h3>`);
          }
          enemyaction.insertAdjacentHTML('beforeend', `<p>----------------------</p>`);
          this.enemyTurn();
        }
      });

      attackspecialem4.addEventListener("click", e=>{
        if (this.turnLeft > 0 && this.enemy4.hp > 0 && this.choice.mana >= this.choice.specialCost){
          specialsound.play();
          this.choice.specialAttack(this.enemy4);

          enemy4.style.border ="none";      
          if (this.choice.specialDmg != 0){
            special4.style.display = "block";
            setTimeout(function(){
              special4.style.display = "none";
            }, 1300);
          }   
          if(this.choice.specialHeal != 0){
            uplife.style.display = "block";
            setTimeout(function(){
              uplife.style.display = "none";
            }, 1300);
          }

          if(this.enemy4.hp <= 0){
            if(this.enemy1.state == "looser" && this.enemy2.state == "looser" && this.enemy3.state == "looser"){

            }else{
              enemy4.style.display ="none";
              eventinfo.style.display="none"; 
              this.enemy4.state = "looser";
              mymana.textContent = this.choice.mana;
              upmana.style.display="block";
              setTimeout(function(){
                upmana.style.display="none"; 
              }, 1100);
            }
            
          } else {
            enemyhp.textContent = this.enemy4.hp;
          }  
          enemyaction.insertAdjacentHTML('beforeend', `<p>C'est au tour de ${this.choice.name} qui lance une super attaque ${this.enemy4.name}</p>`);
          enemyaction.insertAdjacentHTML('beforeend', `<p>${this.enemy4.name} n'a plus que ${this.enemy4.hp} hp</p>`);
          if(this.enemy4.hp <=0){
            enemyaction.insertAdjacentHTML('beforeend', `<h3 style="color:color: rgb(100, 5, 5);">${this.enemy4.name} est mort</h3>`);
          }
          enemyaction.insertAdjacentHTML('beforeend', `<p>----------------------</p>`);
          this.turnLeft --;
          round.textContent = this.turnLeft;
          if(this.turnLeft == 0 && this.choice.hp > 0){
            eventinfo.style.display="none";
            this.final();
          }
          if(this.enemy1.hp <= 0 && this.enemy2.hp <= 0 && this.enemy3.hp <= 0 && this.enemy4.hp <= 0){
            eventinfo.style.display="none";
            this.final();
          }
          if(this.choice.hp <= 0){
            eventinfo.style.display="none";
            this.final();
          }
          if(this.choice.mana < this.choice.specialCost){
            attackspecialem4.style.display = "none";
          };
          this.enemyTurn();
        } else {
          attackspecialem4.style.display = "none";
        }
      });

      if(this.choice.mana < this.choice.specialCost){
        attackspecialem4.style.display = "none";
      };

    });


  }
}





