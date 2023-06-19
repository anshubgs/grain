// Placeholder functions for starting and stopping the cleaning process
function startCleaning() {
    document.getElementById("status").innerText = "Machine Status: Cleaning in progress...";
    document.getElementById("pulse-status").innerText = "ON";
    document.getElementById("motor-speed").innerText = "100";
    document.getElementById("trash-count").innerText = "5";
    document.getElementById("fingers-status").innerText = "ON";
    document.getElementById("conveyor-belt").innerText = "10";
    document.getElementById("camera-pixel").innerText = "5 PX";
    document.getElementById("rotator-speed").innerText = "100";
    document.getElementById("bag-status").innerText = "Grains = 5kg";
    document.getElementById("mirror-status").innerText = "Open";
    document.getElementById("brain/electronic-status").innerText = "Working";
    document.getElementById("packing-status").innerText = "Not-Packed";



  }
  
  function stopCleaning() {
    document.getElementById("status").innerText = "Machine Status: Idle";
    document.getElementById("pulse-status").innerText = "OFF";
    document.getElementById("motor-speed").innerText = "0";
    document.getElementById("trash-count").innerText = "0";
    document.getElementById("fingers-status").innerText = "OFF";
    document.getElementById("conveyor-belt").innerText = "0";
    document.getElementById("camera-pixel").innerText = "0 PX";
    document.getElementById("rotator-speed").innerText = "0";
    document.getElementById("bag-status").innerText = "Empty";
    document.getElementById("mirror-status").innerText = "Close";
    document.getElementById("brain/electronic-status").innerText = "Not Working";
    document.getElementById("packing-status").innerText = "Packed";



  }
  