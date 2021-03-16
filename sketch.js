    var PLAY=1
    var gameState = 1
    var END=0
    var sword_o
    var score = 0
    var monsterGroup
    var fruitGroup
    function preload(){
      swordImage = loadImage("sword.png");
      fruit1 = loadImage("fruit1.png");
      fruit2 = loadImage("fruit2.png")
      alienImg = loadImage("alien1.png","alien2.png");
      fruit3 = loadImage("fruit3.png")
      gameOver = loadImage("gameover.png")
      fruit4 = loadImage("fruit4.png")
      K = loadSound("knifeSwooshSound.mp3")
      Over = loadSound("gameover.mp3")


    }
    function setup(){
      createCanvas(600,600)

      sword = createSprite(20,100,20,20);
      sword.addImage(swordImage);
      sword.scale=0.7
      fruitGroup=new Group()
      monsterGroup =new Group()
    }

    function draw(){
      background("brown")
      fill("white")
      text("score = " +score,520,50)
      
      if(gameState===1){
      sword.y = World.mouseY;
      sword.x = World.mouseX;
      frooty() 
      Enemy()
      if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach()
        score = score+1;
        K.play();
        
      }
      
      
      else{
        if(monsterGroup.isTouching(sword)){
        gameState = 0;
          fruitGroup.setVelocityXEach(0)
          fruitGroup.destroyEach();
          Over.play()
          monsterGroup.setVelocityXEach(0)
          monsterGroup.destroyEach();
          sword.addImage(gameOver);
        }
        
      }
      
      }
      
      drawSprites(); 
    }
    


    function frooty(){
      if(frameCount%60===0){
      
    
    
  var    position = Math.round(random(1,2))
var fruit = createSprite(20,30,20,20);
        fruit.scale=0.3;
        
    if(position==1){
      fruit.x = 500
      fruit.velocityX = -7*(score/4)
     console.log("noice") 
    }
    else {if(position==2){
      fruit.x = 0
      fruit.velocityX = 7+(score/4)
    }}
    
     var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: fruit.addImage(fruit1);
      break;
      case 2: fruit.addImage(fruit2);
      break;
      case 3: fruit.addImage(fruit3);
      break;
      case 4: fruit.addImage(fruit4);
      break;
      default: break;
    }

      fruit.y = Math.round(random(10,600));
      
      fruitGroup.add(fruit);
    
    }
    }

    function Enemy(){ 
      if(frameCount%150===0){
      var monster = createSprite(20,30,10,20);
      monster.addAnimation("MON",alienImg);  
        monster.y = Math.round(random(10,600));
        
        
        monster.velocityX = 7+(score/10);
        monsterGroup.add(monster);
      }
    }
