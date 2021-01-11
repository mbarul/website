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

//Google map
function myMap() {
  //map options
var mapProp= {
  center:new google.maps.LatLng(41.69323, -8.83287),
  zoom:7,

};
//new map
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
//add marker
let marker = new google.maps.Marker ({
  
  position:{lat:41.69323, lng:-8.83287},
  animation:google.maps.Animation.BOUNCE,
  map:map
})
// Zoom to 9 when clicking on marker
google.maps.event.addListener(marker,'click',function() {
  map.setZoom(15);
  map.setCenter(marker.getPosition());
});
//Info Window
let infoWindow = new google.maps.InfoWindow({
  content:'<h5>Nasza szkółka</h5>'
})
marker.addListener('click', function(){
  infoWindow.open(map,marker);
});
}