//gototop
const up = document.querySelector(".up");
up.addEventListener('click', ()=>{
    window.location = 'index.html#home'
})
// console.log(window.pageYOffset)
up.style.opacity = 0;

document.addEventListener('scroll', function(){
    if(window.pageYOffset > 200){
        up.style.opacity = 1;
    }else{
        up.style.opacity = 0;

    }
})
//change images
document.querySelector(".smallImages").addEventListener('click', function(e){
    if(e.target.closest('img')){
        // console.log(e.target);
        // console.log("image")
        document.getElementById("displayImage").src = e.target.src;
    }
    // else{
    //     console.log("no image")

    // }
});