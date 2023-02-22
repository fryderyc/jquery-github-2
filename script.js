$(document).ready(function () {
    let i = 1;
    $("#nav_toggle_button").click(function(e) {
        console.log(`i'm being clicked ${i++} times!`);
        $(".header_nav, .header_nav_menu").toggleClass("active");
    })
})