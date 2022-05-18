let headerBurger = $('.header__burger')[0];
let signingServiceBtn = $('.header__signing-service-btn')[0];
let burgerContent = $('.header__burger-content-zone');
let openHeaderBurger = false;

headerBurger.onclick = function () {
    // смена значка
    openHeaderBurger = !openHeaderBurger;
    (openHeaderBurger) ? headerBurger.src = 'UI Kit/Icons/BurgerClouse.svg' : headerBurger.src = 'UI Kit/Icons/Burger.svg'
    
    // смена классов для кнопки запись на сервис (старая реализация)
    //signingServiceBtn.classList.toggle('header__signing-service-btn-active');

    // смена свойств кнопки
    if (openHeaderBurger){
        $('.header__signing-service-btn').animate({padding: '50px 72.5px', borderRadius: 0, marginTop: '47px' ,marginRight: '-130px'}, 300)
        $('.header__burger').animate({marginTop: '-47px'}, 300)
    } else {
        $('.header__signing-service-btn').animate({padding: '12px 20px',  borderRadius: '7px', marginTop: '0px', marginRight: 0 }, 300);
        $('.header__burger').animate({marginTop: '0px'}, 300)
    }

    
    // смена класса для содержимого burger-content
    if (burgerContent.hasClass('header__burger-content-zone-false')) {  
        burgerContent.removeClass('header__burger-content-zone-false');  
        setTimeout(function () {  
            burgerContent.removeClass('header__burger-content-zone-visuallyhidden');  
        }, 0.3);  
    } else {  
        burgerContent.addClass('header__burger-content-zone-visuallyhidden'); 
        burgerContent.one('transitionend', function(e) {  
            burgerContent.addClass('header__burger-content-zone-false');  
    });  
    }
}

let servicesLink = document.querySelector(".header__services-link");
let expandNavigation = $('.expand-navigation'); //document.querySelector(".expandNavigation");
let openNavLinksBool = false;

// кнопка "услуги" 
servicesLink.onclick = function () {
    // смена значка
    openNavLinksBool = !openNavLinksBool;
    (openNavLinksBool) ? servicesLink.children[1].src = 'UI Kit/Icons/DropdawnOpend.svg' : servicesLink.children[1].src = 'UI Kit/Icons/Dropdawn.svg'

    // анимация услуг
    //let expandNavigation = $('.expand-navigation');     //expand-navigation-false hidden
    if (expandNavigation.hasClass('expand-navigation-false')) {          //expand-navigation-visuallyhidden visuallyhidden
        expandNavigation.removeClass('expand-navigation-false');  
        setTimeout(function () {  
            expandNavigation.removeClass('expand-navigation-visuallyhidden');  
        }, 0.3);  
    } else {  
        expandNavigation.addClass('expand-navigation-visuallyhidden');   
        expandNavigation.one('transitionend', function(e) {  
            expandNavigation.addClass('expand-navigation-false');  
    });  
    }
    
} 

let arrOfSlides = [$('#first-carusel-img'), $('#second-carusel-img'), $('#third-carusel-img')];
let currentSlide = 0; 
let caruselArrowLeft = $("#carusel-arrow-left")[0];
let caruselArrowRight = $('#carusel-arrow-right')[0];

caruselArrowLeft.onclick = function () {
    currentSlide = currentSlide % 3;

    arrOfSlides[currentSlide].animate({marginLeft: '-1000px', opacity: 0}, 600)

    setTimeout(function () {  
        arrOfSlides[currentSlide].removeClass('slider-img-active')
        currentSlide = currentSlide + 1;
    }, 300);
    
    arrOfSlides[(currentSlide+1)%3].addClass('slider-img-active')     
    arrOfSlides[(currentSlide+1)%3].animate({marginLeft: '1000px', opacity: 0}, 0) //marginTop: `-${$('.main-section__slider').height()}`}, 0)
    
    arrOfSlides[(currentSlide+1)%3].animate({marginLeft: '0', opacity: '100' }, 300)   
}

caruselArrowRight.onclick = function () {
    const reversSlides = [0, 1, 2]
    currentSlide = currentSlide % 3;

    //arrOfSlides[currentSlide].animate({marginLeft: '-1000px', opacity: 0}, 600)

    setTimeout(function () {  
        //arrOfSlides[currentSlide].removeClass('slider-img-active')
        //currentSlide = (currentSlide - 1)%3;    //(-0) = 0 (-1) = 2 (-2) = 1 (-3) = 0 
        //let prevVal = 2;
        currentSlide = Math.abs((currentSlide - 1)%3);  
        console.log(currentSlide)
    }, 300);
    
    //arrOfSlides[(currentSlide+1)%3].addClass('slider-img-active')     
    //arrOfSlides[(currentSlide+1)%3].animate({marginLeft: '1000px', opacity: 0}, 0) //marginTop: `-${$('.main-section__slider').height()}`}, 0)
    
    //arrOfSlides[(currentSlide+1)%3].animate({marginLeft: '0', opacity: '100' }, 300)   
}