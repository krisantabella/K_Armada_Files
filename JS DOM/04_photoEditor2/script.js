document.getElementById("updateProfileBtn").addEventListener("click", function () {
    const newName = document.getElementById("nameInput").value.trim();
    const newBio = document.getElementById("bioInput").value.trim();
    const newImage = document.getElementById("imageInput").value.trim();
    const newColor = document.getElementById("bgColorInput").value;

    if (newName) {
        document.getElementById("profileName").textContent = newName;
    }

    if (newBio) {
        document.getElementById("profileBio").textContent = newBio;
    }

    if (newImage) {
        document.getElementById("profileImage").setAttribute("src", newImage);
    }

    document.getElementById("profileCard").style.backgroundColor = newColor;
});
