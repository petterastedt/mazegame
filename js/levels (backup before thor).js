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
        this.collision = false
        this.cleared = false
        //let object = this.hitDetectionArray.filter(obj => obj.name === "obj1");
    }
    drawLevel (){
        // End of maze reached
        if (game.player.y + game.player.radius > 460 && game.player.y + game.player.radius < 500) {
            canvas.style.animation = 'blink .3s infinite'
            game.timerStart = false
            winSong.play();
            ctx.font = '30px PressStart2P-Regular'
            ctx.fillText('You won!',140,250)
            ctx.font = '10px PressStart2P-Regular'
            ctx.fillText('Time: {getTime} seconds',140,280)
        }
        // Intro text
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
        // (posx,posy,size,size)
        ctx.fillRect(10,10,480,40) // top
        ctx.fillRect(450,50,40,80) // first turn
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
        
        this.collisionDetection()
    }
    collisionDetection() {
        let lvlObject = this.hitDetectionArray.filter(obj => obj.name === "obj2")
        let lvlObject2 = this.hitDetectionArray.filter(obj => obj.name === "obj1")
        let lvlObject3 = this.hitDetectionArray.filter(obj => obj.name === "obj3")
        
        for (let i = 0; i < this.hitDetectionArray.length; i++){


        if (game.player.y - game.player.radius > this.hitDetectionArray[i].y && 
            game.player.y + game.player.radius < this.hitDetectionArray[i].h + this.hitDetectionArray[i].y && 
            game.player.x + game.player.radius < this.hitDetectionArray[i].w + this.hitDetectionArray[i].x && 
            game.player.x - game.player.radius > this.hitDetectionArray[i].x) {
            // console.log(`inside of ${this.hitDetectionArray[i].x}`)
        }
    }
    }
}

// for (let i= 0; i < this.hitDetectionArray.length; i++) {
//     console.log(this.hitDetectionArray[i]);
// }
// detects if user is inside a box vertically
// if (game.player.y - game.player.radius > lvlObject[0].y && game.player.y + game.player.radius < lvlObject[0].h + lvlObject[0].y && game.player.x + game.player.radius < lvlObject[0].w + lvlObject[0].x && game.player.x - game.player.radius > lvlObject[0].x) {
//     console.log('inside of box2')
// }
// if (game.player.y - game.player.radius > lvlObject2[0].y && game.player.y + game.player.radius < lvlObject2[0].h + lvlObject2[0].y && game.player.x + game.player.radius < lvlObject2[0].w + lvlObject2[0].x && game.player.x - game.player.radius > lvlObject2[0].x) {
//     console.log('inside of box1')
// }
// if (game.player.y - game.player.radius > lvlObject3[0].y && game.player.y + game.player.radius < lvlObject3[0].h + lvlObject3[0].y && game.player.x + game.player.radius < lvlObject3[0].w + lvlObject3[0].x && game.player.x - game.player.radius > lvlObject3[0].x) {
//     console.log('inside of box3')
// }
// detects if user is inside a box horizontally

// if (param1 || param2 === false) {
//     // if character is outside the box but inside anotherbox:
//     // DO SOMETHING
//     // else Game over
// }