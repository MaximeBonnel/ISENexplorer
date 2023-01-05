function upload(files) {
    socket.emit("upload", [files[0], 'imageClement.jpg']);
};

/* Pannellumm */