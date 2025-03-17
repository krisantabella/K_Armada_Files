const container = document.querySelector(".container");
        const button = document.querySelector(".button");
        button.addEventListener("click", () => {
            container.classList.toggle("open");
            button.textContent = container.classList.contains("open") ? "Close" : "Open";
        });