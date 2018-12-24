$(document).ready(function(){
    let clicked=false;
    $(".btn-slider").click(function(){
        $(".panel").slideToggle("slow");
        $(".slider").toggleClass('btn-hide');
        $(".slide").toggleClass('btn-hide');
        $(".btn-slider").toggleClass('active');
        if (!clicked) {
            $(".main-page").animate({
                top: "38px"
            }, 700);
            $(".btn-slider").animate({
                top:"10px"
            },700);
            clicked=true;
        }
        else {
            $(".main-page").animate({
                top: "74px"
            }, 700);
            $(".btn-slider").animate({
                top:"30px"
            },700);
            clicked=false;
        }
        return false;
    });
});