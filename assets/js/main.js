$(document).ready(function () {
    var $doc = $(document);
    var $nav = $("nav");
    var $navbarFont = $("nav a");
    $(window).scroll(function () {
        if ($doc.scrollTop() > 690){
            $nav.addClass("fixed-nav")
            $navbarFont.addClass(" nav-font-color");
        } else{
            $nav.removeClass("fixed-nav");
            $navbarFont.removeClass("nav-font-color");
        }
    });
});
