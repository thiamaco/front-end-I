const buttonMobile = document.getElementById('btn_mobile');

function toggleMenu(){
  const nav = document.getElementById('nav');
  
  nav.classList.toggle('active'); 
  
}



buttonMobile.addEventListener('click',toggleMenu);


var slideIndex = 0; // índice do slide atual
var slides = document.getElementsByClassName("slides");
function showSlides() {
  
  
  // ocultar todos os slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // exibir o slide atual
  slides[slideIndex].style.display = "block";  
}

// mostrar o primeiro slide
showSlides();



document.getElementById("prev").addEventListener("click", function() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlides();
});

document.getElementById("next").addEventListener("click", function() {
  slideIndex++;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
  showSlides();
});


/*
$(document).ready(function() {
  $("#divParaAparecer").hide();
  $("#usuario").mouseover(function() {
    $("#divParaAparecer").show();
  });

  $("#usuario").mouseout(function() {
    $("#divParaAparecer").hide();
  });
});
*/
