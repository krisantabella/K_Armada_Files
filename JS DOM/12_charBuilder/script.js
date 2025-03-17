document.querySelectorAll('.armorpiece').forEach(item => {
    item.addEventListener('click', function () {
        let part = this.getAttribute('data-part'); 
        let selectedImage = this.getAttribute('src'); 
        
        document.getElementById(part).setAttribute('src', selectedImage);

        document.querySelectorAll(`[data-part='${part}']`).forEach(el => el.classList.remove('selected'));

        this.classList.add('selected');
    });
});