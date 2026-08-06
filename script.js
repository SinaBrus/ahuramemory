const button = document.getElementById("playButton");


const wavesurfer = WaveSurfer.create({

    container:"#waveform",

    waveColor:"rgba(212,175,55,0.35)",

    progressColor:"#d4af37",

    height:70,

    barWidth:3,

    barGap:3

});


wavesurfer.load("memory.mp3");



button.onclick = function(){

    wavesurfer.playPause();

};



wavesurfer.on("play",()=>{

    button.innerHTML="⏸";

});


wavesurfer.on("pause",()=>{

    button.innerHTML="▶";

});


wavesurfer.on("ready",()=>{

document.getElementById("duration").innerHTML =
time(wavesurfer.getDuration());

});



wavesurfer.on("audioprocess",()=>{

document.getElementById("current").innerHTML =
time(wavesurfer.getCurrentTime());

});



function time(seconds){

let m=Math.floor(seconds/60);

let s=Math.floor(seconds%60);

if(s<10) s="0"+s;

return m+":"+s;

}
