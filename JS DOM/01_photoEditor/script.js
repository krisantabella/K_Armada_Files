function updateName() {
    let newName = document.getElementById("nameInput").value;
    if (newName.trim() !== "") {
        document.getElementById("profileName").innerText = newName;
    }
}

function updateBio() {
    let newBio = document.getElementById("bioInput").value;
    if (newBio.trim() !== "") {
        document.getElementById("profileBio").innerText = newBio;
    }
}

function updateImage() {
    let newImage = document.getElementById("imageInput").value;
    if (newImage.trim() !== "") {
        document.getElementById("profileImage").setAttribute("src", newImage);
    }
}

function updateBackground() {
    let newColor = document.getElementById("bgColorInput").value;
    document.getElementById("profileCard").style.backgroundColor = newColor;
}
