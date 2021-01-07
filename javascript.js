//Open new page: about us etc. - button
function myFunction(){
  let myWindow = window.open("", "_blank");
  myWindow.document.write("<p>Strona w budowie...</p>")
}
function Instagram(){
  window.open("http://www.instagram.com/");
}
function Facebook(){
  window.open("http://www.facebook.com/");
}
function Youtube(){
  window.open("http://www.youtube.com/");
}


let slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot")
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i <dots.length; i++){
        dots[i].className = dots[i].className.replace(" active","")
   
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

