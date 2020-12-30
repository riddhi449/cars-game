class Form{
    constructor(){
         this.title = createElement('h2')
          this.inputbox = createInput("name")
          this.button = createButton("SUBMIT")
          this.greeting = createElement('h4')
          this.resetbutton = createButton('RESET')

    }
        display(){
           
            this.title.html("CAR RACING")
            this.title.position(130,0)
            
           
            this.inputbox.position(130,160)

           
            this.button.position(200,250)

            this.resetbutton.position(displayWidth - 100, 20)

           



            this.button.mousePressed(()=>{
                this.inputbox.hide()
                this.title.hide()
                this.button.hide()
                player.name = this.inputbox.value()
                playerCount= playerCount + 1
                player.index = playerCount
                player.updateplayerCount(playerCount)
                player.updateplayerInfo()
                this.greeting.html("WELCOME" + player.name)
                this.greeting.position(130,160)
            })

            this.resetbutton.mousePressed(()=>{
                player.updateplayerCount(0)
                game.updategameState(0)
                var playerref = database.ref('players')
                playerref.remove()
            })

            




        }

        hide(){
            this.inputbox.hide()
            this.title.hide()
            this.button.hide()
            this.greeting.hide()
        }







}