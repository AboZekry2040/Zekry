function angularJs(){
let sound=document.querySelector('.audio')

document.addEventListener("click",function(e){
sound.play()
},{ once: true })




window.addEventListener("keydown",function(e){
if(e.key=='F102')
{
e.preventDefault()
return false
}

if(e.key=='F10')
{
e.preventDefault()
return false
}

if(e.key=='f6')
{
e.preventDefault()
return false
}

})

window.addEventListener('contextmenu',function(e){
e.preventDefault()
return false
})




}