//Changing drop image based on scroll position
//Added blank image as an alternative to using z-index
function updateScrollPosition() {
    var y = window.scrollY;

var paragraph = document.getElementById('drop');
  if (y<100){
      paragraph.src='blank.png';
  }
    else if ( y>= 100 && y< 500 ) {
    paragraph.src='p1d1.png';
  } else if ( y >= 500 && y < 920 ) {
   paragraph.src='blank.png';
    }else if ( y >= 920 && y < 1421 ) {
    paragraph.src='p2d1.png';
    }else if ( y >= 1421 && y < 1824 ) {
    paragraph.src='blank.png';
  } else if ( y >= 1824 && y < 2334 ) {
    paragraph.src = "p3d1.png";
  } else if ( y >= 2334 && y < 2735 ) {
    paragraph.src = "blank.png";
  } else if ( y >= 2735 && y < 3244 ) {
    paragraph.src = "p4d1.png";
  } else if ( y >= 3244 && y < 3674 ) {
    paragraph.src = "blank.png";
  } else if ( y >= 3674 && y < 4194 ) {
    paragraph.src = "p5d1.png";
  } else if ( y >= 4194 && y < 4648 ) {
    paragraph.src = "blank.png";
  }
 else{
     paragraph.src = "p6d1.png";
 }
}



//Changing background image on click
var toggle = false;
var dino= document.getElementById("dino");
dino.addEventListener("click", dinodrink);
function dinodrink() {

  toggle = !toggle; // flip the boolean value!

  if (toggle == true) {
   dino.style.backgroundImage = "url('dinodrinking.jpg')";
  } else {
    dino.style.backgroundImage = "url('dino.jpg')";
  }

}


var toggle2 = false;
var indust= document.getElementById("industrialization");
indust.addEventListener("click", indus);
function indus(){ 
    toggle2= !toggle2;
  if (toggle2 == true) {
   indust.style.backgroundImage = "url('ind-13.jpg')";
  } else {
    indust.style.backgroundImage = "url('ind-12.jpg')";
  }

}  



var toggle3 = false;
var agri= document.getElementById("agriculture");
agri.addEventListener("click", agr);
function agr(){ 
    toggle3= !toggle3;
  if (toggle3 == true) {
   agri.style.backgroundImage = "url('agr-11.jpg')";
     
  } else {
    agri.style.backgroundImage = "url('agr-10.jpg')";
     
  }
    
} 

var toggle4 = false;
var modern= document.getElementById("modern");
modern.addEventListener("click", mod);
function mod(){ 
    toggle4= !toggle4;
  if (toggle4 == true) {
   modern.style.backgroundImage = "url('faucet-21.jpg')";
     
  } else {
    modern.style.backgroundImage = "url('faucet-20.jpg')";
     
  }
    
} 

var toggle5 = false;
var drought= document.getElementById("drought");
drought.addEventListener("click", dro);
function dro(){ 
    toggle5= !toggle5;
  if (toggle5 == true) {
   drought.style.backgroundImage = "url('drought-18.jpg')";
     
  } else {
    drought.style.backgroundImage = "url('drought-19.jpg')";
     
  }
    
} 

var toggle6 = false;
var save= document.getElementById("save");
save.addEventListener("click", sav);
function sav(){ 
    toggle6= !toggle6;
  if (toggle6 == true) {
   save.style.backgroundImage = "url('suggestion-25.jpg')";
     
     
  } else {
    save.style.backgroundImage = "url('suggestion-24.jpg')";
    
  }
   
} 



//Using if else if and else to toggle between multiple images
var droplet= document.getElementById('drop')
droplet.addEventListener("click",changedrop);
function changedrop(){
if (droplet.src.match('p1d1.png')){
    droplet.src="p1d2.png";
}

else if (droplet.src.match('p1d2.png')){
    droplet.src='p1d3.png';
}
else if (droplet.src.match('p1d3.png')){
    droplet.src='p1d4.png';
}

else if (droplet.src.match('p1d4.png')){
    droplet.src='p1d5.png';
}
else if (droplet.src.match('p1d5.png')){
    droplet.src='p1d1.png';
}

else if (droplet.src.match('p2d1.png')){
   droplet.src="p2d2.png";
}
else if (droplet.src.match('p2d2.png')){
    droplet.src='p2d3.png';
}

else if (droplet.src.match('p2d3.png')){
    droplet.src='p2d1.png';
}   
else if (droplet.src.match('p3d1.png')){
    droplet.src='p3d2.png';
}
else if (droplet.src.match('p3d2.png')){
    droplet.src='p3d3.png';
}
else if (droplet.src.match('p3d3.png')){
    droplet.src='p3d1.png';
}
else if (droplet.src.match('p4d1.png')){
    droplet.src='p4d2.png';
}

else if (droplet.src.match('p4d2.png')){
    droplet.src='p4d1.png';
}
else if (droplet.src.match('p5d1.png')){
    droplet.src='p5d2.png';
}
else if (droplet.src.match('p5d2.png')){
    droplet.src='p5d3.png';
}
else if (droplet.src.match('p5d3.png')){
    droplet.src='p5d1.png';
}
else{
    droplet.src='p6d1.png'
}
}
