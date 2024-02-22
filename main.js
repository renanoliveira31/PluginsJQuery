$(document).ready(function()
    {
    $('#carrosel-imagens').slick(
        {autoplay: true}
    );
$('.menu-hamburguer').click(function()
{
$('nav').slideToggle();
})

$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(xx) xxxxx-xxxx'
})
$('form').validate ({
    rules: {
            nome: {
                required: true},
            email: {
                required: true, email: true},
            telefone: {
                required: true, minlength: 14},
            veiculoInteresse: {
                required:false}
    },
    messages: {
        nome: `Por favor, insira seu nome`
    },
    submitHandler: function(form) {
        console.log(form)
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalid();
    if(camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`)}
    }
})

$('.lista-veiculos button').click(function(){
    const destino = $('#contato');

    const nomeVeiculo = $(this).parent().find('h3').text();

    $('#veiculoInteresse').val(nomeVeiculo);

    $('html').animate({
        scrollTop: destino.offset().top
    },1000)

})

    });