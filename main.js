//first animation
//animacja poczatkowa


//            none


//endl animation
//animacja koncowa
var newslide=0;
function next(){
  newslide+=1;
  if(newslide===1){
$('.u').delay(0).animate({ opacity: '1' }, 800);
document.getElementById('one').style.display ="block "
}
if(newslide===2){
$('.u2').delay(0).animate({ opacity: '1' }, 800);
}
if(newslide===3){
$('.u3').delay(0).animate({ opacity: '1' }, 800);
}
if(newslide===4){
$('.u4').delay(0).animate({ opacity: '1' }, 800);
}
if(newslide===5){
$('.u5').delay(0).animate({ opacity: '1' }, 800);
}
if(newslide===6){
$('.u6').delay(0).animate({ opacity: '1' }, 800);
document.getElementById('one').style.display ="none"
}
if (newslide===7){
$('.u7').delay(0).animate({ opacity: '1' }, 800);
document.getElementById('three').style.display ="block "
}
if (newslide===8){
$('.u8').delay(0).animate({ opacity: '1' }, 800);
}
if (newslide === 9) {
  $('.u9').delay(0).animate({ opacity: '1' }, 800);
  document.getElementById('three').style.display ="none"
} 
if (newslide === 10) {
  $('.u10').delay(0).animate({ opacity: '1' }, 800);
  document.getElementById('two').style.display ="block"
  
}
if (newslide === 11) {
  $('.u11').delay(0).animate({ opacity: '1' }, 800);
  document.getElementById('two').style.display ="none"
    
}
if (newslide === 12) {
  $('.u12').delay(0).animate({ opacity: '1' }, 800);
  
}
if (newslide === 13) {
  $('.u13').delay(0).animate({ opacity: '1' }, 800);
}
if (newslide === 14) {
  $('.u14').delay(0).animate({ opacity: '1' }, 800);
}
if (newslide === 15) {
  $('.u15').delay(0).animate({ opacity: '1' }, 800);
}
} 