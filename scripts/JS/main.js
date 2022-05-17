let servicesLink = document.querySelector(".header__services-link");
let expandNavigation = $('.expand-navigation'); //document.querySelector(".expandNavigation");
let openNavLinksBool = false;

let headerBurger = $('.header__burger')[0];
let signingServiceBtn = $('.header__signing-service-btn')[0];
let burgerContent = $('.header__burger-content-zone');
let openHeaderBurger = false;

headerBurger.onclick = function () {
    // смена значка
    openHeaderBurger = !openHeaderBurger;
    (openHeaderBurger) ? headerBurger.src = 'UI Kit/Icons/BurgerClouse.svg' : headerBurger.src = 'UI Kit/Icons/Burger.svg'
    
    // смена классов для кнопки запись на сервис 
    signingServiceBtn.classList.toggle('header__signing-service-btn-active');

    // смена класса для содержимого burger-content
    console.log(burgerContent[0].classList)
    if (burgerContent.hasClass('header__burger-content-zone-false')) {  
        console.log('+') 
        burgerContent.removeClass('header__burger-content-zone-false');  
        setTimeout(function () {  
            burgerContent.removeClass('header__burger-content-zone-visuallyhidden');  
        }, 0.3);  
    } else {  
        console.log('-') 
        burgerContent.addClass('header__burger-content-zone-visuallyhidden'); 
        burgerContent.one('transitionend', function(e) {  
            burgerContent.addClass('header__burger-content-zone-false');  
    });  
    }

}

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