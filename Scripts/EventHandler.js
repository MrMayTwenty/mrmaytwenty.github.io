document.addEventListener('DOMContentLoaded', function () {
  addInitialEventHandlers();
}, false);

function addInitialEventHandlers() {
  const sceneEl = document.querySelector('a-scene');
  const imgTarget = document.querySelector('#imgTarget');
  const btnPrevious = document.querySelector('#btnPrevious');
  const btnNext = document.querySelector('#btnNext');
  const btnHomeToChurch = document.querySelector('#btnHomeToChurch');
  const btnChurchToReception = document.querySelector('#btnChurchToReception');
  const btnSponsors = document.querySelector('#btnSponsors');
  const video = document.querySelector('#prototype-video');

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
    video.pause();
    video.currentTime = 0;
  });

  btnNext.addEventListener("click", event => {
    console.log("btnNext clicked")
    video.play();
  });

  btnHomeToChurch.addEventListener("click", event => {
    console.log("btnHomeToChurch clicked")
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {

    }

   
  });

  btnChurchToReception.addEventListener("click", event => {
    console.log("btnChurchToReception clicked")
    const directionLink = "https://www.google.com/maps/dir/Iglesia+Ni+Cristo+-+Lokal+ng+EVM+-+Cavite+South,+4W5X%2BXM5,+Tagaytay,+Cavite/LieSil%E2%80%99s+Restaurant+%26+Events,+J.P.+Rizal+Street,+Kaybagal+South,+Tagaytay,+Cavite/@14.1056229,120.9392312,15z/data=!4m14!4m13!1m5!1m1!1s0x33bd7744d1349a79:0x922c3e148452585b!2m2!1d120.9492484!2d14.1098942!1m5!1m1!1s0x33bd77b43a3e77a3:0xeebb99ef08880fc4!2m2!1d120.9360291!2d14.102883!3e0?entry=ttu";
    window.open(directionLink, "_blank");
  });

  btnSponsors.addEventListener("click", event => {
    console.log("btnSponsors clicked")
    const directionLink = "https://www.google.com/maps/dir/Iglesia+Ni+Cristo+-+Lokal+ng+EVM+-+Cavite+South,+4W5X%2BXM5,+Tagaytay,+Cavite/LieSil%E2%80%99s+Restaurant+%26+Events,+J.P.+Rizal+Street,+Kaybagal+South,+Tagaytay,+Cavite/@14.1056229,120.9392312,15z/data=!4m14!4m13!1m5!1m1!1s0x33bd7744d1349a79:0x922c3e148452585b!2m2!1d120.9492484!2d14.1098942!1m5!1m1!1s0x33bd77b43a3e77a3:0xeebb99ef08880fc4!2m2!1d120.9360291!2d14.102883!3e0?entry=ttu";
    window.open(directionLink, "_blank");
  });
}

function showPosition(position) {
  const directionLink = "https://www.google.com/maps?saddr=My+Location&daddr=Iglesia%20Ni%20Cristo%20-%20Lokal%20ng%20EVM%20-%20Cavite%20South,%204W5X+XM5,%20Tagaytay,%20Cavite";
  window.open(directionLink, "_blank");
}
function onTargetFound() {

}