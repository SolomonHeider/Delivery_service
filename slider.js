$(document).ready(function(){
    $(".btn-slide").click(function(){
        $(".panel").slideToggle("slow");
        $(".slider").toggleClass('btn-hide');
        $(".slide").toggleClass('btn-hide');
        $(".btn-slider").toggleClass('active');
        return false;
    });
    $(".btn-slider").click(function(){
        $(".panel").slideToggle("slow");
        $(".slider").toggleClass('btn-hide');
        $(".slide").toggleClass('btn-hide');
        $(".btn-slider").toggleClass('active');
        return false;
    });  
});