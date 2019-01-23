class Game {
    constructor() {
        this.player = new Player(30,30) // To test
        this.level = new Level()
        this.countDown = undefined
        this.timer = 60
        this.timerInvoked = false
        this.timerStart = false
    }
    // We need to draw everything related to the game
    draw(ctx) {
        ctx.clearRect(0,0,canvas.width,canvas.height)
        this.level.drawLevel()
        this.displayTime()
        this.player.draw(ctx)
    }
    displayTime() {
        //Time 
        if (this.timerStart === true) {
            if (this.timer >= 0){
                if (!this.timerInvoked){
                    this.timerInvoked=true
                    this.countDown = setInterval(() => {
                    this.timer-=1
                    }, 1000);
                }
            ctx.font = '12px PressStart2P-Regular'
            ctx.fillText(`Time remaining: ${this.timer}s`,12,480)
            } else {
            ctx.font = '12px PressStart2P-Regular'
            ctx.fillText('Time is up!',12,480)
            this.timerInvoked=false; 
            }
        } else {
        this.timerInvoked = false
        }
    }
    gameStart () {

    }
    gameEnd() {
        //Stop player (needs tweaking)
        this.player.stop()
        //Clear timer interval
        clearInterval(game.countDown)
    }
    gameReset() {
        this.player.x = 30
        this.player.y = 30
        this.player.angle = 0
        canvas.style.animation = 'none'
        winSong.pause()
        game.timerStart = false
        clearInterval(this.countDown)
    }
    // We need to update everything related to the game
    update() {
        this.player.update()
    }
}