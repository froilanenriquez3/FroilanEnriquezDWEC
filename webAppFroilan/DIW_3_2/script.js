function toggleControls(){
    let videoElem = document.querySelector("#myVideo");
    if (videoElem.controls === true){
        videoElem.setAttribute("controls", "false");
        document.querySelector("#controlsToggle").innerHTML = "Add controls";
       
        videoElem.controls = false; 

        //console.log("controls removed");
        //console.log(videoElem.controls);
    } else{
        videoElem.setAttribute("controls", "true");
        document.querySelector("#controlsToggle").innerHTML = "Remove controls";
        
        //console.log("controls added");
        //console.log(videoElem.controls);
    }
    
    

}