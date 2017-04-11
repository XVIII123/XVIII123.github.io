

var scrolled = false;
function Setup(){


$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height() +50;
    
    $('#title, .slogan').css({
        'opacity': ((height - scrollTop) / (height))
    })
    if(scrollTop>740){

    	$("#hold").addClass("holding");
    
    }else{

    	$("#hold").removeClass("holding");


    }
});

}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
function switching(){
window.location.href = "Annie.html";

	
}
