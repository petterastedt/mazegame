const canvas = document.querySelector('canvas'),
ctx = canvas.getContext('2d'),
game = new Game(),
scale = 'scale(0.9)', // sets correct scale  
winSong = new Audio('audio/win.mp3'),
introSong = new Audio('audio/intro.mp3'),
alert = new Audio('audio/alert.mp3'),
introScreen = document.querySelector('.intro-screen'),
btn = document.querySelectorAll('.btn'),
body = document.querySelector('body'),
mute = document.querySelector('.mute')    

// Intro screen click functions
let clicked = false
mute.addEventListener('click',() => { 
    if (clicked === false) {
    introSong.play()
    introSong.volume = 0.2
    mute.src = 'img/volume.png'
    clicked = true
    }
    else if (clicked === true) {
    introSong.pause()
    mute.src = 'img/mute-green.png'
    clicked = false   
    }
})

btn.forEach(function (btns) {
    btns.addEventListener('click', function(){
        if (btns.dataset.columns == 'easy') {
        introScreen.style.display = 'none'
        game.difficulty = btns.dataset.columns
        game.setTimer = 120
        game.timer = game.setTimer
    }
        if (btns.dataset.columns == 'medium') {
        introScreen.style.display = 'none'
        game.difficulty = btns.dataset.columns
        game.setTimer = 90
        game.timer = game.setTimer
    }
        if (btns.dataset.columns == 'hard') {
        introScreen.style.display = 'none'
        game.difficulty = btns.dataset.columns
        game.player.playerColor = 'black'
        game.player.playerDirInd = 'black'
        game.setTimer = 60
        game.timer = game.setTimer
    }
    introSong.pause()
    })
})
//Start game on page load
start()
function start() {
    game.update()
    game.draw(ctx)
    window.requestAnimationFrame(start)
} 

// Keyboard controls
function keyListener(event) {
    let isKeydown = event.type === 'keydown' // The value is true or false
    if (event.keyCode === 32) { // Space
        if (isKeydown === false) {
            game.gameReset()
        }
    }
    if (!game.gameOver){
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
    else if (event.keyCode === 49) {
        game.player.y = 150
        game.player.x = 90
    }
    else if (event.keyCode === 50) {
        game.player.y = 350
        game.player.x = 90
    }        
 }
}
window.addEventListener('keydown', keyListener)
window.addEventListener('keyup', keyListener)
document.body.style.transform = scale;    