//These variables stores seconds,minutes and hours that are used  for displaying
let seconds=0;
let minutes=0;
let hours=0;

//These variables stores time paramaters with 0 inserted at start when needed.
let correctedseconds=0;
let correctedminutes=0;
let correctedhours=0;

//These are the variables that store the current status of stop watch
let status="stopped";
let status1="resumed";


let interval;

function stopwatch(){
     //StopWatch function logic to determine next value
    seconds++;
    if(seconds/60==1){
      seconds=0;
      minutes++;
      if(minutes/60==1){
        minutes=0;
        hours++;
      }
    }
    //logic for inserting 0 at front depending on value
    if(seconds<10){
      correctedseconds="0"+seconds.toString();
    }
    else{
      correctedseconds=seconds;
    }
    if(minutes<10){
      correctedminutes="0"+minutes.toString();
    }
    else{
      correctedminutes=minutes;
    }
    if(hours<10){
      correctedhours="0"+hours.toString();
    }
    else{
      correctedhours=hours;
    }

    //displaying time elapsed
    document.getElementById("display").innerHTML=correctedhours+":"+correctedminutes+":"+correctedseconds;
}

//logic for working of StartStop button
function startstop(){
    //whenever status is stopped and button is clicked, stop watch starts from 00:00:00
    //And also text and color of button changes to stop and red.
    //status variable gets changed to started
    if(status=="stopped"){
      interval = window.setInterval(stopwatch,1000);
      document.getElementById("StartStop").innerHTML="Stop";
      document.getElementById("StartStop").style.backgroundColor= "red";
      status="started";
    }
    //whenever status is started and button is clicked, stop watch will cease
    //And also text and color of button changes to start and green, time elapsed will be displayed.
    //status variable gets changed to stopped and status1 get changed to resumed
    else{
      window.clearInterval(interval);
      document.getElementById("StartStop").innerHTML="Start";
      document.getElementById("StartStop").style.backgroundColor= "green";
      document.getElementById("PauseResume").innerHTML="Pause";
      status="stopped";
      status1="resumed";
      seconds=0;
      minutes=0;
      hours=0;
    }
}

//logic for working of PauseResume buttom
//this function will only work whenever status is started
function pauseresume(){
  //whenever status1 is resumed and button is clicked, stop watch pauses
  //And also text changes to resume .
  //status1 variable gets changed to paused
  if(status1=="resumed" && status=="started"){
    window.clearInterval(interval);
    document.getElementById("PauseResume").innerHTML="Resume";
    status1="paused";
  }
  //whenever status1 is paused and button is clicked, stop watch resumes
  //And also text changes to pause .
  //status1 variable gets changed to resumed
  else if(status1=="paused" && status=="started"){
    document.getElementById("PauseResume").innerHTML="Pause";
    status1="resumed";
    status="stopped";
    startstop();
  }

}
