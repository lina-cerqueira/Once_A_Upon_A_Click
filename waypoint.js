$('logo').css('opacity', 0);
$('logo').waypoint(function () {
    $('logo').addClass('animated fadeIn');
    $('logo').css('opacity', 1);    
}, {offset: '50%'});

$('introducao').waypoint(function () {
    $('introducao').addClass('animated fadeIn');
    $('introducao').css('opacity', 1);   
}, {offset: '50%'});

$('image1').waypoint(function () {
    $('image1').addClass('animated fadeIn');
    $('image1').css('opacity', 1);
}, {offset: '50%'});