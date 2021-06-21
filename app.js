
let a;
let time;
let date;
setInterval(()=>{
     a = new Date();
     time = a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
     date= a.getDate()+"/"+a.getMonth()+"/"+a.getFullYear();  
    document.getElementById('time').innerHTML=date+" on "+time;
},1000);


//contact us


document.getElementById("bt").addEventListener("click",function(){
    alert("your form  as been submitted");

})

//project


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}