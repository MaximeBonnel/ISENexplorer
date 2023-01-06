let img = document.getElementById("nomImg");
let lastScene = v.getConfig().scene; // on initialise la

//event pour cliquer sur le bouton qui enlève le hotspot
const del = document.getElementById('delHotSpot');
del.addEventListener('click', function(){
    delHotSpot();
})

//fonction pour upload les images
function upload(files) {
    let nomImg = img.value;
    if (nomImg != '') {
        socket.emit("upload", [files[0], nomImg]);
    }
};

//fonction pour créer les hotspots quand on click sur le bouton
let j = 26;  // variable j pour avoir des id de hotspot et scene dynamique
let admin = document.getElementById('admin-button');
admin.addEventListener('click', function () {
    console.log("ok");
    nomImg = img.value;
    currentPitch = v.getPitch();
    currentYaw = v.getYaw();  // On prend la position du curseur
    v.addScene("scene-" + j, {
        "autoRotate": "-1",
        "autoRotate": false,
        "showZoomCtrl": false,
        "compass": false,
        "panorama": "../images/" + nomImg
    });
    v.addHotSpot({ "pitch": currentPitch, "yaw": currentYaw, "type": "scene", "text": "Nouvelle pièce", "id": "hotspot-" + j, "sceneId": "scene-" + j }, v.getScene());
    j++; // variable pour avoir des id automatique dynamique
    let table = [];
    table = [nomImg, 'Nouvelle pièce', currentPitch, currentYaw, 'hotspot-' + j, 'scene-' + j];
    socket.emit('uploadImageInfos', table);
});

//Event pour chaque click pour la mise à jour des actions 
window.addEventListener('click', function () {
    verifHotSpotsbdd();
    verifHotSpots();
    console.log(verifHotSpots())
    lastScene = v.getConfig().scene
    v.getConfig().hotSpotDebug = true; // cross hair pour pouvoir choisir la position des hotspot

})

//Fonction pour faire la transmition vers la bdd des hotspots
function verifHotSpotsbdd() {
    let i = 0;
    let arrayPitch = [];
    let arrayYaw = [];
    let arraySceneId = [];
    let arrayText = []
    let arrayId = [];
    let hotSpotsinfo = v.getConfig().hotSpots
    if (v.getConfig().scene == lastScene) { // si on ne change pas de scène on calcule toutes les infos des hotspots
        while (i < hotSpotsinfo.length) {

            arrayPitch[i] = hotSpotsinfo[i].pitch
            arrayYaw[i] = hotSpotsinfo[i].yaw
            arraySceneId[i] = hotSpotsinfo[i].sceneId
            arrayId[i] = hotSpotsinfo[i].id
            arrayText[i] = hotSpotsinfo[i].text
            i++;
        }
        return [arrayId, arrayText];
    } else { // on reset à 0 les hotspot car c'est une scène différente
        arrayPitch.length = 0;
        arrayYaw.length = 0;
        arraySceneId.length = 0;
        arrayId.length = 0;
        arrayText.length = 0;
    }
}
//Fonction pour vérifier le nombre de hotspot et pouvoir afficher dans la console les id des hotspot
function verifHotSpots() {
    let i = 0;
    let arrayText = []
    let arrayId = [];
    let hotSpotsinfo = v.getConfig().hotSpots
    if (v.getConfig().scene == lastScene) { // si on ne change pas de scène on calcule toutes les infos des hotspots
        while (i < hotSpotsinfo.length) {
            arrayId[i] = hotSpotsinfo[i].id
            arrayText[i] = hotSpotsinfo[i].text
            i++;
        }
        return [arrayId, arrayText];
    } else { // on reset à 0 les hotspot car c'est une scène différente
        console.log("Changement de scène, recliquez une fois")
        arrayId.length = 0;
        arrayText.length = 0;
    }
}
//Fonction pour enlever un hotspot
function delHotSpot() {
    const input = document.getElementById('hotSpotDel');
    v.removeHotSpot(input.value);
    socket.emit("remove", [input.value]);
}