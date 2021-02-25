function toggleControls(){
    let videoElem = document.querySelector("#myVideo");
    
    if (videoElem.controls === true){
        videoElem.controls = false; 
        document.querySelector("#controlsToggle").innerHTML = "Use default controls";
        document.querySelector("#customControl").style.display = "block";

        //console.log("controls removed");
        //console.log(videoElem.controls);
    } else{
        videoElem.setAttribute("controls", "true");
        document.querySelector("#controlsToggle").innerHTML = "Use custom controls";
        document.querySelector("#customControl").style.display = "none";
        
        //console.log("controls added");
        //console.log(videoElem.controls);
    }
    
}

function skipTen(){
    let videoElem = document.querySelector("#myVideo");
    videoElem.currentTime += 10;

}

function rewindTen(){
    let videoElem = document.querySelector("#myVideo");
    videoElem.currentTime -= 10;

}

function playVideo(){
    let videoElem = document.querySelector("#myVideo");
    videoElem.play();

    document.querySelector("#playVideo").innerHTML = "Pause video";
    document.querySelector("#playVideo").removeEventListener("click", playVideo);
    document.querySelector("#playVideo").addEventListener("click", pauseVideo);
}

function pauseVideo(){
    let videoElem = document.querySelector("#myVideo");
    videoElem.pause();

    document.querySelector("#playVideo").innerHTML = "Pause video";
    document.querySelector("#playVideo").removeEventListener("click", pauseVideo);
    document.querySelector("#playVideo").addEventListener("click", playVideo);

}