//$("window").ready(function(){


//var $imagem = $('.imagem');
//$imagem.css(opacity,0);
//$imagem.waypoint(function(){
  //  $imagem.addClass('animated fadeIn');
    // $imagem.css('opacity',1)
//}});
  //  });


$(".speech").click(showText);

function showText(){
    console.log("funciona");
    $(".escondido").fadeIn(500);
}
var cont = 0;

$("#game div").on("click",function(){
	cont++;
$(this).fadeOut("slow", function() {	
	
$(this).fadeIn("slow");
	 cont--;
   });
	if(cont==3){
		$("#game div").remove();
	}
	
});