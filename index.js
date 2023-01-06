// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
var myInterval; 

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

function displayTimer() {
  milliseconds += 1;
  if (milliseconds == 100) {
    milliseconds = 0;
    seconds++;
    if (seconds==60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  var s_hours = hours > 9 ? hours : '0' + hours;
  var s_minutes = minutes > 9 ? minutes : '0' + minutes;
  var s_seconds = seconds > 9 ? seconds : '0' + seconds;
  var s_milliseconds = milliseconds > 9 ? milliseconds : '0' + milliseconds;
  if (s_minutes > 0 || s_hours>0) {
    appDiv.getElementsByClassName('min')[0].style.display = 'inline';
    appDiv.getElementsByClassName('min')[0].innerHTML = s_minutes + ' : ';
  }
  if (s_hours > 0) {
    appDiv.getElementsByClassName('hr')[0].style.display = 'inline';
    appDiv.getElementsByClassName('hr')[0].innerHTML = s_hours + ' : ';
  }
  appDiv.getElementsByClassName('sec')[0].innerHTML =s_seconds + ' : ' + s_milliseconds;
}


let str_btn=document.getElementById('start')

str_btn.addEventListener('click',function() {
  clearInterval(myInterval)
  myInterval=setInterval(displayTimer,10);
  document.getElementById('stop').style.display = 'inline';
  document.getElementById('clear').style.display = 'inline';
  document.getElementById('start').style.display = 'none';
});


let stp_btn=document.getElementById('stop')

stp_btn.onclick=function() {
  clearInterval(myInterval);
  document.getElementById('start').style.display = 'inline';
};

let clr_btn=document.getElementById('clear')

clr_btn.onclick=function() {
  clearInterval(myInterval);
  appDiv.getElementsByClassName('sec')[0].innerHTML='00'
  document.getElementById('stop').style.display = 'none';
  document.getElementById('clear').style.display = 'none';
  document.getElementById('start').style.display = 'inline';
};
