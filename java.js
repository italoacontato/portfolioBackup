// Seleciona todos os elementos do grid
const gridItems = document.querySelectorAll('.grid-item');

// Adiciona evento de clique em cada item
gridItems.forEach(item => {
    item.addEventListener('click', () => {
        const modalId = item.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = "block";
    });
});

// Seleciona todos os botões de fechar
const closeButtons = document.querySelectorAll('.close');

closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        modal.style.display = "none";
    });
});

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
});

// MOSTRAR MAIS

const btnMostrarMais = document.querySelector('#btn_mostrar_mais');
const portfolioContainer = document.querySelector('#portfolio-container');

btnMostrarMais.addEventListener('click' , ()=>{
    portfolioContainer.classList.toggle('mostrar');

    if(portfolioContainer.classList.contains('mostrar')){
        btnMostrarMais.innerText = 'Mostrar menos';

    }
    else{
        btnMostrarMais.innerText = 'Mostrar mais';
    }

});


