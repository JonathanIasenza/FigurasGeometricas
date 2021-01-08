$(document).ready(function () {
    // AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
    $('.category_list .category_item[category="all"]').addClass('ct_item-active');
    // FILTRANDO FIGURAS
    $('.category_item').click(function () {
        var catFigure = $(this).attr('category');
        console.log(catFigure);
        
        // AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');
        
        // OCULTANDO FIGURAS
        $('.item').css('transform', 'scale(0)');
        function hideFigure() {
            $('.item').hide();
        }
        
        setTimeout(hideFigure, 400);
        // MOSTRANDO FIGURAS
        function showFigure() {
            $('.item[category="' + catFigure + '"]').show();
            $('.item[category="' + catFigure + '"]').css('transform', 'scale(1)');
        }
        setTimeout(showFigure, 400);
    });
    $('.category_item[category="all"]').click(function () {
        
        function showAll() {
            $('.item').show();
            $('.item').css('transform', 'scale(1)');
        }
        setTimeout(showAll, 400);
    });
});

function addFigure(){
var divs = $("div.items").get().sort(function(){ 
  return Math.round(Math.random())-0.5; //random so we get the right +/- combo
}).slice(0,1);
$(divs).show().css('display', 'flex');
}


function removeFigure(){
    document.getElementById('remove-figures').style.display="none";
}

function removeFigure2(){
    document.getElementById('remove-figures2').style.display="none";
}

function removeFigure3(){
    document.getElementById('remove-figures3').style.display="none";
}

function removeFigure4(){
    document.getElementById('remove-figures4').style.display="none";
}

function removeFigure5(){
    document.getElementById('remove-figures5').style.display="none";
}

function removeFigure6(){
    document.getElementById('item6').style.display="none";
}

function removeFigure7(){
    document.getElementById('item7').style.display="none";
}

function removeFigure8(){
    document.getElementById('item8').style.display="none";
}

function removeFigure9(){
    document.getElementById('item9').style.display="none";
}

function removeFigure10(){
    document.getElementById('item10').style.display="none";
}


