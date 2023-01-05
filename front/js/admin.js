function upload(files) {
    socket.emit("upload", [files[0], 'imageClement.jpg']);
};

/*
let posi = document.getElementById('button');
posi.addEventListener('click', function () {
    document.getElementById('pitch').innerHTML = 'Pitch: ' + viewer.getPitch();
    document.getElementById('yaw').innerHTML = 'Yaw: ' + viewer.getYaw();
});

let admin = document.getElementById('admin-button');
admin.addEventListener('click', function () {
    currentPitch = viewer.getPitch();
    currentYaw = viewer.getYaw();
    //viewer.addScene("test", { "panorama": "../images/test.jpg", "hotSpots": [] });
    viewer.addHotSpot({ "pitch": currentPitch, "yaw": currentYaw, "type": "scene", "text": "je suis un crack", "sceneId": "test" }, viewer.getScene());

});

const panorama = document.getElementById("panorama");
const file = document.getElementById("file");
file.addEventListener("change", function (e) {
    const file = e.target.files[0];
    displayPhoto(URL.createObjectURL(file), file.name);
});


function afficherPos() {
    currentPitch = viewer.getPitch();
    currentYaw = viewer.getYaw();
    viewer.addHotSpot({
        "pitch": currentPitch,
        "yaw": currentYaw,
        "type": "scene",
        "text": "nouvelleScene",
        "sceneId": "test"
    },
        viewer.getScene());
    viewer.addScene('test', {
        "type": "equirectangular",
        "panorama": "../images/bde.;",
        "autoRotate": "-1",
        "autoRotate": false,
        "showZoomCtrl": false,
        "compass": false
    });
};


var selectElmt = document.getElementById("ListeLieux");
selectElmt.addEventListener("change", function () {
    let lieux = selectElmt.value;
    console.log(lieux);
});

let button = document.getElementById('button');
button.addEventListener("click", afficherPos);
*/
/* Pannellumm */
viewer = pannellum.viewer('panorama', {

    "default": {
        "firstScene": "exterieur",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
        "hotSpotDebug": true,
    },

    "scenes": {
        "exterieur": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "Dehors",
            "hfov": 110,
            "pitch": 5,
            "yaw": -160,
            "type": "equirectangular",
            "panorama": "../images/dehors.png",
            "hotSpots": [
                {
                    "pitch": 5,
                    "yaw": -160,
                    "type": "scene",
                    "text": "Rentrer dans le hall",
                    "sceneId": "hall"
                }
            ]

        },

        "hall": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "Hall Principal",
            "hfov": 120,
            "yaw": 39,
            "pitch": -10,
            "type": "equirectangular",
            "panorama": "../images/hall.png",
            "hotSpots": [
                {
                    "pitch": -6,
                    "yaw": 183,
                    "type": "scene",
                    "text": "Sortir de l'ISEN",
                    "sceneId": "exterieur"
                },
                {
                    "pitch": -13,
                    "yaw": 138,
                    "type": "scene",
                    "text": "Rentrer dans l'accueil",
                    "sceneId": "accueil"
                },
                {
                    "pitch": -16,
                    "yaw": 55,
                    "type": "scene",
                    "text": "Avancer dans le couloir",
                    "sceneId": "couloir1"
                },
                {
                    "pitch": -13,
                    "yaw": -6,
                    "type": "scene",
                    "text": "Salle de repos",
                    "sceneId": "piano"
                }
            ]
        },
        "accueil": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "Accueil",
            "hfov": 110,
            "yaw": 22,
            "pitch": -35,
            "type": "equirectangular",
            "panorama": "../images/accueil.png",

            "hotSpots": [
                {
                    "pitch": -18,
                    "yaw": -33,
                    "type": "scene",
                    "text": "Sortir de l'accueil",
                    "sceneId": "hall"
                },

            ]
        },
        "couloir1": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "Couloir",
            "hfov": 110,
            "yaw": 217,
            "pitch": 2,
            "type": "equirectangular",
            "panorama": "../images/couloir1.png",

            "hotSpots": [
                {
                    "pitch": -9,
                    "yaw": 33,
                    "type": "scene",
                    "text": "Revenir au Hall Principal",
                    "sceneId": "hall"
                },
                {
                    "pitch": -10,
                    "yaw": -143,
                    "type": "scene",
                    "text": "Avancer",
                    "sceneId": "couloir2"
                },
                {
                    "pitch": 21,
                    "yaw": 212,
                    "type": "scene",
                    "text": "Monter",
                    "sceneId": "8eme"
                },
                {
                    "pitch": -17,
                    "yaw": -20,
                    "type": "scene",
                    "text": "BDE",
                    "sceneId": "bde"
                }
                ,
                {
                    "pitch": -8,
                    "yaw": 50,
                    "type": "scene",
                    "text": "Salle de Repos",
                    "sceneId": "piano"
                }

            ]
        },
        "couloir2": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "Couloir",
            "hfov": 110,
            "yaw": 183,
            "pitch": -10,
            "type": "equirectangular",
            "panorama": "../images/couloir2.png",

            "hotSpots": [
                {
                    "pitch": -19,
                    "yaw": 170,
                    "type": "scene",
                    "text": "Amphithéâtre",
                    "sceneId": "jnd"
                },
                {
                    "pitch": -9,
                    "yaw": 74,
                    "type": "scene",
                    "text": "Reculer",
                    "sceneId": "couloir1"
                }

            ]
        },
        "bde": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "BDE",
            "hfov": 110,
            "yaw": -40,
            "pitch": -16,
            "type": "equirectangular",
            "panorama": "../images/bde.png",

            "hotSpots": [
                {
                    "pitch": -12,
                    "yaw": 103,
                    "type": "scene",
                    "text": "Sortir",
                    "sceneId": "couloir1"
                },

            ]
        },
        "jnd": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "Amphithéâtre JND",
            "hfov": 110,
            "yaw": -40,
            "pitch": -16,
            "type": "equirectangular",
            "panorama": "../images/jnd.png",

            "hotSpots": [
                {
                    "pitch": -7,
                    "yaw": 147,
                    "type": "scene",
                    "text": "Sortir",
                    "sceneId": "couloir2"
                },

            ]
        },
        "8eme": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "8ème étage",
            "hfov": 110,
            "yaw": -68,
            "pitch": -10,
            "type": "equirectangular",
            "panorama": "../images/8eme.png",

            "hotSpots": [
                {
                    "pitch": -12,
                    "yaw": 31,
                    "type": "scene",
                    "text": "Salle de Meeting",
                    "sceneId": "meeting"
                },
                {
                    "pitch": -6,
                    "yaw": 135,
                    "type": "scene",
                    "text": "Bibliothèque",
                    "sceneId": "biblio"
                },
                {
                    "pitch": -21,
                    "yaw": -69,
                    "type": "scene",
                    "text": "Descendre",
                    "sceneId": "couloir1"
                }

            ]
        },
        "meeting": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "Salle de meeting",
            "hfov": 110,
            "yaw": -40,
            "pitch": -16,
            "type": "equirectangular",
            "panorama": "../images/meeting.png",

            "hotSpots": [
                {
                    "pitch": -21,
                    "yaw": -207,
                    "type": "scene",
                    "text": "Sortir",
                    "sceneId": "8eme"
                },

            ]
        },
        "biblio": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "Bibliothèque",
            "hfov": 110,
            "yaw": -40,
            "pitch": -16,
            "type": "equirectangular",
            "panorama": "../images/biblio.png",

            "hotSpots": [
                {
                    "pitch": -7,
                    "yaw": -7,
                    "type": "scene",
                    "text": "Sortir",
                    "sceneId": "8eme"
                },

            ]
        },
        "piano": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "Salle de repos",
            "hfov": 110,
            "yaw": -40,
            "pitch": -16,
            "type": "equirectangular",
            "panorama": "../images/piano.png",

            "hotSpots": [
                {
                    "pitch": -13,
                    "yaw": 61,
                    "type": "scene",
                    "text": "Couloir",
                    "sceneId": "couloir1"
                },
                {
                    "pitch": -17,
                    "yaw": -119,
                    "type": "scene",
                    "text": "Fab Lab",
                    "sceneId": "fab"
                },
                {
                    "pitch": -10,
                    "yaw": 28,
                    "type": "scene",
                    "text": "Adicode",
                    "sceneId": "adicode"
                },

            ]
        },
        "adicode": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "Adicode",
            "hfov": 110,
            "yaw": -40,
            "pitch": -16,
            "type": "equirectangular",
            "panorama": "../images/adicode.png",
            "hotSpots": [
                {
                    "pitch": -6,
                    "yaw": 133,
                    "type": "scene",
                    "text": "Sortir",
                    "sceneId": "piano"
                },

            ]
        },
        "fab": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "FabLab",
            "hfov": 110,
            "yaw": -40,
            "pitch": -16,
            "type": "equirectangular",
            "panorama": "../images/fab.png",

            "hotSpots": [
                {
                    "pitch": -22,
                    "yaw": 133,
                    "type": "scene",
                    "text": "Sortir",
                    "sceneId": "piano"
                },

            ]
        },
    }
});