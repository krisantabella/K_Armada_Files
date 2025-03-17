const characters = document.querySelectorAll('.character');
        const largeImage = document.querySelector('.large-image img');
        const characterName = document.getElementById('character-name');
        const characterDescription = document.getElementById('character-description');

        characters.forEach(character => {
            character.addEventListener('click', () => {
                document.querySelectorAll('.character img').forEach(img => img.classList.remove('selected'));
                character.querySelector('img').classList.add('selected');
                largeImage.src = character.getAttribute('data-image');
                characterName.textContent = character.getAttribute('data-name');
                characterDescription.textContent = character.getAttribute('data-description');
            });
        });