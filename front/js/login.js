let signIn = document.getElementById("signIn");
let Username = document.getElementById("Username");
let Password = document.getElementById("Password");

signIn.addEventListener('submit', event => {
    event.preventDefault();

    socket.emit("password", [Username.value]);
    socket.on('resPassword', res => {
        if (res == Password.value){
            console.log("mdp correct");
            window.location.href = "/";
        } else {
            console.log("mdp incorrect");
        }
    })
});