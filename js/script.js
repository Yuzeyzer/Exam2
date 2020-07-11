new WOW().init();
$(document).ready(function(){
$(".mobile-btn").on("click", function(){
		$(this).toggleClass("mobile-active");
		$(".menu").toggleClass("show-menu")
});
$(".menu-items").on("click", function(){
		$(".menu").removeClass("show-menu");
		$(".mobile-btn").removeClass("mobile-active")
})
})