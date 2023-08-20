var audio= new Audio("sound/click_sound.wav");

for(let i=0;i<19;i++){
document.querySelectorAll(".an")[i].addEventListener("click",function(){
    this.classList.add("animate"); 
    setTimeout(function(){
        this.classList.remove("animate"); 
    }, 100);
    audio.play();
});
}


