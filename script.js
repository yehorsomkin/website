const button = document.getElementById('button')
button.addEventListener('click' , function(){
    button.innerText = "click me"})
const colorScreen = document.getElementById('colorScreen')
colorScreen.addEventListener('dblclick' , function(){
    document.body.classList.toggle('darkmode')
})
const likeB = document.getElementById('likeB')
const buttonL = document.getElementById('buttonL')
 let likes = 0 ;
buttonL.addEventListener('click' , function(){
    likes = likes + 1
 likeB.innerText = likes})

const likeL = document.getElementById('likeL')
const buttonB = document.getElementById('buttonB')
 let nikes = 0 ;
buttonB.addEventListener('click' , function(){
    nikes = nikes + 1
 likeL.innerText = nikes})

 const likeP = document.getElementById('likeP')
const buttonD = document.getElementById('buttonD')
 let sikes = 0 ;
buttonD.addEventListener('click' , function(){
    sikes = sikes + 1
 likeP.innerText = sikes})