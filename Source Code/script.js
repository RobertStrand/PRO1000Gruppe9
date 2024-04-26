// All Javascript kode hentet fra PRO1000GPT

var navbar = document.getElementById("navbar");
var stickyNavbar = navbar.offsetTop;
var ctaButtons = document.querySelector('.cta-buttons');

window.onscroll = function() {
    stickNavbar();
    makeButtonsSticky();
    adjustLogoPosition();
};

function adjustLogoPosition() {
    var navbarHeight = navbar.offsetHeight;
    var logo = document.getElementById('logo');
    logo.style.marginTop = navbarHeight + 'px';  
}

// Sticky Navbar
function stickNavbar() {
    if (window.scrollY >= stickyNavbar) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// Sticky Buttons
function makeButtonsSticky() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    var mobileOffset = window.innerWidth <= 768 ? 50 : 0; 
    var stickyPosition = stickyNavbar + navbar.offsetHeight - mobileOffset;

    if (scrollPosition >= stickyPosition) {
        ctaButtons.style.position = 'fixed';
        ctaButtons.style.top = navbar.offsetHeight + 'px';
        ctaButtons.style.width = '100%';
        ctaButtons.style.padding = '10px';
    } else {
        ctaButtons.style.position = '';
        ctaButtons.style.top = '';
        ctaButtons.style.width = '';
        ctaButtons.style.padding = '';
    }
}

window.onresize = adjustLogoPosition;
