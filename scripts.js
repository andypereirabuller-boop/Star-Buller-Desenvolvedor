const form = document.querySelector(".formulario-fale-conosco");
const mascara = document.querySelector(".mascara-formulario");







function cliqueiNoBotao(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function cliqueiNaMascara(){
    form.style.left = "-300px"
     form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}

AOS.init();

 window.addEventListener('load', () => {
            // Aguarda 3 segundos (tempo para o usuário curtir o impacto e o brilho)
            setTimeout(() => {
                const intro = document.getElementById('intro-container');
                intro.classList.add('desvanecer');
            }, 3000);
        });