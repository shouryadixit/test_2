class Game {
  constructor(){
   
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();

    }

  
   
  }

  play(){
    
    form.hide();
    
    Player.getPlayerInfo();
    
   

        
        if(allPlayers !== undefined){
       
        background(back_img);

    
       // image(back_img, 0, 0,displayWidth*3, displayHeight-150 );
     
       car1 = createSprite(0,displayHeight/2);
       car1.addAnimation("car1",sol_img);
   
       car2 = createSprite(displayWidth/2+730,displayHeight/2);
       car2.addImage("car2",soldier2_img);
     
       cars = [car1, car2];
       
       if(keyIsDown("m")){
         var bullet = createSprite(car1.x, car1.y, 10 ,50);
         bullet.velocityX = 10;
       }     

   
  

       var index = 0;

    
       var y = 175 ;
       var x = 200;

      for(var plr in allPlayers){
    
      

        index = index + 1 ;

       
       
        if (index === player.index){
          camera.position.y = displayHeight/2;
          camera.position.x = cars[index-1].x;
        }
       
       
      }

    }
    if (keyIsDown(RIGHT_ARROW) && player.index !== null){
      car1.addAnimation("car1",sol_img);
         car1.x = car1.x + 10
         car1.velocityX += 5 
        }
 else{
 //car1.addImage("car3", sol_stand);
 
 
 
 }
        if (keyIsDown(LEFT_ARROW) && player.index !== null){
         car1.addAnimation("car0",sol2_img);
         car1.x = car1.x - 10
         car1.velocityX -= 5
        }  
  // if(keyIsDown(SPACE)){
      //car1.velocityY = -10

  // }
       

    if(player.distance > 3860){
      gameState = 2;
    }
    console.log(player.distance);
    drawSprites();
  }
 
  end(){
   
  }
}