var Countdown= new Date("Feb 15,2022 00:00:00").getTime();
var x=setInterval (function(){
 var now=new Date().getTime();
  var timeLeft=Countdown-now;
    var days = Math.floor( timeLeft/(1000*60*60*24) );
    var hours = Math.floor( (timeLeft/(1000*60*60)) % 24 );
    var minutes = Math.floor( (timeLeft/1000/60) % 60 );
    var seconds = Math.floor( (timeLeft/1000) % 60 );

    document.getElementById("days").innerHTML= days
    document.getElementById("hours").innerHTML= hours
    document.getElementById("minutes").innerHTML= minutes
    document.getElementById("seconds").innerHTML= seconds

    if (timeLeft < 0) {
        clearInterval(x);
        console.log('CountDown Finished');
    }
},)

