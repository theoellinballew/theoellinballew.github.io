$(document).ready(function() {

// alert("quaint curious lore");


$("#cuernocueva").draggable();

$("#two").hover(function(){
$("#small").show();
});

$("#as").click(function(){
$("#ghost").toggle();
});

$("#three").click(function(){
$(this).hide();
});

$("#searchtwo").hover(function(){
$("#ghost").css("border-bottom", "30px dashed black");
});

$("#small").hover(function(){
$("#ghost").css("border-bottom", "3px dotted black");
});

$("#searchtwo").hover(function(){
$("#quick").append("I WAS THREE YEARS OLD ONCE. ");
});


})
