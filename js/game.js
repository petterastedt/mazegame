class Game {
    constructor() {
        this.player = new Player(100,200) // To test
        this.timeLeft = 10
    }
    // We need to draw everything related to the game
    draw(ctx) {
        ctx.clearRect(0,0,canvas.width,canvas.height)
        this.player.draw(ctx)
    }
    displayTimeLeft(){
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