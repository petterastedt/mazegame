class Game {
    constructor() {
        this.player = new Player(30,30) // To test
        this.level = new Level()
        this.timer = 10
        this.timerInvoked = false
    }
    // We need to draw everything related to the game
    draw(ctx) {
        ctx.clearRect(0,0,canvas.width,canvas.height)
        this.level.drawLevel()
        this.player.draw(ctx)
    }
    displayTime(){
        //Time left
        if (this.timer >= 0){
            if (!this.timerInvoked){
                let that = this
                this.timerInvoked=true;
                setInterval(() => {
                    that.timer-=1
                }, 1000);
            }
            ctx.font = '20px PressStart2P-Regular'
            ctx.fillText(`Time remaining: ${this.timer}`,110,280)
        }   else {
            ctx.font = '20px PressStart2P-Regular'
            ctx.fillText('Time is up!',120,250)
            this.timerInvoked=false;
        }
    }
    gameStart () {

    }
    gameEnd() {

    }
    gameReset() {
        
    }
    // We need to update everything related to the game
    update() {
        this.player.update()
    }
}