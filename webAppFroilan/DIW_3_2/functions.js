//Toggles custom controls and default video controls
function toggleControls(){
    let videoElem = document.querySelector("#myVideo");
    
    //if default controls are on, hide them and show custom controls
    if (videoElem.controls === true){
        videoElem.controls = false; 
        document.querySelector("#controlsToggle").innerHTML = "Use default controls";
        document.querySelector("#customControl").style.display = "block";

    //and if false, do the reverse
    } else{
        videoElem.setAttribute("controls", "true");
        document.querySelector("#controlsToggle").innerHTML = "Use custom controls";
        document.querySelector("#customControl").style.display = "none";
        
    }
    
}

//move video timestamp ahead 10 secs
function skipTen(){
    let videoElem = document.querySelector("#myVideo");
    videoElem.currentTime += 10;

}


//move video timestamp back 10 secs
function rewindTen(){
    let videoElem = document.querySelector("#myVideo");
    videoElem.currentTime -= 10;

}

//play video, switch button to pause button
function playVideo(){
    let videoElem = document.querySelector("#myVideo");
    videoElem.play();
    document.querySelector("#playVideo").innerHTML = "Pause video";        
    document.querySelector("#playVideo").removeEventListener("click", playVideo);
    document.querySelector("#playVideo").addEventListener("click", pauseVideo);

}

//pause video, switch button to play
function pauseVideo(){
    let videoElem = document.querySelector("#myVideo");
    videoElem.pause();

    document.querySelector("#playVideo").innerHTML = "Pause video";
    document.querySelector("#playVideo").removeEventListener("click", pauseVideo);
    document.querySelector("#playVideo").addEventListener("click", playVideo);

}

//show the current timestamp
function displayProgress(){
    let videoElem = document.querySelector("#myVideo");
    vLength = videoElem.duration;
    document.querySelector("#videoProgress").innerHTML = "The video is at timestamp: " + videoElem.currentTime.toFixed(2);
}