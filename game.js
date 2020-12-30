 class Game {
     constructor(){

     }
     getgameState(){
         var gameStateref = database.ref('gameState')
         gameStateref.on("value",function(data){
             gameState = data.val()
         })
     }

     updategameState(state){
        var gameStateref = database.ref('/')
        gameStateref.update({
            gameState:state
        })
    }

    start(){
        if (gameState === 0){
            player = new Player()
            player.getplayerCount()
            form = new Form()
            form.display()

        }

        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car1.addImage(carImage1)
        car2.addImage(carImage2)
        carArray = [car1,car2];
    }

    play(){
        form.hide()
        text("GAME STARTED",120,100)
        player.getcarsatend()
        Player.getallPlayerinfo()

       
        if(allPlayers !== undefined){
            image(trackImage,0,- displayHeight * 4,displayWidth,displayHeight * 5)
            var positionY = 200
            var index = 0
            var positionX = 400
            for(var plr in allPlayers){
                positionY = displayHeight - allPlayers[plr].distance 
                carArray[index].x = positionX;
                carArray[index].y = positionY;
                
                if(plr === "player" + player.index){
                    fill("purple")
                    ellipse(carArray[index].x , carArray[index].y , 60 , 60)

                        
                    carArray[index].shapeColor = "red"
                    camera.position.x = displayWidth / 2
                    camera.position.y = carArray[index].y
                }
                else{
                    carArray[index].shapeColor = "black"

                }
                
                positionX = positionX + 200
                index = index + 1




                /*if(plr ==="player" + player.index){
                    fill("red")
                }
                else{
                    fill("black")
                }
                text(allPlayers[plr].playername + ":" + allPlayers[plr].distance, 100, positionY )
                positionY = positionY + 20*/

                
            }
            
        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 20 
            player.updateplayerInfo()
            console.log(player.distance)
        } 


        drawSprites();

        if(player.distance === 4120){
            gameState = 2

            player.rank = player.rank + 1
            Player.updatecarsatend(player.rank)
        }
        

        
            
        





    }


    end(){
        text ("GAME OVER!", displayWidth/2, 20)
        console.log("GAME OVER!")
        console.log(player.distance)
        game.updategameState(2)
        console.log("playername" + player.name)
        console.log("playerrank" + player.rank)
    }
 }