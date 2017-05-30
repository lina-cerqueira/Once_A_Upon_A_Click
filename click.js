 function showImagesandText(el) {
        var windowHeight = jQuery( window ).height();
        $(el).each(function(){
            var thisPos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (topOfWindow + windowHeight - 250 > thisPos ) {
                $(this).addClass("fadeIn");
            }
        });
    }
    $(document).ready(function(){
            showImagesandText('.image');
        showImagesandText('.text');
            
    });
    $(window).scroll(function() {
            showImagesandText('.image');
        showImagesandText('.text');
      
    });

$("#start").on('mouseover', function(){
    this.src = "click.jpg";
    $("#comeco").css("opacity", "0.6");
});
$("#start").on('mouseout', function(){
    this.src = "normal.jpg";
    $("#comeco").css("opacity", "1");
});

$("#wake").on('mouseover', function(){
    this.src = "acordado.png";
    $(".botao").css("opacity", "0.6");
});
$("#wake").on('mouseout', function(){
    this.src = "acordar.png";
    $(".botao").css("opacity", "1");
});

$("#run").on('mouseover', function(){
    this.src = "fugir.png";
    $(".botao").css("opacity", "0.6");
});
$("#run").on('mouseout', function(){
    this.src = "foge.png";
    $(".botao").css("opacity", "1");
});

$("#return").on('mouseover', function(){
    this.src = "returnhomehover.png";
    $(".botao").css("opacity", "1");
});
$("#return").on('mouseout', function(){
    this.src = "returnhome.png";
    $(".botao").css("opacity", "1");
});

$("#forest").on('mouseover', function(){
    this.src = "runtotheforesthover.png";
    $(".botao").css("opacity", "1");
});
$("#forest").on('mouseout', function(){
    this.src = "runtotheforest.png";
    $(".botao").css("opacity", "1");
});

$("#oldlady").on('mouseover', function(){
    this.src = "gowiththeoldladyhover.png";
    $(".botao").css("opacity", "1");
});
$("#oldlady").on('mouseout', function(){
    this.src = "gowiththeoldlady.png";
    $(".botao").css("opacity", "1");
});

$("#stayinforest").on('mouseover', function(){
    this.src = "stayintheforesthover.png";
    $(".botao").css("opacity", "1");
});
$("#stayinforest").on('mouseout', function(){
    this.src = "stayintheforest.png";
    $(".botao").css("opacity", "1");
});

$("#returntoparents").on('mouseover', function(){
    this.src = "returntoparentshover.png";
    $(".botao").css("opacity", "1");
});
$("#returntoparents").on('mouseout', function(){
    this.src = "returntoparents.png";
    $(".botao").css("opacity", "1");
});

$("#stayinthehouse").on('mouseover', function(){
    this.src = "stayinthehousehover.png";
    $(".botao").css("opacity", "1");
});
$("#stayinthehouse").on('mouseout', function(){
    this.src = "stayinthehouse.png";
    $(".botao").css("opacity", "1");
});



var contador = 0;
$("#fogo").on('click', function(){
    contador++;
if (contador===1){
        this.src = "fogo2.jpg";
}
if (contador===2){
        this.src = "fogo3.jpg";
}
if (contador===3){
        this.src = "fogo4.jpg";
        $("#paragrafo13").css('display', 'block');
        $("#uimage").css('display', 'initial');
    $("#uimage3").css('display', 'initial');
    $("#uimage4").css('display', 'initial');
        $("#paragrafo14").css('display', 'block');
}
});


