const canvas = document.querySelector('canvas'),
ctx = canvas.getContext('2d'),
game = new Game(),
scale = 'scale(0.9)', // sets correct scale  
winSong = new Audio('../audio/win.mp3')    

start()

function start() {
    game.update()
    game.draw(ctx)
    window.requestAnimationFrame(start)
} 

// KEYDOWN CONTROLS
function keyListener(event) {
    let isKeydown = event.type === 'keydown' // The value is true or false
    if (event.keyCode === 39 && isKeydown) { // Right
        game.player.rotate("right")
    } 
    else if (event.keyCode === 37 && isKeydown) { // Left
        game.player.rotate("left")
    } 
    else if (event.keyCode === 37 || event.keyCode === 39) {
        game.player.rotateStop()
    }
    else if (event.keyCode === 38) { // Up
        if (isKeydown) 
            game.player.accelerate()
        else 
            game.player.stop()
    } 
    else if (event.keyCode === 32) { // Space
        if (isKeydown === false) {
            game.player.x = 30
            game.player.y = 30
        }
    }
}
window.addEventListener('keydown', keyListener)
window.addEventListener('keyup', keyListener)
document.body.style.transform = scale;    