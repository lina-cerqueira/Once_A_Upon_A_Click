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

function PlaySound(soundobj){
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj){
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}


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

$("#flo").on('mouseover', function(){
    this.src = "stayintheforesthover.png";
    $(".botao").css("opacity", "0.6");
});
$("#flo").on('mouseout', function(){
    this.src = "stayintheforest.png";
    $(".botao").css("opacity", "1");
});

$("#home").on('mouseover', function(){
    this.src = "returnhomehover.png";
    $(".botao").css("opacity", "0.6");
});
$("#home").on('mouseout', function(){
    this.src = "returnhome.png";
    $(".botao").css("opacity", "1");
});

$("#olde").on('mouseover', function(){
    this.src = "gowiththeoldladyhover.png";
    $(".botao").css("opacity", "0.6");
});
$("#olde").on('mouseout', function(){
    this.src = "gowiththeoldlady.png";
    $(".botao").css("opacity", "1");
});

$("#run2").on('mouseover', function(){
    this.src = "runtotheforesthover.png";
    $(".botao").css("opacity", "0.6");
});
$("#run2").on('mouseout', function(){
    this.src = "runtotheforest.png";
    $(".botao").css("opacity", "1");
});

$("#stay").on('mouseover', function(){
    this.src = "staywiththewitchhover.png";
    $(".botao").css("opacity", "0.6");
});
$("#stay").on('mouseout', function(){
    this.src = "staywiththewitch.png";
    $(".botao").css("opacity", "1");
});

$("#dads").on('mouseover', function(){
    this.src = "returntoparentshover.png";
    $(".botao").css("opacity", "0.6");
});
$("#dads").on('mouseout', function(){
    this.src = "returntoparents.png";
    $(".botao").css("opacity", "1");
});

$(".imagepick1").on('mouseover', function(){
    this.src = "baga1c.png";
    $(".botao").css("opacity", "0.6");
});
$(".imagepick1").on('mouseout', function(){
    this.src = "baga1.png";
    $(".botao").css("opacity", "1");
});

$(".imagepick2").on('mouseover', function(){
    this.src = "baga2c.png";
    $(".botao").css("opacity", "0.6");
});
$(".imagepick2").on('mouseout', function(){
    this.src = "baga2.png";
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
        $("#afterfogo").css('display', 'block');
    //extra, trocar quando tiver jogo implementado
    $("#parte3").css('display', 'block');
}
});

var contador3 = 0;
$("#fogo2").on('click', function(){
    contador3++;
if (contador3===1){
        this.src = "fogo2.jpg";
}
if (contador3===2){
        this.src = "fogo3.jpg";
}
if (contador3===3){
        this.src = "fogo4.jpg";
        $("#afterfogo2").css('display', 'block');
    //extra, trocar quando tiver jogo implementado
    $("#parte3").css('display', 'block');
}
});

var contador2 = 0;
$("#lobo").on('click', function(){
    contador2++;
if (contador2===1){
        this.src = "fogo2.jpg";
}
if (contador2===2){
        this.src = "fogo3.jpg";
}
if (contador2===3){
        this.src = "fogo4.jpg";
        $("#susto").css('display', 'block');
}
});

$("#susto").on('click', function(){
    $("#susto2").css('display', 'block');
});

$("#susto2").on('click', function(){
    $("#susto3").css('display', 'block');
});

$("#wake").on('click', function(){
    $("#parte2").css('display', 'block');
});

$("#run").on('click', function(){
    $("#parte2_1").css('display', 'block');
});

$("#flo").on('click', function(){
    $("#parte4").css('display', 'block');
});

$("#home").on('click', function(){
    $("#parte4_1").css('display', 'block');
});

$(".imagepick1").on('click', function(){
    $("#parte5").css('display', 'block');
});

$("#olde").on('click', function(){
    $("#parte6").css('display', 'block');
});

$("#osso").on('mouseover', function(){
    $("#dedoi").attr("src","dedo6.jpg");
});
$("#osso").on('mouseout', function(){
    $("#dedoi").attr("src","dedo.jpg");
});

$("#dedo1").on('mouseover', function(){
    $("#dedoi").attr("src","dedo5.jpg");
});
$("#dedo1").on('mouseout', function(){
    $("#dedoi").attr("src","dedo.jpg");
});

$("#dedo2").on('mouseover', function(){
    $("#dedoi").attr("src","dedo4.jpg");
});
$("#dedo2").on('mouseout', function(){
    $("#dedoi").attr("src","dedo.jpg");
});

$("#dedo3").on('mouseover', function(){
    $("#dedoi").attr("src","dedo3.jpg");
});
$("#dedo3").on('mouseout', function(){
    $("#dedoi").attr("src","dedo.jpg");
});

$("#dedo4").on('mouseover', function(){
    $("#dedoi").attr("src","dedo2.jpg");
});
$("#dedo4").on('mouseout', function(){
    $("#dedoi").attr("src","dedo.jpg");
});

$("#dedo5").on('mouseover', function(){
    $("#dedoi").attr("src","dedo1.jpg");
});
$("#dedo5").on('mouseout', function(){
    $("#dedoi").attr("src","dedo.jpg");
});

$("#osso").on('click', function(){
    $("#parte7").css('display', 'block');
});

$("#fruta1").on('mouseover', function(){
    $("#food").attr("src","comidafruta.jpg");
});
$("#fruta1").on('mouseout', function(){
    $("#food").attr("src","comida.jpg");
});

$("#pao1").on('mouseover', function(){
    $("#food").attr("src","comidapao.jpg");
});
$("#pao1").on('mouseout', function(){
    $("#food").attr("src","comida.jpg");
});

$("#carne1").on('mouseover', function(){
    $("#food").attr("src","comidacarne.jpg");
});
$("#carne1").on('mouseout', function(){
    $("#food").attr("src","comida.jpg");
});

$("#fruta1").on('click', function(){
    $("#parte4_0_1").css('display', 'block');
});

$("#pao1").on('click', function(){
    $("#parte4_0_2").css('display', 'block');
});

$("#carne1").on('click', function(){
    $("#parte4_0_3").css('display', 'block');
});

var comeca = 0;
var espaco = 0;
document.body.onkeydown = function(e){
            if(e.keyCode == 32){
                comeca++;
                espaco++;
                if(comeca==1){
                    tempo();
                }
            $(".spacebar").attr("src","spacebarpressed.png");
            }
        };
document.body.onkeyup = function(e){
            if(e.keyCode == 32){
            $(".spacebar").attr("src","spacebar.png");
            }
        };

function tempo(){
    setTimeout(function(){
        if(espaco>=10){
            console.log("conseguiste");
            $("#parte8").css('display', 'block');
        } else {
            console.log("perdeste");
            $("lost").css('display', 'block');
        }
    }, 5000);
};

$("#parents").on('mouseover', function(){
    $("#parents").attr("src","returntoparentshover.png");
});
$("#parents").on('mouseout', function(){
    $("#parents").attr("src","returntoparents.png");
});

$("#house").on('mouseover', function(){
    $("#house").attr("src","stayinthehousehover.png");
});
$("#house").on('mouseout', function(){
    $("#house").attr("src","stayinthehouse.png");
});

$("#parents").on('click', function(){
    $("#parte9").css('display', 'block');
});

$("#house").on('click', function(){
    $("#parte9_1").css('display', 'block');
});