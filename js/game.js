class Game {
    constructor() {
        this.player = new Player(30,30) // To test
        this.level = new Level()
        this.timeLeft = 10
    }
    // We need to draw everything related to the game
    draw(ctx) {
        ctx.clearRect(0,0,canvas.width,canvas.height)
        this.level.drawLevel()
        this.player.draw(ctx)
    }
    displayTime(){
        //Time left
        let timeleft = this.timeLeft
        let timer = setInterval(function(){
        test.innerHTML = timeleft -= 1
        if(timeleft <= 0) {
        test.innerHTML = 'Time is up!'   
        clearInterval(timer)
        }
        },1000);
    }
    // We need to update everything related to the game
    update() {
        this.player.update()
    }
}