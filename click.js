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


