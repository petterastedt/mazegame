class Game {
    constructor() {
        this.player = new Player(100,200) // To test
        this.timeLeft = 'Time left: 00:25'
    }
    // We need to draw everything related to the game
    draw(ctx) {
        ctx.clearRect(0,0,canvas.width,canvas.height)
        this.player.draw(ctx)
    }
    displayTimeLeft(){
        test.innerHTML = this.timeLeft
    }
    // We need to update everything related to the game
    update() {
        this.player.update()
    }
}