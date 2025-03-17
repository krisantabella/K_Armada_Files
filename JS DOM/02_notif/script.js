function showNotification() {
    const container = document.getElementById("notification-container");

    // Notification div
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.innerHTML = `<span>You have a new message!</span>`;

    // Close button
    const closeButton = document.createElement("button");
    closeButton.classList.add("close-btn");
    closeButton.textContent = "X";
    
    // Close button functionality (using onclick)
    closeButton.onclick = function () {
        container.removeChild(notification);
    };

    // Append close button to notification
    notification.appendChild(closeButton);

    // Insert notification at the top of the container
    container.prepend(notification);

    // Auto-remove notification after 5 seconds
    setTimeout(() => {
        if (container.contains(notification)) {
            container.removeChild(notification);
        }
    }, 5000);
}
