$(document).ready(function() {
 
//seleciona os elementos a com atributo name="modal"
$('a[name=modal]').click(function(e) {
//cancela o comportamento padr�o do link
e.preventDefault();
 
//armazena o atributo href do link
var id = $(this).attr('href');
 
//armazena a largura e a altura da tela
var maskHeight = $(document).height();
var maskWidth = $(window).width();
 
//Define largura e altura do div#mask iguais �s dimens�es da tela
$('#mask').css({'width':maskWidth,'height':maskHeight});
 
//efeito de transi��o
$('#mask').fadeIn(1000);
$('#mask').fadeTo("slow",0.8);
 
//armazena a largura e a altura da janela
var winH = $(window).height();
var winW = $(window).width();
//centraliza na tela a janela popup
$(id).css('top',  winH/2-$(id).height()/2);
$(id).css('left', winW/2-$(id).width()/2);
//efeito de transi��o
$(id).fadeIn(2000);
});
 
//se o bot�oo fechar for clicado
$('.window .close').click(function (e) {
//cancela o comportamento padr�o do link
e.preventDefault();
$('#mask, .window').hide();
});
 
//se div#mask for clicado
$('#mask').click(function () {
$(this).hide();
$('.window').hide();
});
});