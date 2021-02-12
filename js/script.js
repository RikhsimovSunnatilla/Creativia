$(document).ready(function(){

    //Navbar menu links
    $(".nav__list-link").click(function(){
        $(".nav__list-link").removeClass("active");
        $(this).addClass("active");
    });

    //Mobile menu
    $(".nav__menu").on("click", function() {

        //Open Mobile menu
        $("ul.nav__list").addClass("open");
        $(".nav__overlay").css({"width": "100%"});

        //Close Mobile menu
        $(".nav__list-link, .nav__close, .nav__overlay").on("click", function() {
            $("ul.nav__list.open").removeClass("open");
            $(".nav__overlay").css({"width": "0"});
        });

    });

    //Accordion
    $(".accordion.active").children("p.accordion__text").slideDown(1);

    $(".accordion__header").click(function(){
        $(".accordion.active").children().children("i").removeClass().addClass("fas fa-plus-circle");
        $(".accordion.active").removeClass("active");
        $(this).parent().addClass("active");
        $(".accordion").children("p.accordion__text").slideUp("fast");
        $(this).next("p.accordion__text").slideDown("fast");
        $(this).children("i").removeClass().addClass("fas fa-minus-circle");
    });

    //Portfolio buttons
    $(".portfolio__btn").click(function(){
        $(".portfolio__btn").removeClass("active");
        $(this).addClass("active");
    });

})