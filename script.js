let start = document.getElementById("start");

let choose = document.getElementById("choosecharacter");
let left = document.getElementById("left");
let right = document.getElementById("right");
let chooseboard = document.getElementById("chooseboard");
let nameCharacter = document.getElementById("name");
let hp = document.getElementById("hp");
let damage = document.getElementById("damage");
let special = document.getElementById("special");
let mana = document.getElementById("mana");
let imgcharacter = document.getElementById("imgcharacter");
let type = document.getElementById("type");
let boardgame = document.getElementById("boardgame");
let board = document.getElementById("board");
let mycharacter = document.getElementById("mycharacter");
let enemy = document.querySelectorAll("img.enemy");
let enemy1 = document.getElementById("enemy1");
let enemy2 = document.getElementById("enemy2");
let enemy3 = document.getElementById("enemy3");
let enemy4 = document.getElementById("enemy4");
let eventinfo = document.getElementById("event");
let myhp = document.getElementById("myhp");
let myman = document.getElementById("myman");
let mydamage = document.getElementById("mydamage");
let myspecial = document.getElementById("myspecial");
let enemyhp = document.getElementById("enemyhp");
let enemymana = document.getElementById("enemymana");
let enemydamage = document.getElementById("enemydamage");
let enemyspecial = document.getElementById("enemyspecial");
let attack1 = document.getElementById("attackem1");
let attack2 = document.getElementById("attackem2");
let attack3 = document.getElementById("attackem3");
let attack4 = document.getElementById("attackem4");
let attackspecialem1 = document.getElementById("attackspecialem1");
let attackspecialem2 = document.getElementById("attackspecialem2");
let attackspecialem3 = document.getElementById("attackspecialem3");
let attackspecialem4 = document.getElementById("attackspecialem4");
let round = document.getElementById("round");
let winner = document.getElementById("winner");
let final = document.getElementById("final");
let replay= document.getElementById("replay");

let impact1 = document.getElementById("impact1");
let impact2 = document.getElementById("impact2");
let impact3 = document.getElementById("impact3");
let impact4 = document.getElementById("impact4");
let swordaudio = new Audio('mixkit-metal-hit-woosh-1485.wav');
let mainmusic = new Audio('honor-and-sword-main-11222(1).mp3');
let choosemusic = new Audio('Super Smash Bros Choose Your Character Sound Effect.mp3');
let fight = new Audio('3..2..1.. FIGHT! - Sound Effect.mp3');
let arena = new Audio('🎵 RPG Battle Music Enter The Arena.mp3');
let crowd = new Audio('Medieval Battle Ambience with Heavy Crowd and Sword Fightin.mp3');
let victory = new Audio('Gladiator Victory Song.mp3');

let choice;
let enemyArray = [];
let enemystat1;
let enemystat2;
let enemystat3;
let enemystat4;

let i = 0;

window.addEventListener("load", function(){
  mainmusic.play();
  mainmusic.loop=true;
})

start.addEventListener("click", function(){
  swordaudio.play();
  choosemusic.play();
  start.style.display ="none";
  chooseboard.style.display ="block";
  const Grace = new Fighter;
  const Carl = new Assassin;
  const Draven = new Berzerker;
  const Moana = new Monk;
  const Ulder = new Paladin;

  const arrayPlayer = [Grace, Carl, Draven, Moana, Ulder];
  choice = arrayPlayer[0];

  right.addEventListener("click", function(){
    swordaudio.play();
    i ++;
    if (i == arrayPlayer.length){
      i = 0;
    };
    choice = arrayPlayer[i];
    imgcharacter.src = choice.img;
    type.textContent = choice.constructor.name;
    nameCharacter.textContent = choice.name;
    hp.textContent = choice.hp;
    damage.textContent = choice.dmg;
    mana.textContent = choice.mana;
    special.textContent = choice.description;
  })

  left.addEventListener("click", function(){
    swordaudio.play();
    i--;
    if (i < 0){
      i = arrayPlayer.length - 1;
    };
    choice = arrayPlayer[i];
    imgcharacter.src = choice.img;
    type.textContent = choice.constructor.name;
    nameCharacter.textContent = choice.name;
    hp.textContent = choice.hp;
    damage.textContent = choice.dmg;
    mana.textContent = choice.mana;
    special.textContent = choice.description;

  })

  choose.addEventListener("click", function(){
    swordaudio.play();
    crowd.play();
    crowd.loop=true;
    crowd.volume = 0.5;
    arena.play();
    arena.loop=true;
    mainmusic.pause();
    fight.play();
    
    board.style.display = "none";
    boardgame.style.display = "block"; 
    mycharacter.src = choice.img;
    let p = 0;
    arrayPlayer.forEach(player => {
      if(player != choice){
        enemyArray.push(player);
      }
    })
  
    for(let a = 0; a < arrayPlayer.length; a++){
      if(a != i){
        enemy[p].src = arrayPlayer[a].img;
        p++;
      }
      console.log(a)
    }

    enemystat1 = enemyArray[0];
    enemystat2 = enemyArray[1];
    enemystat3 = enemyArray[2];
    enemystat4 = enemyArray[3];


    myhp.textContent = choice.hp;
    mymana.textContent = choice.mana;
    mydamage.textContent = choice.dmg;
    myspecial.textContent = choice.description;

    new Game(choice,enemystat1, enemystat2, enemystat3, enemystat4);
  })

});





