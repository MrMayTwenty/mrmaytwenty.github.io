document.addEventListener('DOMContentLoaded', function () {
  addInitialEventHandlers();
}, false);

function addInitialEventHandlers() {
  const sceneEl = document.querySelector('a-scene');
  const imgTarget = document.querySelector('#imgTarget');
  const btnPrevious = document.querySelector('#btnPrevious');

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

  btnPrevious.addEventListener("click", event => {
    console.log("btnPrevious clicked")
    document.querySelector('#prototype-video').play();
  });
}

function onTargetFound() {

}