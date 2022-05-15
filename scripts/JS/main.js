let servicesLink = document.querySelector(".header__services-link");
let expandNavigation = document.querySelector(".expand-navigation");
let openNavLinksBool = false;

servicesLink.onclick = function () {
    // смена значка
    openNavLinksBool = !openNavLinksBool;
    (openNavLinksBool) ? servicesLink.children[1].src = 'UI Kit/Icons/DropdawnOpend.svg' : servicesLink.children[1].src = 'UI Kit/Icons/Dropdawn.svg'

    // анимация услуг
    let expandNavigation = $('.expand-navigation');     //expand-navigation-false hidden
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