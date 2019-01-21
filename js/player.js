class Player {
    constructor(x,y){
        this.x = x
        this.y = y
        this.radius = 10
        this.angle = 0
        this.isMoving = false
        this.xVelocity = 0
        this.speed = 2
    }
    draw(ctx) {
        if (this.y + this.radius > canvas.width || this.y - this.radius < 0) {
            return 'U lost'
        }
        if (this.x + this.radius > canvas.height || this.x - this.radius < 0) {
            return 'U lost'
        }

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
        if (this.isMoving) {
            this.x += this.speed * Math.cos(this.angle)
            this.y += this.speed * Math.sin(this.angle)   
        }
    }
    move() {
        this.isMoving = true
    }
    moveRight() {
        this.angle += 0.1 // Turning sensitivity
    }
    moveLeft() {
        this.angle -= 0.1 // Turning sensitivity
    }
    stop() {
        let that = this
        for (let i = 0; i < 10; i++){
            setTimeout(function(){
                that.speed -= 0.1
                console.log(that.speed)
            }, i*50)
            }
        this.speed = 2
        this.isMoving = false
    }
}

