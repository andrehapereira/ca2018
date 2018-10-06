var menuOpen = false;
// SOBRE
function openGaleria() {
	//document.getElementById("content_popup_sobre").style.display = "block";
	document.getElementById("sub_content_galeria").style.height = "100%";
	document.getElementById("topo").style.overflowY = "hidden";
	window.location.hash = "#galeria";
}

function openSubContent(arrIndex) {
	document.getElementById("sub_content").style.height = "100%";
	document.getElementById("topo").style.overflowY = "hidden";
	document.getElementById("sub_content").innerHTML = "";
	var subContentHtml = "<div id='close_content' onclick='closeSubcontent(); addHashHome();'></div>";
	subContentHtml += "<div id='content_pos'>";
	subContentHtml += "<div class='container-fluid'>";
	subContentHtml += "<div class='row'>";
	subContentHtml += "<div class='col-xs-12 col-sm-12 col-md-5'>";
	console.log(movieObjArr[arrIndex].img);
	subContentHtml += "<img style='width:100%; max-width: 500px;' src='" + movieObjArr[arrIndex].img + "'>";
	subContentHtml += "</div>";
	subContentHtml += "<div class='col-xs-12 col-sm-12 col-md-7'>";
	for(var key in movieObjArr[arrIndex]) {
		if(key == "img") {
			continue;
		}
		subContentHtml += "<div style='margin-bottom: 1%;'>" + key.toUpperCase() + ": <span>" + movieObjArr[arrIndex][key] + "</span></div>";
	}
	subContentHtml += "</div>";
	subContentHtml += "</div>";
	subContentHtml += "</div>";
	subContentHtml += "</div>";
	//console.log(subContentHtml)
	document.getElementById("sub_content").innerHTML = subContentHtml;
	window.location.hash = "#" + arrIndex;
}

function closeSubcontent() {
	document.getElementById("sub_content").style.height = "0%";
	document.getElementById("topo").style.overflowY = "scroll";
	window.location.hash = "#home";
//document.getElementById("sub_content_galeria").style.height = "0%";
}


/*function toggleMenu() {
		document.getElementById("slide_menu").style.marginLeft = "0%";
		document.getElementById("topo").style.overflowY = "hidden";
		setTimeout(function() {
			document.getElementById("botao_menu_dentro").style.display = "block"
		}, 1000);
}*/


/*function closeMenu() {
		document.getElementById("slide_menu").style.marginLeft = "100%";
		document.getElementById("topo").style.overflowY = "scroll";
		setTimeout(function(){
			document.getElementById("botao_menu_dentro").style.display = "none";
		}, 1000);
		checkMenu = 0;
}*/

// FIM SOBRE
function checkWindow() {
	if (($(window).width() < 919)) {
		document.getElementById("botao_menu").style.display = "block";
		document.getElementById("pos_header").style.display = "none";
	} else {
		document.getElementById("botao_menu").style.display = "none";
		document.getElementById("pos_header").style.display = "block";
		$('#slide_menu').css('margin-left', "100%");
		if(menuOpen) {
			$('#topo').css('overflow-y', "scroll");
		}
		menuOpen = false;
	}
}

/*function checkSlide() {
	if($(window).width() > $(window).height()) {
		document.getElementById("content_galeria").style.width = "85%";
		document.getElementById("close_content_galeria").style.marginBottom = "5%";
} else {
	document.getElementById("content_galeria").style.width = "100%";
	document.getElementById("close_content_galeria").style.marginBottom = "15%";
}
}*/
/*$(window).on('resize', function(){
	console.log('Window changed');

})*/


var bodyId;
var centerImgPadding;
var spanPad = $('.span-pad').toArray();
function checkHeight() {
	//console.log($(window).width());
	//if($(window).width() > 919) {
		bodyId  = $(window).height() - 150;
		document.getElementById("main_page_background").style.height = $(window).height() + "px";
		document.getElementById("body-id").style.height = bodyId + "px";
		document.getElementById("wrapper").style.top = $(window).height()  + "px";
		centerImgPadding = $('.more-info').height() - $('.span-pad').height();
		$('.span-pad').css('top', centerImgPadding / 2 + "px");
		//CENTER IMAGE VERTICALLY IN DIV
		/*console.log("WINDOW HEIGHT: ", $(window).height(), "px");
		console.log("MAIN_PAGE_BACKGROUND HEIGHT: ", document.getElementById("main_page_background").style.height);
		console.log("PAGE_1 HEIGHT: ", document.getElementById("page_1").style.height);
		console.log("BODY ID: ", document.getElementById("body-id").style.height);*/

	//}
}


//START SLIDERS

$(document).ready(function(){

createMoviesHTML();
	var countTimerCheckWindow = setInterval(function () {
            checkWindow();
						//checkSlide();
						checkHeight();
					}, 200);

		$('.slider-for').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: true,
		  fade: true,
		  asNavFor: '.slider-nav'
		});

		$('.slider-nav').slick({
		  slidesToShow: 5,
		  slidesToScroll: 1,
		  asNavFor: '.slider-for',
		  dots: false,
		  centerMode: true,
		  focusOnSelect: true,
		  arrows: false
		});


		$('.menu-selected').click(function() {
			if(!menuOpen) {
				$('#slide_menu').css('margin-left', 0);
				$('#topo').css('overflow-y', "hidden");
				menuOpen = true;
			} else {
				$('#slide_menu').css('margin-left', "100%");
				$('#topo').css('overflow-y', "scroll");
				menuOpen = false;
			}
		});

});
 //SCROLL DETECT

$(window).scroll(function() {
	var scrollOpacityPos = $(window).height() / 4;
	$('.body').css('opacity', 1 - $(window).scrollTop() / $(window).height() * 2);
	$('.after_body').css('opacity', 1 - $(window).scrollTop() / $(window).height() * 6);
	$('.body').css('background-size', 70 + $(window).scrollTop() / $(window).height() * 6 + "%");
	if($(window).scrollTop() >= $(window).height() - $('#pos_header').height() * 3) {
			$('#pos_header').addClass('menu-color');
	} else {
		$('#pos_header').removeClass('menu-color');
	}
  //CHEGAR A DETERMINADO ID EM SCROLL
  /*var hT = $('#foto1').offset().top,
       hH = $('#foto1').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){ code here }
       if ($(window).width() > 900) {
			if ( $(window).scrollTop() > 500 ) {
				document.getElementById("scroll_top").style.display = "block";
			}else{
				document.getElementById("scroll_top").style.display = "none";
			}
	   } else {
			document.getElementById("scroll_top").style.display = "none";
	}*/


});

 //END





$(window).on('hashchange',function(){
//LOCATION PARA BACK/FORWARD BUTTONS
	console.log("change");
	var hash = window.location.hash;
	for(var i = 0; i < movieObjArr.length; i++) {
		if(hash == "#" + i) {
			openSubContent(i);
			console.log('opened');
			break;
		}
	}
    if(window.location.hash == "#home") {
			closeSubcontent();
	}
});


window.onload = function (event) {
	//LOCATION PARA REFRESH
	var hash = window.location.hash;
	for(var i = 0; i < movieObjArr.length; i++) {
	 if(hash == "#" + i) {
		 openSubContent(i);
		 console.log('opened');
		 break;
	 }
 }
if(window.location.hash == "#home") {
		 closeSubcontent();
 }
		//END

		//MUDAR BACKGROUND CONFORME SLIDE POSITION





};


//HASH LOCATIONS
function addHashHome() {
	window.location.hash = "#home";
}

//END
