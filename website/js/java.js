
// SOBRE
function openGaleria() {
	//document.getElementById("content_popup_sobre").style.display = "block";
	document.getElementById("sub_content_galeria").style.height = "100%";
	document.getElementById("topo").style.overflowY = "hidden";
	window.location.hash = "#galeria";
}

function openMudardevida() {
	//document.getElementById("content_popup_sobre").style.display = "block";
	document.getElementById("sub_content").style.height = "100%";
	document.getElementById("topo").style.overflowY = "hidden";
	document.getElementById("mudardevida_cartaz").style.display = "block";
	if ($(window).width() < 900) {
		document.getElementById("info_mudardevida").style.display = "block";
	} else {
		document.getElementById("info_mudardevida").style.display = "inline-block";
	}
	window.location.hash = "#mudardevida";
}

function openPeregrinacao() {
	//document.getElementById("content_popup_sobre").style.display = "block";
	document.getElementById("sub_content").style.height = "100%";
	document.getElementById("topo").style.overflowY = "hidden";
	document.getElementById("peregrinacao_cartaz").style.display = "block";
	if ($(window).width() < 900) {
		document.getElementById("info_peregrinacao").style.display = "block";
	} else {
		document.getElementById("info_peregrinacao").style.display = "inline-block";
	}
	window.location.hash = "#peregrinacao";
}

function openPerdidos() {
	//document.getElementById("content_popup_sobre").style.display = "block";
	document.getElementById("sub_content").style.height = "100%";
	document.getElementById("topo").style.overflowY = "hidden";
	document.getElementById("perdidos_cartaz").style.display = "block";
	if ($(window).width() < 900) {
		document.getElementById("info_perdidos").style.display = "block";
	} else {
		document.getElementById("info_perdidos").style.display = "inline-block";
	}
	window.location.hash = "#perdidos";
}

function openLuzobscura() {
	//document.getElementById("content_popup_sobre").style.display = "block";
	document.getElementById("sub_content").style.height = "100%";
	document.getElementById("topo").style.overflowY = "hidden";
	document.getElementById("luzobscura_cartaz").style.display = "block";
	if ($(window).width() < 900) {
		document.getElementById("info_luzobscura").style.display = "block";
	} else {
		document.getElementById("info_luzobscura").style.display = "inline-block";
	}
	window.location.hash = "#luzobscura";
}

function openRealidade() {
	//document.getElementById("content_popup_sobre").style.display = "block";
	document.getElementById("sub_content").style.height = "100%";
	document.getElementById("topo").style.overflowY = "hidden";
	document.getElementById("realidade_cartaz").style.display = "block";
	if ($(window).width() < 900) {
		document.getElementById("info_realidade").style.display = "block";
	} else {
		document.getElementById("info_realidade").style.display = "inline-block";
	}
	window.location.hash = "#intericiosdarealidade";
}

function openFabricadonada() {
	//document.getElementById("content_popup_sobre").style.display = "block";
	document.getElementById("sub_content").style.height = "100%";
	document.getElementById("topo").style.overflowY = "hidden";
	document.getElementById("fabricadonada_cartaz").style.display = "block";
	if ($(window).width() < 900) {
		document.getElementById("info_fabricadonada").style.display = "block";
	} else {
		document.getElementById("info_fabricadonada").style.display = "inline-block";
	}
	window.location.hash = "#fabricadonada";
}

function openAlberto() {
	//document.getElementById("content_popup_sobre").style.display = "block";
	document.getElementById("sub_content").style.height = "100%";
	document.getElementById("topo").style.overflowY = "hidden";
	document.getElementById("alberto_cartaz").style.display = "block";
	if ($(window).width() < 900) {
		document.getElementById("info_alberto").style.display = "block";
	} else {
		document.getElementById("info_alberto").style.display = "inline-block";
	}
	window.location.hash = "#alberto";
}

function openTreblinka() {
	//document.getElementById("content_popup_sobre").style.display = "block";
	document.getElementById("sub_content").style.height = "100%";
	document.getElementById("topo").style.overflowY = "hidden";
	document.getElementById("treblinka_cartaz").style.display = "block";
	if ($(window).width() < 900) {
		document.getElementById("info_treblinka").style.display = "block";
	} else {
		document.getElementById("info_treblinka").style.display = "inline-block";
	}
	window.location.hash = "#treblinka";
}

function openCoracaonegro() {
	//document.getElementById("content_popup_sobre").style.display = "block";
	document.getElementById("sub_content").style.height = "100%";
	document.getElementById("topo").style.overflowY = "hidden";
	document.getElementById("coracaonegro_cartaz").style.display = "block";
	if ($(window).width() < 900) {
		document.getElementById("info_coracaonegro").style.display = "block";
	} else {
		document.getElementById("info_coracaonegro").style.display = "inline-block";
	}
	window.location.hash = "#coracaonegro";
}

function closeSubcontent() {
document.getElementById("sub_content").style.height = "0%";
document.getElementById("topo").style.overflowY = "scroll";
document.getElementById("sub_content_galeria").style.height = "0%";
setTimeout(function() {
	document.getElementById("mudardevida_cartaz").style.display = "none";
	document.getElementById("info_mudardevida").style.display = "none";
	document.getElementById("perdidos_cartaz").style.display = "none";
	document.getElementById("info_perdidos").style.display = "none";
	document.getElementById("luzobscura_cartaz").style.display = "none";
	document.getElementById("info_luzobscura").style.display = "none";
	document.getElementById("realidade_cartaz").style.display = "none";
	document.getElementById("info_realidade").style.display = "none";
	document.getElementById("fabricadonada_cartaz").style.display = "none";
	document.getElementById("info_fabricadonada").style.display = "none";
	document.getElementById("alberto_cartaz").style.display = "none";
	document.getElementById("info_alberto").style.display = "none";
	document.getElementById("treblinka_cartaz").style.display = "none";
	document.getElementById("info_treblinka").style.display = "none";
	document.getElementById("coracaonegro_cartaz").style.display = "none";
	document.getElementById("info_coracaonegro").style.display = "none";
	document.getElementById("peregrinacao_cartaz").style.display = "none";
	document.getElementById("info_peregrinacao").style.display = "none";
}, 1000);
}

var checkMenu = 0;
function openMenu() {
		document.getElementById("slide_menu").style.marginLeft = "0%";
		document.getElementById("topo").style.overflowY = "hidden";
		setTimeout(function() {
			document.getElementById("botao_menu_dentro").style.display = "block"
		}, 1000);
		checkMenu = 1;

}

function closeMenu() {
		document.getElementById("slide_menu").style.marginLeft = "100%";
		document.getElementById("topo").style.overflowY = "scroll";
		setTimeout(function(){
			document.getElementById("botao_menu_dentro").style.display = "none";
		}, 1000);
		checkMenu = 0;
}

// FIM SOBRE
function checkWindow() {
	if (($(window).width() < 919) && (checkMenu === 0) ) {
		document.getElementById("botao_menu").style.display = "block";
	} else {
		document.getElementById("botao_menu").style.display = "none";
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


function checkHeight() {
	console.log($(window).width());
	//if($(window).width() > 919) {
		document.getElementById("main_page_background").style.height = $(window).height() + "px";
		//document.getElementById("page_1").style.height = $(window).height() + "px";
		document.getElementById("body-id").style.height = $(window).height() + "px";
		document.getElementById("page_1").style.top = $(window).height() + "px";
		console.log("WINDOW HEIGHT: ", $(window).height(), "px");
		console.log("MAIN_PAGE_BACKGROUND HEIGHT: ", document.getElementById("main_page_background").style.height);
		console.log("PAGE_1 HEIGHT: ", document.getElementById("page_1").style.height);
		console.log("BODY ID: ", document.getElementById("body-id").style.height);

	//}
}


//START SLIDERS

$(document).ready(function(){


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


});
 //SCROLL DETECT
 /*$(window).scroll(function() {


  CHEGAR A DETERMINADO ID EM SCROLL
  var hT = $('#foto1').offset().top,
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
	}


});*/

 //END





$(window).on('hashchange',function(){
//LOCATION PARA BACK/FORWARD BUTTONS
    if(window.location.hash == "#home") {
			closeSubcontent();
	}else {

		if(window.location.hash == "#mudardevida") {
			openMudardevida();
		}
		if(window.location.hash == "#perdidos") {
			openPerdidos();
		}

		if(window.location.hash == "#luzobscura") {
			openLuzobscura();
		}
		if(window.location.hash == "#intericiosdarealidade") {
			openRealidade();
		}
		if(window.location.hash == "#fabricadonada") {
			openFabricadonada();
		}
		if(window.location.hash == "#alberto") {
			openAlberto();
		}
		if(window.location.hash == "#treblinka") {
			openTreblinka();
		}
		if(window.location.hash == "#coracaonegro") {
			openCoracaonegro();
		}
		if(window.location.hash == "#galeria") {
			openGaleria();
		}
		if(window.location.hash == "#peregrinacao") {
			openPeregrinacao();
		}
	}
	//END
});


window.onload = function (event) {
	//LOCATION PARA REFRESH
	    if(window.location.hash == "#mudardevida") {
			openMudardevida();
		}
		else if(window.location.hash == "#perdidos") {
			openPerdidos();
		}
		else if(window.location.hash == "#luzobscura") {
			openLuzobscura();
		}
		else if(window.location.hash == "#intericiosdarealidade") {
			openRealidade();
		}
		else if(window.location.hash == "#fabricadonada") {
			openFabricadonada();
		}
		else if(window.location.hash == "#alberto") {
			openAlberto();
		}
		else if(window.location.hash == "#treblinka") {
			openTreblinka();
		}
		 else if(window.location.hash == "#coracaonegro") {
			openCoracaonegro();
		} else if(window.location.hash == "#galeria") {
			openGaleria();
		} else if(window.location.hash == "#peregrinacao") {
			openPeregrinacao();
		} else {
	window.location.hash = "#home";
		}
		//END

		//MUDAR BACKGROUND CONFORME SLIDE POSITION





};


//HASH LOCATIONS
function addHashHome() {
	window.location.hash = "#home";
}

//END
