document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  });

  function  link1(){
    window.location.href="Goa/Goa.html";
  }
  function  link2(){
    window.location.href="kochi/kochi.html";
  }
  function  link3(){
    window.location.href="Vizag/Vizag.html";
  }
  function  link4(){
    window.location.href="Andaman and Nicobar island/Andaman and Nicobar island.html";
  }
