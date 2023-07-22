$(document).ready(function () {
    // INPUTMASK +38 (___) ___-__-__
    jQuery(".phone").inputmask({
        mask: "+38 (999) 999-99-99",
        greedy: false,
    });

    //remove logo of widget instagram
    const removeWidgetLogo = setInterval(function () {
        const elementToRemove =
            document.getElementsByClassName("widbox-footer-container")[0]?.children[1];
        if (elementToRemove) {
            elementToRemove.remove();
            clearInterval(removeWidgetLogo);
        }
    }, 1000);

    /* to prevent "Esc" button action if submittion succsessful modal window is open.*/
    for (let i = 0; i < buttonSubmit.length; i++) {
        buttonSubmit[i].addEventListener("click", function (e) {
            buttonSubmitPressed = true;
        });
    }

    // script for children gallery children_product page
    if (document.getElementById("child-gallery")) {
        lightGallery(document.getElementById("child-gallery"), {
            plugins: [lgZoom, lgThumbnail],
            licenseKey: "0000-0000-000-0000",
            speed: 500,
            mode: "lg-fade",
            counter: false,
            download: false,
            thumbnail: true,
            animateThumb: true,
            showThumbByDefault: true,
            selector: "a",
            plugins: [lgZoom, lgThumbnail],
        });
    }
    // script for master gallery master-class page
    if (document.getElementById("master-gallery")) {
        lightGallery(document.getElementById("master-gallery"), {
            plugins: [lgZoom, lgThumbnail],
            licenseKey: "0000-0000-000-0000",
            speed: 500,
            mode: "lg-fade",
            counter: false,
            download: false,
            thumbnail: true,
            animateThumb: true,
            showThumbByDefault: true,
            selector: "a",
            plugins: [lgZoom, lgThumbnail],
        });
    }

});

// slider 

if (document.querySelector(".swiper")) {
    let swiper = new Swiper(".swiper", {
        direction: "horizontal",
        speed: 500,
        autoheight: true,
        loop: true,

        navigation: {
            nextEl: ".feedback-button-next",
            prevEl: ".feedback-button-prev",
        },

        breakpoints: {
            1440: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 174,
            },

            1024: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 74,
            },

            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 44,
            },

            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },
    });
}

//  end slider
// script for anchor links
document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 768) {
        const anchorLinks = document.querySelectorAll('.dropdown-menu a[href^="index.html#"]');
        anchorLinks.forEach(function (link) {
            link.addEventListener('click', function (event) {
                const isMobileDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;
                if (isMobileDevice) {
                    const targetId = this.getAttribute('href').substring(11);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        event.preventDefault();
                        const offset = -820;
                        const targetTop = targetElement.getBoundingClientRect().top + window.pageYOffset + offset;
                        window.scrollBy({ top: targetTop, behavior: 'smooth' });
                    }
                }
            });
        });
    }
});