'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    // Alterna entre os temas claro e escuro
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    
    // Obtém o nome da classe atual
    const className = document.body.className;
    
    // Atualiza o texto do botão
    if(className.includes('dark-theme')) {
        this.textContent = "Light";
    } else {
        this.textContent = "Dark";
    }
    
    // Mensagem de console para depuração
    console.log('Current theme class: ' + className);
    
    // Atualiza as cores do botão dinamicamente
    this.style.backgroundColor = getComputedStyle(document.body).getPropertyValue('--btnBg');
    this.style.color = getComputedStyle(document.body).getPropertyValue('--btnFontColor');
});