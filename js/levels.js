class Level {
    constructor() {

    }
    drawLevel (){
        ctx.fillStyle = "#f4f4f4"
        // (posx,posy,size,size)
        ctx.fillRect(10,10,480,40) // top
        ctx.fillRect(450,40,40,90) // first turn
        ctx.fillRect(350,100,100,30) // part two start
        ctx.fillRect(350,100,30,60) // part two first turn
        ctx.fillRect(300,130,60,30)    
        ctx.fillRect(290,100,30,60)
        ctx.fillRect(230,100,80,30) // straight part
        ctx.fillRect(230,100,30,60)      
    }
}