class Level {
    constructor() {
        this.hitDetectionArray = [
            { name: "obj1", x: 10, y: 10, w: 480, h: 40 },
            { name: "obj2", x: 450, y: 20, w: 40, h: 110 },
            { name: "obj3", x: 350, y: 100, w: 130, h: 30 },
            { name: "obj4", x: 350, y: 100, w: 30, h: 60 }, // TO DO: copy this to other places then have a perfect hit detection
            { name: "obj5", x: 290, y: 130, w: 90, h: 30 },
            { name: "obj6", x: 290, y: 100, w: 30, h: 60 },
            { name: "obj7", x: 230, y: 100, w: 90, h: 30 },
            { name: "obj8", x: 230, y: 100, w: 30, h: 60 },
            { name: "obj9", x: 170, y: 130, w: 90, h: 30 },
            { name: "obj10", x: 170, y: 100, w: 30, h: 60 },
            { name: "obj11", x: 110, y: 100, w: 90, h: 30 },
            { name: "obj12", x: 110, y: 100, w: 30, h: 60 },
            { name: "obj13", x: 50, y: 130, w: 90, h: 40 },
            { name: "obj14", x: 10, y: 130, w: 60, h: 290 },
            { name: "obj15", x: 40, y: 330, w: 450, h: 40 },
            { name: "obj16", x: 430, y: 330, w: 40, h: 160 }
          ];
          this.levelColor = '#fed480'
          this.vColor = '#000'
    }
    drawLevel (){
        ctx.fillStyle = this.levelColor

        ctx.fillRect(this.hitDetectionArray[0].x,this.hitDetectionArray[0].y,this.hitDetectionArray[0].w,this.hitDetectionArray[0].h)
        ctx.fillRect(this.hitDetectionArray[1].x,this.hitDetectionArray[1].y,this.hitDetectionArray[1].w,this.hitDetectionArray[1].h)
        ctx.fillRect(this.hitDetectionArray[2].x,this.hitDetectionArray[2].y,this.hitDetectionArray[2].w,this.hitDetectionArray[2].h)
        ctx.fillRect(this.hitDetectionArray[3].x,this.hitDetectionArray[3].y,this.hitDetectionArray[3].w,this.hitDetectionArray[3].h)
        ctx.fillRect(this.hitDetectionArray[4].x,this.hitDetectionArray[4].y,this.hitDetectionArray[4].w,this.hitDetectionArray[4].h)
        ctx.fillRect(this.hitDetectionArray[5].x,this.hitDetectionArray[5].y,this.hitDetectionArray[5].w,this.hitDetectionArray[5].h)
        ctx.fillRect(this.hitDetectionArray[6].x,this.hitDetectionArray[6].y,this.hitDetectionArray[6].w,this.hitDetectionArray[6].h)
        ctx.fillRect(this.hitDetectionArray[7].x,this.hitDetectionArray[7].y,this.hitDetectionArray[7].w,this.hitDetectionArray[7].h)
        ctx.fillRect(this.hitDetectionArray[8].x,this.hitDetectionArray[8].y,this.hitDetectionArray[8].w,this.hitDetectionArray[8].h)
        ctx.fillRect(this.hitDetectionArray[9].x,this.hitDetectionArray[9].y,this.hitDetectionArray[9].w,this.hitDetectionArray[9].h)
        ctx.fillRect(this.hitDetectionArray[10].x,this.hitDetectionArray[10].y,this.hitDetectionArray[10].w,this.hitDetectionArray[10].h)
        ctx.fillRect(this.hitDetectionArray[11].x,this.hitDetectionArray[11].y,this.hitDetectionArray[11].w,this.hitDetectionArray[11].h) 
        ctx.fillRect(this.hitDetectionArray[12].x,this.hitDetectionArray[12].y,this.hitDetectionArray[12].w,this.hitDetectionArray[12].h)
        ctx.fillRect(this.hitDetectionArray[13].x,this.hitDetectionArray[13].y,this.hitDetectionArray[13].w,this.hitDetectionArray[13].h)
        ctx.fillRect(this.hitDetectionArray[14].x,this.hitDetectionArray[14].y,this.hitDetectionArray[14].w,this.hitDetectionArray[14].h)
        ctx.fillRect(this.hitDetectionArray[15].x,this.hitDetectionArray[15].y,this.hitDetectionArray[15].w,this.hitDetectionArray[15].h)

        // TODO: create ostcables appearing and disapearing + black out
   
        ctx.fillStyle = this.vColor
        ctx.font = '18px PressStart2P-Regular'
        ctx.fillText('X',442,480) // End of maze symbol
        ctx.fillStyle = "#f4f4f4"

        // Lava in bottom of gravity pit
        ctx.save()
        ctx.fillStyle = '#ff3a3a'
        ctx.fillRect(10,410,60,10)
        ctx.restore()

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
        this.hasHit(game.player,this.hitDetectionArray[10])||
        this.hasHit(game.player,this.hitDetectionArray[11])||
        this.hasHit(game.player,this.hitDetectionArray[12])||
        this.hasHit(game.player,this.hitDetectionArray[13])||
        this.hasHit(game.player,this.hitDetectionArray[14])||
        this.hasHit(game.player,this.hitDetectionArray[15])

        ) {
        } else {
            canvas.style.animation = 'blink .5s infinite'
            ctx.font = '30px PressStart2P-Regular'
            ctx.fillText('Game over',120,250)
            ctx.font = '12px PressStart2P-Regular'
            ctx.fillText('(press space to restart)',110,280)
            game.gameEnd()
        }
         // Gravity part
         if (game.player.y + game.player.radius > 130 && game.player.y + game.player.radius < 169 && 
            game.player.x > 10 && game.player.x < 70) {
            ctx.font = '30px PressStart2P-Regular'
            ctx.fillText('Watch out!',120,250)
            ctx.font = '11px PressStart2P-Regular'
            ctx.fillText('Gravity will pull you down',120,280)
            ctx.save()    
            ctx.fillStyle = '#000'
            ctx.fillText('V',35,237)
            ctx.fillText('V',35,257)
            ctx.fillText('V',35,277)
            ctx.restore()
         }
         if (game.player.y + game.player.radius > 170 && game.player.y + game.player.radius < 420
            && game.player.x > 10 && game.player.x < 70) {
            game.player.angle += 0.01
            game.player.isAccelerating = true
         }
         // Stop character when leaving the area
         if (game.player.y + game.player.radius > 330 && game.player.y + game.player.radius < 370 && 
            game.player.x > 70 && game.player.x < 100) {
            game.player.isAccelerating = false
         }
         // Lights out part
         if (game.player.y + game.player.radius > 330 && game.player.y + game.player.radius < 370 && 
            game.player.x + game.player.radius > 130 && game.player.x + game.player.radius < 480) {
            this.lightsOut()
         }
         // End of maze reached
         if (game.player.y + game.player.radius > 460 && game.player.y + game.player.radius < 500) {
            let saveTime = game.timer //Log time left
            canvas.style.animation = 'blink .3s infinite' //Add visual effect
            game.timerStart = false // Stop timer from restarting
            winSong.play(); // Play rockin' tune
            winSong.volume = 0.3 // Lower volume
            game.gameEnd()
            ctx.font = '30px PressStart2P-Regular'
            ctx.fillText('You won!',130,250)
            ctx.font = '11px PressStart2P-Regular'
            ctx.fillText(`Level cleared in ${((game.setTimer-saveTime))}s on ${((game.difficulty))}`,97,280)
        } else {
         // Intro text
        }
        if (game.player.x > 29.9 && game.player.x < 31.0 && game.player.y > 29.9 && game.player.y < 31) {
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
    }
    hasHit(box1, box2) {
        let box1Right = box1.x - box1.radius
        let box1Bottom = box1.y - box1.radius
        let box2Right = box2.x + box2.w - box1.radius
        let box2Bottom = box2.y + box2.h - box1.radius 
  
        if(box1Right > box2.x && box2Right > box1.x && 
            box1Bottom > box2.y && box2Bottom > box1.y) return true
        else return false
    }
    lightsOut (){
        this.levelColor = '#000'
        this.vColor = '#fff'
        game.player.playerColor = '#fff'
        game.player.playerOutlineColor = '#fff'
        canvas.style.borderColor = '#000'
        body.style.backgroundColor = '#000'
        canvas.style.animation = 'pulse 6s infinite'
        ctx.font = '30px PressStart2P-Regular'
        ctx.fillText('Lights out!',105,260)
        if (game.difficulty == 'hard')
        game.player.playerDirInd = '#fff'
    }
    resetLightsOut() {
        this.levelColor = '#fed480'
        this.vColor = '#000'
        game.player.playerColor = '#000'
        game.player.playerOutlineColor = '#e8006d'
        canvas.style.borderColor = '#25fedf'
        body.style.backgroundColor = '#352a55'
    }
}