class Player {
    constructor(x,y){
        this.x = x
        this.y = y
        this.radius = 10
        this.angle = 0
        this.vAngle = 0
        this.isAccelerating = false
        this.speed = 0
    }
    draw(ctx) {
        // Game over
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            canvas.style.animation = 'blink .5s infinite'
            ctx.font = '30px PressStart2P-Regular'
            ctx.fillText('Game over',120,250)
            ctx.font = '12px PressStart2P-Regular'
            ctx.fillText('(press space to restart)',110,280)
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            canvas.style.animation = 'blink .5s infinite'
            ctx.font = '30px PressStart2P-Regular'
            ctx.fillText('Game over',120,250)
            ctx.font = '12px PressStart2P-Regular'
            ctx.fillText('(press space to restart)',110,280)
        }
        // Draw character
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(this.x,this.y)
        ctx.lineTo(this.x+this.radius*Math.cos(this.angle),this.y+this.radius*Math.sin(this.angle))
        ctx.stroke()
    }
    // Update the information of the player for the next frame
    update() {
        if (this.isAccelerating) {
            this.speed = 2
        }
        else {
            this.speed *= 0.7 // The closer to 1, the slipperier is the player
        }
        this.x += this.speed * Math.cos(this.angle)
        this.y += this.speed * Math.sin(this.angle) 
        this.angle += this.vAngle
    }
    accelerate(myVar) {
        this.isAccelerating = true
    }
    rotate(direction) {
        this.vAngle = direction === "left" ? -0.03 : 0.03
    }
    rotateStop() {
        this.vAngle = 0
    }
    moveRight() {
        this.angle += 0.2 // Turning sensitivity
    }
    moveLeft() {
        this.angle -= 0.2 // Turning sensitivity
    }
    stop() {
        this.isAccelerating = false
     }
}