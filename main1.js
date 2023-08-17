
var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}








// another code 
/*
const findMyState =()=>{
    const status=document.querySelector('.status');
    const success = (position)=>{
        console.log(position);
        const latitude=position.coords.latitude;
        const longitude=position.coords.longitude;
    
        console.log(latitude +'  '+longitude );
        



    }
    const error=()=>{
        status.textContent ='Unable to relative your location ';

    }
    navigator.geolocation.getCurrentPosition(success,error);

}

document.querySelector('.find-state').addEventListener('click',findMyState);

*/










