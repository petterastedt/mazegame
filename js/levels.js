class Level {
    constructor() {
        this.hitDetectionArray = [
            { name: "obj1", x: 10, y: 10, w: 480, h: 40 },
            { name: "obj2", x: 450, y: 50, w: 40, h: 80 },
            { name: "obj3", x: 350, y: 100, w: 100, h: 30 },
            { name: "obj4", x: 290, y: 130, w: 90, h: 30 },
            { name: "obj5", x: 230, y: 100, w: 90, h: 30 },
            { name: "obj6", x: 170, y: 130, w: 90, h: 30 },
            { name: "obj7", x: 110, y: 100, w: 90, h: 30 },
            { name: "obj8", x: 50, y: 130, w: 90, h: 40 },
            { name: "obj9", x: 10, y: 130, w: 60, h: 290 },
            { name: "obj10", x: 60, y: 330, w: 430, h: 40 },
            { name: "obj11", x: 430, y: 330, w: 40, h: 160 }
          ];

    }
    drawLevel (){
         // End of maze reached
         if (game.player.y + game.player.radius > 460 && game.player.y + game.player.radius < 500) {
            let saveTime = game.timer //Log time left
            this.timer = 60 // Reset timer
            canvas.style.animation = 'blink .3s infinite' //Add visual effect
            game.timerStart = false // Stop timer from restarting
            winSong.play(); // Play rockin' tune
            game.gameEnd()
            ctx.font = '30px PressStart2P-Regular'
            ctx.fillText('You won!',140,250)
            ctx.font = '11px PressStart2P-Regular'
            ctx.fillText(`Level cleared in ${((60-saveTime))}s!`,150,280)
        }
        if (game.player.x > 29.9 && game.player.x < 31.0) {
            ctx.font = '12px PressStart2P-Regular'
            ctx.fillText('Level 1: Get out of the maze ',90,205)
            ctx.fillText('before the timer runs out.',90,225) 
            ctx.fillText('Remember: what seems to be easy',90,245) 
            ctx.fillText('sections of the map might have',90,265)
            ctx.fillText('some uncomfortable surprises.',90,285)
            ctx.fillText('Press UP to start. Good Luck!',90,305)
        } else {
            game.timerStart = true
        }
        // Draw level
        ctx.fillStyle = "#fed480" // level color

        ctx.fillRect(this.hitDetectionArray[0].x,this.hitDetectionArray[0].y,this.hitDetectionArray[0].w,this.hitDetectionArray[0].h) // top
        ctx.fillRect(this.hitDetectionArray[1].x,this.hitDetectionArray[1].y,this.hitDetectionArray[1].w,this.hitDetectionArray[1].h) // top
        ctx.fillRect(this.hitDetectionArray[2].x,this.hitDetectionArray[2].y,this.hitDetectionArray[2].w,this.hitDetectionArray[2].h) // top
        ctx.fillRect(this.hitDetectionArray[3].x,this.hitDetectionArray[3].y,this.hitDetectionArray[3].w,this.hitDetectionArray[3].h) // top
        ctx.fillRect(this.hitDetectionArray[4].x,this.hitDetectionArray[4].y,this.hitDetectionArray[4].w,this.hitDetectionArray[4].h) // top
        ctx.fillRect(this.hitDetectionArray[5].x,this.hitDetectionArray[5].y,this.hitDetectionArray[5].w,this.hitDetectionArray[5].h) // top
        ctx.fillRect(this.hitDetectionArray[6].x,this.hitDetectionArray[6].y,this.hitDetectionArray[6].w,this.hitDetectionArray[6].h) // top
        ctx.fillRect(this.hitDetectionArray[7].x,this.hitDetectionArray[7].y,this.hitDetectionArray[7].w,this.hitDetectionArray[7].h) // top
        ctx.fillRect(this.hitDetectionArray[8].x,this.hitDetectionArray[8].y,this.hitDetectionArray[8].w,this.hitDetectionArray[8].h) // top
        ctx.fillRect(this.hitDetectionArray[9].x,this.hitDetectionArray[9].y,this.hitDetectionArray[9].w,this.hitDetectionArray[9].h) // top
        ctx.fillRect(this.hitDetectionArray[10].x,this.hitDetectionArray[10].y,this.hitDetectionArray[10].w,this.hitDetectionArray[10].h) // top

        // TODO: create knives here
       
        ctx.fillRect(60,330,430,40)
        // TODO: create ostcables appearing and disapearing + black out
   
        ctx.fillStyle = "#000"
        ctx.font = '18px PressStart2P-Regular'
        ctx.fillText('V',442,480)
        ctx.fillStyle = "#f4f4f4"

        if (
        this.hasHit(game.player,this.hitDetectionArray[0]) ||
        this.hasHit(game.player,this.hitDetectionArray[1]) ||
        this.hasHit(game.player,this.hitDetectionArray[2]) ||
        this.hasHit(game.player,this.hitDetectionArray[3]) ||
        this.hasHit(game.player,this.hitDetectionArray[4]) ||
        this.hasHit(game.player,this.hitDetectionArray[5]) ||
        this.hasHit(game.player,this.hitDetectionArray[6]) ||
        this.hasHit(game.player,this.hitDetectionArray[7]) ||
        this.hasHit(game.player,this.hitDetectionArray[8]) ||
        this.hasHit(game.player,this.hitDetectionArray[9]) ||
        this.hasHit(game.player,this.hitDetectionArray[10])

        ) {console.log("hackyCode.com")
        } else {
            canvas.style.animation = 'blink .5s infinite'
            ctx.font = '30px PressStart2P-Regular'
            ctx.fillText('Game over',120,250)
            ctx.font = '12px PressStart2P-Regular'
            ctx.fillText('(press space to restart)',110,280)
            game.gameEnd()
        }
    }
        hasHit(box1, box2) {
            let box1Right = box1.x// TODO TWEAK NUMBERS
            let box1Bottom = box1.y - 10  // TODO TWEAK NUMBERS
            let box2Right = box2.x + box2.w
            let box2Bottom = box2.y + box2.h  
  
            if(box1Right > box2.x && box2Right > box1.x && 
                box1Bottom > box2.y && box2Bottom > box1.y) return true
            else return false
}
}