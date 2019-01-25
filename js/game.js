class Game {
    constructor() {
        this.player = new Player(30, 30)
        this.level = new Level()
        this.countDown = undefined
        this.setTimer = 90
        this.timer = this.setTimer
        this.timerInvoked = false
        this.timerStart = false
        this.gameOver = false
        this.difficulty = ''
    }
    draw(ctx) {
        ctx.clearRect(0,0,canvas.width,canvas.height)
        this.level.drawLevel()
        this.displayTime()
        this.player.draw(ctx)
    }
    displayTime() {
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
    gameEnd() {
        //Stop player
        this.player.stop()
        this.gameOver = true
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
        this.timer = this.setTimer
        clearInterval(this.countDown)
        this.level.resetLightsOut()
        this.gameOver = false
        game.player.rotateStop()
        if (game.difficulty == 'hard')
        game.player.playerDirInd = 'black'
    }
    // We need to update everything related to the game
    update() {
        this.player.update()
    }
}