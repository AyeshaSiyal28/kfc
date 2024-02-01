var changeImage=document.querySelector("#slide")
var images=["./media/kfc.jpg","./media/kfc1.jpg","./media/kfc2.jpg"]
// console.log(images)
// console.log(images.length)
var imageIndexNo=0
function slideBack(){
    imageIndexNo--;
    if(imageIndexNo<0){
       imageIndexNo=images.length-1
    }
   // changeImage.src=images[imageIndexNo]
   changeImage.setAttribute("src",images[imageIndexNo])
   changeImage.classList.add("slide1")
   setTimeout(() => {
    changeImage.classList.remove("slide1")
   }, 2000);
}

function slideForward(){
    imageIndexNo++;
    if(imageIndexNo>images.length-1){
       imageIndexNo=0
    }
   changeImage.src=images[imageIndexNo]
   changeImage.classList.add("slide")
   setTimeout(() => {
    changeImage.classList.remove("slide")
   }, 2000);
}
setInterval(() => {
    slideForward()
}, 8000);

var side=document.querySelector('#sideNav')
var sideStatus='hide'
var body=document.querySelector('body')
function sideToggle(){
if(sideStatus==='hide'){
   side.classList.add('sideShow')
   body.style.overflow='hidden'
   sideStatus='show'
}
else{
   side.classList.remove('sideShow')
   body.style.overflow='scroll'
   sideStatus='hide'
}
}






 