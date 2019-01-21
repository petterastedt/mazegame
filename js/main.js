const canvas = document.querySelector('canvas'),
ctx = canvas.getContext('2d'),
test = document.querySelector('.main-h1')
game = new Game()

start()

function start() {
    game.update();
    game.draw(ctx);
    window.requestAnimationFrame(start)
} 

// KEYDOWN CONTROLS
function keyListener(event) {
    let isKeydown = event.type === 'keydown' // The value is true or false
    if (event.keyCode === 39) { // Right
        game.player.moveRight()
    } 
    if (event.keyCode === 37) { // Left
        game.player.moveLeft()
    } 
    if (event.keyCode === 38) { // Up
        if (isKeydown) 
            game.player.move()
        else 
            game.player.stop()
    } 
    if (event.keyCode === 32) { // Space
        if (isKeydown === false) {
            game.displayTimeLeft(test)
        }
    }
}
window.addEventListener('keydown', keyListener)
window.addEventListener('keyup', keyListener)