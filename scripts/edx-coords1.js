var displayCoords=document.getElementById("msg");
  
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    displayCoords.innerHTML="Geolocation API not supported by your browser.";
  }
}
  
  
function showPosition(position) {
 displayCoords.innerHTML="Latitude: " + position.coords.latitude + 
  "<br />Longitude: " + position.coords.longitude;	
}
