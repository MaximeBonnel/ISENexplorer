viewer = pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "../images/dehors.png",
    "autoLoad": true,
    "autoRotate": "-1",
    "autoRotateInactivityDelay" : "10000",
    "showZoomCtrl": false,
    "compass": false,
    "hotSpots": [
        {
            "pitch": 10,
            "yaw": -20,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Il est beau le tableau"
        }
    ]
});

// Hot spot creation function
function hotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-tooltip');
    var span = document.createElement('span');
    span.innerHTML = args;
    hotSpotDiv.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';
};