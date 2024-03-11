$("document").ready(function(){
    $(".dropdown").click(function(){
        $(this).next(".dropdown-menu").slideToggle("fast");

        $(this).parent("li").siblings('li').children(".dropdown-menu").slideUp("fast");

    })
    $(".toggle-btn").click(function(){
        $(".slidebar").toggleClass("none");
        $(".text span").toggleClass("none");
        $(".slide-navi h4").toggleClass("none");
        $(".main-content").toggleClass("none");
    })
})