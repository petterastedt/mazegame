class Level {
    constructor() {
    }
    drawLevel (){
        // End of maze reached
        if (game.player.y + game.player.radius > 460 && game.player.y + game.player.radius < 500) {
            canvas.style.animation = 'blink .3s infinite'
            winSong.play();
            ctx.font = '30px PressStart2P-Regular'
            ctx.fillText('You won!',140,250)
            ctx.font = '10px PressStart2P-Regular'
            ctx.fillText('Time: {getTime} seconds',140,280)
        }
        // Intro text / reset
        if (game.player.x == 30 && game.player.y == 30) {
            ctx.font = '12px PressStart2P-Regular'
            ctx.fillText('Level 1: Get out of the maze ',90,200)
            ctx.fillText('before the timer runs out.',90,220) 
            ctx.fillText('Remember: what seems to be easy',90,240) 
            ctx.fillText('sections of the map might have',90,260)
            ctx.fillText('some uncomfortable surprises.',90,280)
            ctx.fillText('Press SPACE to start. Good Luck!',90,300)
        }
        if (game.player.x + game.player.radius > 60) {
            // TODO: start timer/game
        }
        // Draw level
        ctx.fillStyle = "#fed480"
        // (posx,posy,size,size)
        ctx.fillRect(10,10,480,40) // top
        ctx.fillRect(450,40,40,90) // first turn
        ctx.fillRect(350,100,100,30) // part two start
        ctx.fillRect(290,130,90,30)  // upper straight part  
        ctx.fillRect(230,100,90,30) // lower straight part
        ctx.fillRect(170,130,90,30) // upper straight
        ctx.fillRect(110,100,90,30) // lower straight
        ctx.fillRect(50,130,90,40) // last part of second floor
        ctx.fillRect(10,130,60,290) // gravity party
        // TODO: create knives here
        ctx.fillRect(60,330,430,40)
        // TODO: create ostcables appearing and disapearing + black out
        ctx.fillRect(430,330,40,160) 
        ctx.fillStyle = "#000"
        ctx.font = '18px PressStart2P-Regular'
        ctx.fillText('V',442,480)
        ctx.fillStyle = "#f4f4f4"
    }
}