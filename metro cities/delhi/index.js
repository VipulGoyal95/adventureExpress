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

  // var text1 = document.getElementById("date1-containt");
  // var text2 = document.getElementById("date2-containt");
  // var text3 = document.getElementById("date3-containt");
function date1(){
  
  document.querySelector(".btn_date1").style.backgroundColor = "rgb(54,54,54)";
  document.querySelector(".btn_date1").style.color = "white";
  document.querySelector(".btn_date2").style.backgroundColor = "rgb(119, 118, 118)";
  document.querySelector(".btn_date2").style.color = "black";
  document.querySelector(".btn_date3").style.backgroundColor = "rgb(119, 118, 118)";
  document.querySelector(".btn_date3").style.color = "black";
  var text1 = document.getElementById("date1-containt");
  var text2 = document.getElementById("date2-containt");
  var text3 = document.getElementById("date3-containt");
  text1.style.display = "block";
  text2.style.display = "none";
  text3.style.display = "none";
}

function date2(){
  document.querySelector(".btn_date2").style.backgroundColor = "rgb(54,54,54)";
  document.querySelector(".btn_date2").style.color = "white";
  document.querySelector(".btn_date1").style.backgroundColor = "rgb(119, 118, 118)";
  document.querySelector(".btn_date1").style.color = "black";
  document.querySelector(".btn_date3").style.backgroundColor = "rgb(119, 118, 118)";
  document.querySelector(".btn_date3").style.color = "black";

  var text1 = document.getElementById("date1-containt");
  var text2 = document.getElementById("date2-containt");
  var text3 = document.getElementById("date3-containt");
  text2.style.display = "block";
  text1.style.display = "none";
  text3.style.display = "none";
}


function date3(){
  document.querySelector(".btn_date3").style.backgroundColor = "rgb(54,54,54)";
  document.querySelector(".btn_date3").style.color = "white";
  document.querySelector(".btn_date1").style.backgroundColor = "rgb(119, 118, 118)";
  document.querySelector(".btn_date1").style.color = "black";
  document.querySelector(".btn_date2").style.backgroundColor = "rgb(119, 118, 118)";
  document.querySelector(".btn_date2").style.color = "black";
  var text1 = document.getElementById("date1-containt");
  var text2 = document.getElementById("date2-containt");
  var text3 = document.getElementById("date3-containt");
  text3.style.display = "block";
  text1.style.display = "none";
  text2.style.display = "none";
}

