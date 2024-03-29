



const THUMBNAILS = document.querySelectorAll(".thumbnail img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close");
const POPUP_IMG = document.querySelector(".popup__img");
const ARROW_LEFT = document.querySelector(".popup__arrow--left");
const ARROW_RIGHT = document.querySelector(".popup__arrow--right");

let currentImgIndex;

const showNextImg = () => {
	if (currentImgIndex === THUMBNAILS.length - 1) {
		currentImgIndex = 0;
	} else {
		currentImgIndex++;
	}
	POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
};

const showPreviousImg = () => {
	if (currentImgIndex === 0) {
		currentImgIndex = THUMBNAILS.length - 1;
	} else {
		currentImgIndex--;
	}
	POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
};

const closePopup = () => {
	POPUP.classList.add("fade-out");
	setTimeout(() => {
		POPUP.classList.add("hidden");
		POPUP.classList.remove("fade-out");
	}, 300);
};

THUMBNAILS.forEach((thumbnail, index) => {
	const showPopup = (e) => {
		POPUP.classList.remove("hidden");
		POPUP_IMG.src = e.target.src;
		currentImgIndex = index;
	};

	thumbnail.addEventListener("click", showPopup);
});

POPUP_CLOSE.addEventListener("click", closePopup);

ARROW_RIGHT.addEventListener("click", showNextImg);

ARROW_LEFT.addEventListener("click", showPreviousImg);

document.addEventListener("keydown", (e) => {
	if (!POPUP.classList.contains("hidden")) {
		if (e.code === "ArrowRight" || e.keyCode === 39) {
			showNextImg();
		}

		if (e.code === "ArrowLeft" || e.keyCode === 37) {
			showPreviousImg();
		}

		if (e.code === "Escape" || e.keyCode === 27) {
			closePopup();
		}
	}
});

POPUP.addEventListener("click", (e) => {
	if (e.target === POPUP) {
		closePopup();
	}
});


function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    if(el.classList.contains("offer")){
        return (
            rect.top >= -364 && rect.top <= el.offsetHeight - 250
        );
    }else if(el.classList.contains("main")){
        return (
            rect.top >= 150 - el.offsetHeight
        );
    }else 
    if(el.classList.contains("quali")){

        return (
            rect.top <= 250 &&  rect.top >= 400-el.offsetHeight
        );
    }else 
    if(el.classList.contains("gallery1")){
        return (
            rect.top <= 250  &&  rect.top >= 500 - el.offsetHeight
        );
    }else 
    if(el.classList.contains("contact")){
        return (
            rect.top <= el.offsetHeight
        );
    }
    
}




var hom_but = document.getElementById("home_button")
var serv_but = document.getElementById("service_button")
var quali_but = document.getElementById("quality_button")
var gallery_but = document.getElementById("gallery_button")
var contact_but = document.getElementById("contact_button")
var hom_but_sidebar = document.getElementById("home_button_sidebar")
var serv_but_sidebar = document.getElementById("service_button_sidebar")
var quali_but_sidebar = document.getElementById("quality_button_sidebar")
var gallery_but_sidebar = document.getElementById("gallery_button_sidebar")
var contact_but_sidebar = document.getElementById("contact_button_sidebar")
var hom = document.getElementById("home")
var serv = document.getElementById("service")
var quali = document.getElementById("quality")
var galler = document.getElementById("gallery")

var conta = document.getElementById("contact")



function isin(){
    tab= [hom,serv,quali,galler,conta]
    tab_sidebar = [hom_but_sidebar,serv_but_sidebar,quali_but_sidebar,gallery_but_sidebar,contact_but_sidebar]
    tab2= [hom_but,serv_but,quali_but,gallery_but,contact_but]
    

    tab.forEach((element,index) =>{
        if(isInViewport(element)){
            let allActive = document.querySelectorAll(".is_active");
            allActive.forEach((item)=>{
                item.classList.remove("is_active");})
            tab2[index].classList.add("is_active")
            tab_sidebar[index].classList.add("is_active")

        }
    })
    
    if(serv_but.classList.contains("is_active") && !serv.classList.contains("activated_offer")){
        
       


        serv.classList.add("activated_offer")

    }
    var galler_imgs = document.getElementsByClassName("im")
    
    if(gallery_but.classList.contains("is_active")  && !galler.classList.contains("activated_gallery")){
        
    
        galler.classList.add("activated_gallery")

        async function main() {
            for(let x =0;x < galler_imgs.length; x++ ){
                galler_imgs[x].classList.add("activated_gallery")

                await task();

            }
        }
        main()
    }
        
       

    }
const timer = ms => new Promise(res => setTimeout(res, ms))
async function task() { 
  await timer(200);
}

isin()
document.addEventListener("scroll",isin)

let clickMenu = document.querySelector("#clickMenu");
let hamburger = document.querySelector("#menu");
let sidebar = document.querySelector(".sidebar");
clickMenu.addEventListener("click", () => {
	hamburger.classList.toggle("is_active");
	sidebar.classList.toggle("is_active");
});

