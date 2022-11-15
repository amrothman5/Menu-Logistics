
$(document).ready(function(){
    $(".arabic").hide();
    $(".English").hide();
    $(".btnEng").click(function(){
        $(".arabic").hide();
        $(".English").show();
    });
    $(".btnArabic").click(function(){
        $(".English").hide();
        $(".arabic").show();

    });
});