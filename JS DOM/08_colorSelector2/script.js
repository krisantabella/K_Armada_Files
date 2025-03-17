const buttons = document.querySelectorAll('.color-button');
const selectedColorText = document.getElementById('selected-color');
const container = document.querySelector('.container');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const color = event.target.getAttribute('data-color');
        document.body.style.background = color;
        container.style.background = color; 
        selectedColorText.textContent = color.charAt(0).toUpperCase() + color.slice(1);
        
        buttons.forEach(btn => btn.classList.remove('selected'));
        event.target.classList.add('selected');
    });
});
