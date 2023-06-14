function addInitialEventHandlers(){
    document.addEventListener("DOMContentLoaded", function() {
        const sceneEl = document.querySelector('a-scene');
        const imgTarget = document.querySelector('#imgTarget');
        const examplePlane = document.querySelector('#example-plane');
        const btnPrevious = document.querySelector('#btnPrevious')
        
        // arReady event triggered when ready
        sceneEl.addEventListener("arReady", (event) => {
          // console.log("MindAR is ready")
        });
        // arError event triggered when something went wrong. Mostly browser compatbility issue
        sceneEl.addEventListener("arError", (event) => {
          // console.log("MindAR failed to start")
        });
        // detect target found
        imgTarget.addEventListener("targetFound", event => {
          console.log("target found");
          onTargetFound()
        });
        // detect target lost
        imgTarget.addEventListener("targetLost", event => {
          console.log("target lost");
        });
        // detect click event
        examplePlane.addEventListener("click", event => {
          console.log("plane click");
        });

        btnPrevious.addEventListener("click", event => {
          document.querySelector('#prototype-video').play();
        })
    });
}

function onTargetFound(){

}