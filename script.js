window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0);
});


function copyText() {
    const textToCopy = "adelaolivera090700@gmail.com"; // Texto que quieres copiar

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log('Texto copiado');
            showCopyFeedback();
        })
        .catch(err => console.error('Error al copiar el texto: ', err));
}

function showCopyFeedback() {
    const feedback = document.getElementById('copy-feedback');
    feedback.classList.add('show');
    
    // Ocultar el mensaje después de 2 segundos
    setTimeout(() => {
        feedback.classList.remove('show');
    }, 2000);
}
