
var skills = document.querySelector('#bar');

function addanim (){
  var bar = document.querySelectorAll('span');
  bar.forEach(b => b.classList.add('anim'));
}
function onscroll(){
  if(window.scrollY > bar.offsetTop-window.innerHeight){
    addanim ();
    document.removeEventListener('scroll', onscroll);
  };
}

document.addEventListener('scroll', onscroll);


showSlides(0, true);

function showSlides(index, reprogram) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index].style.display = "block";
  dots[index].className += " active";
  index++;
  if (index >= slides.length) {
    index = 0;
  }}