let headerBurger = $('.header__burger')[0];
let signingServiceBtn = $('.header__signing-service-btn')[0];
let burgerContent = $('.header__burger-content-zone');
let openHeaderBurger = false;

const mediaQueryDesktop = window.matchMedia('(min-width: 745px)')
const mediaQueryTablet = window.matchMedia('(max-width: 744px) and (min-width: 376px)')

headerBurger.onclick = function () {
    // desctop
    if (mediaQueryDesktop.matches) {
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
    // tablet
    if (mediaQueryTablet.matches) {
        openHeaderBurger = !openHeaderBurger;
        (openHeaderBurger) ? headerBurger.src = 'UI Kit/Icons/BurgerClouse.svg' : headerBurger.src = 'UI Kit/Icons/Burger.svg'
        
        $('.burger-content').css('display', 'none');
        $('.burger-content-tablet').css('display', 'flex');
        $('.header__grey-zone').css('display', 'none');
        burgerContent.css('top', '60px');

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

    let prevSlide = (currentSlide + 1) % 3;

    arrOfSlides[currentSlide].animate({opacity: 0}, 150)
    arrOfSlides[prevSlide%3].animate({opacity: 0}, 0)
    setTimeout(function () {  
        arrOfSlides[prevSlide%3].addClass('slider-img-active')
        arrOfSlides[prevSlide%3].animate({order: 0}, 0)
        arrOfSlides[currentSlide].animate({order: 2}, 0)
        arrOfSlides[currentSlide].removeClass('slider-img-active')
        arrOfSlides[prevSlide%3].animate({opacity: 1}, 150)
        currentSlide = (currentSlide+1)%3;
    }, 150);
}

caruselArrowRight.onclick = function () {
    currentSlide = currentSlide % 3;
    let prevSlide = ((currentSlide - 1) < 0) ? 2 : currentSlide - 1;

    // текущий order делаешь 2 а новый 0 
    // уменьшить до нуля opac текущий
    // получить новый order с opac = 0
    // opac на 100

    arrOfSlides[currentSlide].animate({opacity: 0}, 150)
    arrOfSlides[prevSlide%3].animate({opacity: 0}, 0)
    setTimeout(function () {  
        // накинуть класс  
        arrOfSlides[prevSlide%3].addClass('slider-img-active')
        arrOfSlides[prevSlide%3].animate({order: 0}, 0)
        arrOfSlides[currentSlide].animate({order: 2}, 0)
        // убрать класс
        arrOfSlides[currentSlide].removeClass('slider-img-active')
        arrOfSlides[prevSlide%3].animate({opacity: 1}, 150)
        currentSlide = ((currentSlide - 1) < 0) ? 2 : currentSlide - 1;
    }, 150);
}



// удалить все что ниже 
// hovers на cards
/*
let cards = [$('#first-card'), $('#second-card'), $('#third-card'), $('#fourth-card') ]

for (let i = 0; i < cards.length; i++){
    cards[i].hover(function () {
        //cards[i][0].children[1].animate({backgroundColor: '#FEC110'}, 5000)
        //cards[i][0].children[1].style.backgroundColor = '#FEC110';
        //cards[i][0].children[1].children[0].children[1].style.color = 'white'
        //cards[i][0].children[1].children[1].children[0].setAttribute("style", "fill: #313232");
        //cards[i][0].children[1].children[1].children[1].setAttribute("style", "stroke: white")
    }, function () {
        //cards[i][0].children[1].style.backgroundColor = 'white';
        //cards[i][0].children[1].children[0].children[1].style.color = '#989898'
        //cards[i][0].children[1].children[1].children[0].setAttribute("style", "fill: #FEC110");
        //cards[i][0].children[1].children[1].children[1].setAttribute("style", "stroke: #2C2C2C")
    })
}
*/
    //arrOfSlides[prevSlide%3].animate({order: 0}, 300)   // выцветает
    //arrOfSlides[currentSlide].animate({order: 2}, 300) //свайп лефт
    
    
    /*
    arrOfSlides[prevSlide%3].animate({marginLeft: `${-2*arrOfSlides[currentSlide].height()}`, opacity: 0}, 0)     
    console.log(arrOfSlides[currentSlide].height())
    arrOfSlides[prevSlide%3].addClass('slider-img-active')  // взять отступ равный длинне курентного
    arrOfSlides[prevSlide%3].animate({marginLeft: '0', opacity: 2}, 5000) 
    arrOfSlides[currentSlide].animate({marginLeft: `${arrOfSlides[currentSlide].height()}`, opacity: 0}, 5000)
    setTimeout(function () {
        arrOfSlides[currentSlide].removeClass('slider-img-active')
        arrOfSlides[prevSlide%3].animate({marginLeft: '0', opacity: 100}, 0)
        currentSlide = ((currentSlide - 1) < 0) ? 2 : currentSlide - 1;
    }, 2500)
    */