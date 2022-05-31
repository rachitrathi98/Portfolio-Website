const header = document.querySelector('.header');

window.onscroll = function(){
var top = window.scrollY;
console.log(top);
if(top>=100){
header.classList.add('active')
}
else{
header.classList.remove('active');
}
}


   $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".nav-scroll").addClass("nav-strict");
        } else {
            $(".nav-scroll").removeClass("nav-strict");
        }
    });