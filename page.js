function EnviarFormulário(){

    event.preventDefault();

    alert("Obrigado por preencher o formulário!");

}
document.getElementById("formulario").addEventListener("submit", EnviarFormulário)
