//Header and footer
let header = document.querySelector("header.header");
let footer = document.querySelector("footer");
let href = document.location.pathname;
let html = href.includes(".html"),
    langEn = href.includes("-en"),
    isIndex = href.includes("index"),
    lengthPath = href.length,
    haveHashtag = href.includes("#");

function hrefLangUA() {
    let hrefUa = document.location.pathname;
    if (langEn) {
        if (html) {
            let placeHtml = hrefUa.indexOf("-en.html");
            hrefUa = hrefUa.slice(0, placeHtml);
            hrefUa = hrefUa.concat(".html");
        } else {
            let placeHtml = hrefUa.indexOf("-en");
            hrefUa = hrefUa.slice(0, placeHtml);
            hrefUa = hrefUa.concat(".html");
        }
    }
    return hrefUa;
}

function hrefLangEN() {
    let hrefEn = document.location.pathname;
    if (!langEn) {
        if (haveHashtag) {
            if (html) {
                let placeHtml = hrefEn.indexOf(".html");
                hrefEn = hrefEn.slice(0, placeHtml);
                hrefEn = hrefEn.concat("-en.html");
            } else {
                if (lengthPath == 1) {
                    let placeHtml = hrefEn.indexOf("#");
                    hrefEn = hrefEn.slice(0, placeHtml);
                    hrefEn = hrefEn.concat("index-en.html");
                } else {
                    let placeHtml = hrefEn.indexOf("#");
                    hrefEn = hrefEn.slice(0, placeHtml);
                    hrefEn = hrefEn.concat("-en.html");
                }
            }
        } else {
            if (html) {
                let placeHtml = hrefEn.indexOf(".html");
                hrefEn = hrefEn.slice(0, placeHtml);
                hrefEn = hrefEn.concat("-en.html");
            } else {
                if (lengthPath == 1) {
                    hrefEn = hrefEn.concat("index-en.html");
                } else {
                    hrefEn = hrefEn.concat("-en.html");
                }
            }
        }
    }
    return hrefEn;
}

let navAboutUs = ` Про студію</span>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#gallery">Галерея</a></li>
                    <li><a class="dropdown-item" href="#teachers">Викладачі</a></li>
                    <li><a class="dropdown-item" href="#feedback">Відгуки</a></li>
                    <li><a class="dropdown-item" href="#faq">Запитання та відповіді</a></li>`;
let navTeaching = `Навчання</span>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="education-for-children.html">для дітей</a></li>
                    <li><a class="dropdown-item" href="education-for-prospective-students.html">для
                    абітурієнтів</a></li>
                    <li><a id="adultlink" class="dropdown-item" href="education-for-adults.html">для
                    дорослих</a></li>`;
let navMasterClasses = `<a class="nav-link menu-link" href="master.html">Майстер-класи</a>`;
let navContacts = `<a class="nav-link menu-link" href="#contacts">Контакти</a>`;
let navLangSelect = `UA</span>
                    <ul class="dropdown-menu lang">
                    <li><a class="dropdown-item lang" href=${hrefLangUA()}>UA</a></li>
                    <li><a class="dropdown-item lang" href=${hrefLangEN()}>EN</a></li>`;
let navOrderLesson = "Замовити урок";
// footer's variables
let footerTitle = `<h3 class="footer-title">Запис на урок</h3>
                   <div class="footer-text">Заповніть форму і ми обов’язково зв’яжемось з вами для уточнення деталей`;
let footerLabelName = "Ім’я",
    footerLabelLastName = "Прізвище",
    footerLabelEmail = "Електронна пошта",
    footerLabelPhone = "Телефон",
    footerBtnSubmit = "Відправити",
    footerOffert = `Надсилаючи заявку, 
Ви автоматично погоджуєтесь з публічною офертою та надаєте <a href="politic-of-confidenc.html" target="_blank" 
class="popup-ofert-a">згоду на обробку персональних даних.</a>`,
    footerContactsTitle = "Контакти",
    footerAdress = `м. Вінниця <br> вул. Андрія Первозванного, 58а`,
    footerFollow = `Слідкуйте за нами в соцмережах`,
    footerSharing = "Поділитись",
    footerDeveloper = `Розроблено студентами<br>Вінницької IT Академії`;
let mobLangSelect = `<a class="lang-select" href=${hrefLangUA()}>UA</a>
                        <div class="vertical"></div>
                    <a href=${hrefLangEN()}>EN</a>`;
//popup's variables
let popupTitle = "Запис на урок",
    popupText =
        "Заповніть форму і ми обов’язково зв’яжемось з вами для уточнення деталей",
    popup2Close = "Закрити";
let footerDevelopersLink = "developers.html";
let logoLink = "index.html";

//this function draw modules header and footer
drawHeader();
drawFooter();
drawModal();

function drawHeader() {
    if (!isIndex && lengthPath > 1) {
        if (langEn) {
            navAboutUs = `About us</span>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="index-en.html#gallery">Gallery</a></li>
                <li><a class="dropdown-item" href="index-en.html#teachers">Teachers</a></li>
                <li><a class="dropdown-item" href="index-en.html#feedback">Reviews</a></li>
                <li><a class="dropdown-item" href="index-en.html#faq">Questions and answers</a></li>`;
            navTeaching = `Teaching</span>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="education-for-children-en.html">for children</a></li>
                    <li><a class="dropdown-item" href="education-for-prospective-students-en.html">for applicants</a></li>
                    <li><a id="adultlink" class="dropdown-item" href="education-for-adults-en.html">for adults</a></li>`;
            navMasterClasses = `<a class="nav-link menu-link" href="master-en.html">Master classes</a>`;
            navContacts = `<a class="nav-link menu-link" href="#contacts">Contacts</a>`;
            navLangSelect = `EN</span>
                            <ul class="dropdown-menu lang">
                            <li><a class="dropdown-item lang" href=${hrefLangUA()}>UA</a></li>
                            <li><a class="dropdown-item lang" href=${hrefLangEN()}>EN</a></li>`;
            navOrderLesson = "Order a lesson";
            mobLangSelect = `<a href=${hrefLangUA()}>UA</a>
                                <div class="vertical"></div>
                            <a class="lang-select" href=${hrefLangEN()}>EN</a>`;
            logoLink = "index-en.html";
        } else {
            navAboutUs = ` Про студію</span>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="index.html#gallery">Галерея</a></li>
                <li><a class="dropdown-item" href="index.html#teachers">Викладачі</a></li>
                <li><a class="dropdown-item" href="index.html#feedback">Відгуки</a></li>
                <li><a class="dropdown-item" href="index.html#faq">Запитання та відповіді</a></li>`;
            navTeaching = `Навчання</span>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="education-for-children.html">для дітей</a></li>
                    <li><a class="dropdown-item" href="education-for-prospective-students.html">для
                    абітурієнтів</a></li>
                    <li><a id="adultlink" class="dropdown-item" href="education-for-adults.html">для
                    дорослих</a></li>`;
            navMasterClasses = `<a class="nav-link menu-link" href="master.html">Майстер-класи</a>`;
            navContacts = `<a class="nav-link menu-link" href="#contacts">Контакти</a>`;
            mobLangSelect = `<a class="lang-select" href=${hrefLangUA()}>UA</a>
                                <div class="vertical"></div>
                            <a href=${hrefLangEN()}>EN</a>`;
            navOrderLesson = "Замовити урок";
        }
    } else {
        if (langEn) {
            navAboutUs = `About us</span>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#gallery">Gallery</a></li>
                <li><a class="dropdown-item" href="#teachers">Teachers</a></li>
                <li><a class="dropdown-item" href="#feedback">Reviews</a></li>
                <li><a class="dropdown-item" href="#faq">Questions and answers</a></li>`;
            navTeaching = `Teaching</span>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="education-for-children-en.html">for children</a></li>
                <li><a class="dropdown-item" href="education-for-prospective-students-en.html">for applicants</a></li>
                <li><a id="adultlink" class="dropdown-item" href="education-for-adults-en.html">for adults</a></li>`;
            navMasterClasses = `<a class="nav-link menu-link" href="master-en.html">Master classes</a>`;
            navContacts = `<a class="nav-link menu-link" href="#contacts">Contacts</a>`;
            navLangSelect = `EN</span>
                        <ul class="dropdown-menu lang">
                        <li><a class="dropdown-item lang" href=${hrefLangUA()}>UA</a></li>
                        <li><a class="dropdown-item lang" href=${hrefLangEN()}>EN</a></li>`;
            navOrderLesson = "Order a lesson";
            mobLangSelect = `<a href=${hrefLangUA()}>UA</a>
                                <div class="vertical"></div>
                            <a class="lang-select" href=${hrefLangEN()}>EN</a>`;
            logoLink = "index-en.html";
        } else {
            navAboutUs = ` Про студію</span>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#gallery">Галерея</a></li>
                                <li><a class="dropdown-item" href="#teachers">Викладачі</a></li>
                                <li><a class="dropdown-item" href="#feedback">Відгуки</a></li>
                                <li><a class="dropdown-item" href="#faq">Запитання та відповіді</a></li>`;
            navTeaching = `Навчання</span>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="education-for-children.html">для дітей</a></li>
                                    <li><a class="dropdown-item" href="education-for-prospective-students.html">для
                                    абітурієнтів</a></li>
                                    <li><a id="adultlink" class="dropdown-item" href="education-for-adults.html">для
                                    дорослих</a></li>`;
            navMasterClasses = `<a class="nav-link menu-link" href="master.html">Майстер-класи</a>`;
            navContacts = `<a class="nav-link menu-link" href="#contacts">Контакти</a>`;
            mobLangSelect = `<a class="lang-select" href=${hrefLangUA()}>UA</a>
                                                <div class="vertical"></div>
                                            <a href=${hrefLangEN()}>EN</a>`;
            navOrderLesson = "Замовити урок";
        }
    }

    header.innerHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary menu">
                            <div class="container-fluid header-menu">
                                <a href=${logoLink} title="">
                                    <div class="header-logo"></div>
                                </a>
                                <div class="mob-lang-select">
                                    ${mobLangSelect}
                                </div>
                                <div class="header-burger navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation"><span></span></div>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0 menu-list">
                                    <div></div>
                                    <li class="nav-item dropdown">
                                        <span class="nav-link dropdown-toggle menu-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ${navAboutUs}</ul>
                                    </li>
                                    <li class="nav-item dropdown" id="navstudy">
                                        <span id="studylink" class="nav-link dropdown-toggle menu-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ${navTeaching}</ul>
                                    </li>
                                    <li class="nav-item" id="navmaster">${navMasterClasses}</li>
                                    <li class="nav-item" id="licontact">${navContacts}</li>
                                    <li class="nav-item dropdown" id="navlang">
                                        <span class="nav-link dropdown-toggle menu-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ${navLangSelect}</ul>
                                    </li>
                                </ul>
                            <div class="flash-btn"><div class="menu-flash"></div>
                            <button class="header-btn popup-link" href="#popup">${navOrderLesson}</button>
                            </div>
                            <div class="header-icon-social">
                            <a href="https://www.facebook.com/profile.php?id=100086510772962" class="social-link icon" title="facebook" target="_blank">
                        <svg    svg class="icon">
                                    <use xlink:href="src/icons/sprite.svg#facebook"></use>
                                </svg>
                            </a>
                        <a href="https://www.instagram.com/art_studioleonardo/" class="social-link icon" title="instagram" target="_blank">
                            <svg class="icon">
                                <use xlink:href="src/icons/sprite.svg#instagram"></use>
                            </svg>
                        </a>
                        </div></div></div>
                    </nav>`;
}

function drawFooter() {
    if (langEn) {
        (footerTitle = `<h3 class="footer-title">Sign up for a lesson</h3>
                   <div class="footer-text">Fill out the form and we will definitely contact you to clarify the details`),
            (footerLabelName = "First name"),
            (footerLabelLastName = "Last name"),
            (footerLabelEmail = "Email"),
            (footerLabelPhone = "Phone"),
            (footerBtnSubmit = "Send"),
            (footerOffert = `By submitting an application, you automatically 
        <a href="politic-of-confidenc-en.html" target="_blank" class="popup-ofert-a">agree to the public offer and consent to 
        the processing of personal data.</a>`),
            (footerContactsTitle = "Contacts"),
            (footerAdress = "Vinnytsia<br> St. Andriy Pervozvannoy, 58a"),
            (footerFollow = "Follow us on social networks"),
            (footerSharing = "Share"),
            (footerDeveloper = "Developed by students<br>Vinnytsia IT Academy"),
            (footerDevelopersLink = "developers-en.html");
    }

    if (isIndex || lengthPath == 1) {
        footer.innerHTML = `<div class="footer-block">
        <div class="footer-submit">${footerTitle}</div>
            <form action="https://intita.com/api/v1/entrant" class="popup-form" method="post"
                accept-charset="utf-8" id="footer-registration-form">
                <div class="form-firstName">
                    <label for="firstName">${footerLabelName} *</label>
                    <br><input maxlength="15" required type="text" name="firstName" class="firstName"
                        id="firstName-1" placeholder = "${footerLabelName}" >
                    <div class="msg-error"></div>
                </div>
                <div class="form-lastName">
                    <label for="lastName">${footerLabelLastName}</label>
                    <br><input maxlength="30" type="text" name="lastName" class="lastName" id="lastName-1"
                        placeholder = "${footerLabelLastName}" >
                    <div class="msg-error"></div>
                </div>
                <div class="form-email">
                    <label for="email">${footerLabelEmail} *</label>
                    <br><input maxlength="25" required type="email" name="email" class="email" id="email-1"
                        placeholder="email@gmail.com" autocomplete="on">
                    <div class="msg-error"></div>
                </div>
                <div class="form-phone">
                    <label for="phone">${footerLabelPhone} *</label>
                    <br><input required type="text" name="phone" class="phone" id="phone-1"
                        placeholder="+38 (___) ___-__-__" autocomplete="on">
                    <div class="msg-error"></div>
                </div>
                <button type="submit" class="footer-btn submit-button" disabled="disabled">${footerBtnSubmit}</button>
                <input type="hidden" name="organization_id" value="103">
            </form>
            <div class="popup-ofert caption">${footerOffert}</div>
        </div>
        <div class="footer-contact" id="contacts">
            <h3 class="footer-title">${footerContactsTitle}</h3>
            <div class="footer-addressblock">
                <div class="footer-contacts">
                    <span class="footer-address">
                        <svg class="icon">
                        <use xlink:href="src/icons/sprite.svg#geoicon"></use>
                        </svg>
                        <div class="address-text">${footerAdress}</div>
                    </span>
                    <a title="phone" href="https://t.me/+380964656751" class="footer-phone" target="blank">
                        <svg class="icon">
                        <use xlink:href="src/icons/sprite.svg#tg2"></use>
                        </svg>
                        <div class="phone-text">+38 (096) 465 67 51</div>
                    </a>
                </div>
                <div class="footer-text">${footerFollow}</div>
                <div class="icon-social">
                    <a href="https://www.facebook.com/profile.php?id=100086510772962" class="social-link"
                        title="facebook" target="blank">
                        <svg class="icon">
                        <use xlink:href="src/icons/sprite.svg#facebook"></use>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/art_studioleonardo/" class="social-link"
                        title="instagram" target="blank">
                        <svg class="icon">
                        <use xlink:href="src/icons/sprite.svg#instagram"></use>
                        </svg>
                    </a>
                </div>
                <div class="sharing" id="grupsharing">
                    <button type="submit" class=" footer-btn" id="sharing-btn">${footerSharing}</button>
                    <div class="icon-social" id="sharing-icon" hidden="true">
                        <a class="social-link" title="share on facebook"
                            href="https://www.facebook.com/sharer.php?u=https://leonardo.intita.com/"
                            target="_blank">
                            <svg class="icon">
                            <use xlink:href="src/icons/sprite.svg#facebook"></use>
                            </svg>
                        </a>
                        <a class="social-link" title="share on telegram"
                            href="https://t.me/share/url?url=https://leonardo.intita.com/" target="_blank">
                            <svg class="icon">
                            <use xlink:href="src/icons/sprite.svg#telegram"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-developers">
        <a title="developers team" class="develop" href=${footerDevelopersLink}>
            <img src="src/icons/logo-intita.png" alt="logo" class="develop-logo">
            <div class="caption">${footerDeveloper}</div>
        </a>
        <svg class="scroll-up">
            <use xlink:href="src/icons/sprite.svg#scroll-up"></use>
        </svg>
    </div>`;
    } else {
        footer.innerHTML = `<div class="footer-block">
            <div class="footer-submit">${footerTitle}</div>
                <form action="https://intita.com/api/v1/entrant" class="popup-form" method="post"
                    accept-charset="utf-8" id="footer-registration-form">
                    <div class="form-firstName">
                        <label for="firstName">${footerLabelName} *</label>
                        <br><input maxlength="15" required type="text" name="firstName" class="firstName"
                            id="firstName-1" placeholder = "${footerLabelName}" >
                        <div class="msg-error"></div>
                    </div>
                    <div class="form-lastName">
                        <label for="lastName">${footerLabelLastName}</label>
                        <br><input maxlength="30" type="text" name="lastName" class="lastName" id="lastName-1"
                            placeholder = "${footerLabelLastName}" >
                        <div class="msg-error"></div>
                    </div>
                    <div class="form-email">
                        <label for="email">${footerLabelEmail} *</label>
                        <br><input maxlength="25" required type="email" name="email" class="email" id="email-1"
                            placeholder="email@gmail.com" autocomplete="on">
                        <div class="msg-error"></div>
                    </div>
                    <div class="form-phone">
                        <label for="phone">${footerLabelPhone} *</label>
                        <br><input required type="text" name="phone" class="phone" id="phone-1"
                            placeholder="+38 (___) ___-__-__" autocomplete="on">
                        <div class="msg-error"></div>
                    </div>
                    <button type="submit" class="footer-btn submit-button" disabled="disabled">${footerBtnSubmit}</button>
                    <input type="hidden" name="organization_id" value="103">
                </form>
                <div class="popup-ofert caption">${footerOffert}</div>
            </div>
            <!-- section LEON-24  the tenth block "Контакти" of footer -->
            <div class="footer-contact" id="contacts">
                <h3 class="footer-title footer-title-master">${footerContactsTitle}</h3>
                <div class="footer-addressblock">
                    <div class="footer-contacts footer-contacts-master">
                        <span class="footer-address">
                            <svg class="icon">
                                <use xlink:href="src/icons/sprite.svg#geoicon"></use>
                            </svg>
                            <div class="address-text">${footerAdress}</div>
                        </span>
                        <a title="phone" href="https://t.me/+380964656751" class="footer-phone" target="blank">
                            <svg class="icon">
                                <use xlink:href="src/icons/sprite.svg#tg2"></use>
                            </svg>
                            <div class="phone-text">+38 (096) 465 67 51</div>
                        </a>
                    </div>
                    <div class="footer-text footer-text-master">${footerFollow}</div>
                    <div class="icon-social">
                        <a href="https://www.facebook.com/profile.php?id=100086510772962" class="social-link"
                            title="facebook" target="blank">
                            <svg class="icon">
                                <use xlink:href="src/icons/sprite.svg#facebook"></use>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/art_studioleonardo/" class="social-link"
                            title="instagram" target="blank">
                            <svg class="icon">
                                <use xlink:href="src/icons/sprite.svg#instagram"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- section LEON-22 Develop Footer -->
        <div class="footer-developers">
            <a title="developers team" class="develop" href=${footerDevelopersLink}>
                <img src="src/icons/logo-intita.png" alt="logo" class="develop-logo">
                <div class="caption">${footerDeveloper}</div>
            </a>
            <svg class="scroll-up">
                <use xlink:href="src/icons/sprite.svg#scroll-up"></use>
            </svg>
        </div>`;
    }
}

function drawModal() {
    if (langEn) {
        (popupTitle = "Sign up for a lesson"),
            (popupText =
                "Fill out the form and we will definitely contact you to clarify the details"),
            (popup2Close = "Close");
    }

    document.body.innerHTML += `<div class="popup" id="popup">
            <div class="popup-body">
                <div class="popup-content">
                    <a href="#marker" class="popup-close close-popup" title="popup-close"></a>
                    <h3 class="popup-title">${popupTitle}</h3>
                    <div class="popup-text">${popupText}</div>
                    <form class="popup-form" action="https://intita.com/api/v1/entrant" method="post" accept-charset="utf-8"
                        id="popup-registration-form">
                        <div class="form-firstName">
                            <label for="firstName">${footerLabelName} *</label>
                            <br><input maxlength="15" required type="text" name="firstName" class="firstName" id="firstName"
                                placeholder="${footerLabelName}">
                            <div class="msg-error"></div>
                        </div>
                        <div class="form-lastName">
                            <label for="lastName">${footerLabelLastName}</label>
                            <br><input maxlength="30" type="text" name="lastName" class="lastName" id="lastName"
                                placeholder="${footerLabelLastName}">
                            <div class="msg-error"></div>
                        </div>
                        <div class="form-email">
                            <label for="email">${footerLabelEmail} *</label>
                            <br><input maxlength="25" required type="email" name="email" class="email" id="email"
                                placeholder="email@gmail.com" autocomplete="on">
                            <div class="msg-error"></div>
                        </div>
                        <div class="form-phone">
                            <label for="phone">${footerLabelPhone} *</label>
                            <br><input required type="text" name="phone" class="phone" id="phone"
                                placeholder="+38 (___) ___-__-__" autocomplete="on">
                            <div class="msg-error"></div>
                        </div>
                        <button type="submit" class="popup-btn submit-button" disabled="disabled">${footerBtnSubmit}</button>
                        <input type="text" name="organization_id" value="103" class="inputhide">
                    </form>
                    <div class="popup-ofert caption">${footerOffert}</div>
                </div>
            </div>
        </div>
    
        <div class="modal fade" id="modal-success-window" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="popup-success-content">
                    <h3 class="popup-success-title" id="popup-success-title"></h3>
                    <button type="button" class="btn-close popup-success-btn" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                    <div class="popup-success-text" id="popup-success-text"></div>
                    <button type="button" class="popup-btn popup-success-btn" data-bs-dismiss="modal">${popup2Close}</button>
                </div>
            </div>
        </div>`;
}

//Meaages and titles for popup-success window
let message = document.getElementById("popup-success-text");
let messageUA =
    "Вже найближчим часом ми зв’яжемось з вами для уточнення деталей.";
let messageEN = "We will contact you soon to clarify the details.";
let errMessageUA = "Сервер тимчасово перевантажений.";
let errMessageEN = "The server is temporarily overloaded.";
let messageTitle = document.getElementById("popup-success-title");
let messageTitleUA = "Дякуємо за ваше звернення";
let messageTitleEN = "Thank you for your application";
let errMessageTitleUA = "Сталась помилка";
let errMessageTitleEN = "An error occurred";

//variables ScrolUp btn
const offset = 100;
const scrollUp = document.querySelector(".scroll-up");
const getTop = () => window.pageYOffset || document.documentElement.scrollTop;
/* Code scrolUp btn */
if (scrollUp) {
    window.addEventListener("scroll", () => {
        if (getTop() > offset) {
            scrollUp.classList.add("scroll-up-active");
        } else {
            scrollUp.classList.remove("scroll-up-active");
        }
    });
    scrollUp.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}

//variables validation forms
let firstName = document.querySelectorAll(".firstName");
let lastName = document.querySelectorAll(".lastName");
let email = document.querySelectorAll(".email");
let phone = document.querySelectorAll(".phone");
let firstNameCorrect = false,
    emailCorrect = false,
    phoneCorrect = false;
let validationPassed = false;
let incorrectMsg = "";
if (langEn) {
    incorrectMsg = "The field is filled in incorrectly";
} else {
    incorrectMsg = "Поле заповнене некоректно";
}

//function validation forms
function validationSuccess() {
    for (let i = 0; i < buttonSubmit.length; i++) {
        if (firstNameCorrect && emailCorrect && phoneCorrect) {
            validationPassed = true;
            buttonSubmit[i].removeAttribute("disabled");
        } else {
            buttonSubmit[i].setAttribute("disabled", "disabled");
            validationPassed = false;
        }
    }
}
// '’-
if (firstName.length) {
    for (let i = 0; i < firstName.length; i++) {
        let regex = /[^A-ZА-ЯЁІЇЄa-zа-яіїёє'’-]/;
        let element = firstName[i];
        element.oninput = function () {
            element.value = element.value.replace(regex, "");
            if (element.value.length < 2) {
                firstNameCorrect = false;
            } else {
                firstNameCorrect = true;
            }
            validationSuccess();
        };
        element.onblur = function () {
            if (element.value.length < 2) {
                this.classList.remove("input-correct");
                this.classList.add("input-error");
                this.previousElementSibling.previousElementSibling.classList.remove(
                    "input-correct"
                );
                this.previousElementSibling.previousElementSibling.classList.add(
                    "input-error"
                );
                this.nextElementSibling.textContent = incorrectMsg;
                firstNameCorrect = false;
            } else {
                this.classList.remove("input-error");
                this.classList.add("input-correct");
                this.previousElementSibling.previousElementSibling.classList.remove(
                    "input-error"
                );
                this.previousElementSibling.previousElementSibling.classList.add(
                    "input-correct"
                );
                this.nextElementSibling.textContent = "";
                firstNameCorrect = true;
            }
            validationSuccess();
        };
        element.onchange = function () {
            if (element.value.length < 2) {
                firstNameCorrect = false;
            } else {
                firstNameCorrect = true;
            }
            validationSuccess();
        };
    }
}

if (lastName.length) {
    for (let i = 0; i < lastName.length; i++) {
        let regex = /[^A-ZА-ЯЁІЇЄa-zа-яіїёє'’-]/;
        let element = lastName[i];
        element.oninput = function () {
            element.value = element.value.replace(regex, "");
        };
    }
}

if (email.length) {
    for (let i = 0; i < email.length; i++) {
        let regex =
            /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,6}$/;
        let regexcyr = /[а-яА-ЯіІїЇёЁ]/g;
        let element = email[i];
        element.oninput = function () {
            this.value = this.value.replace(regexcyr, "");
            if (this.value.match(regex)) {
                emailCorrect = true;
            } else {
                emailCorrect = false;
            }
            validationSuccess();
        };
        element.onblur = function () {
            if (this.value.match(regex)) {
                this.classList.remove("input-error");
                this.classList.add("input-correct");
                this.previousElementSibling.previousElementSibling.classList.remove(
                    "input-error"
                );
                this.previousElementSibling.previousElementSibling.classList.add(
                    "input-correct"
                );
                this.nextElementSibling.textContent = "";
                emailCorrect = true;
            } else {
                this.classList.remove("input-correct");
                this.classList.add("input-error");
                this.previousElementSibling.previousElementSibling.classList.remove(
                    "input-correct"
                );
                this.previousElementSibling.previousElementSibling.classList.add(
                    "input-error"
                );
                this.nextElementSibling.textContent = incorrectMsg;
                emailCorrect = false;
            }
            validationSuccess();
        };
        element.onchange = function () {
            if (this.value.match(regex)) {
                emailCorrect = true;
            } else {
                emailCorrect = false;
            }
            validationSuccess();
        };
    }
}

if (phone.length) {
    for (let i = 0; i < phone.length; i++) {
        let element = phone[i];
        element.onblur = function () {
            if (element.value.length < 19 || element.value[18] === "_") {
                this.classList.remove("input-correct");
                this.classList.add("input-error");
                this.previousElementSibling.previousElementSibling.classList.remove(
                    "input-correct"
                );
                this.previousElementSibling.previousElementSibling.classList.add(
                    "input-error"
                );
                this.nextElementSibling.textContent = incorrectMsg;
                phoneCorrect = false;
            } else {
                this.classList.remove("input-error");
                this.classList.add("input-correct");
                this.previousElementSibling.previousElementSibling.classList.remove(
                    "input-error"
                );
                this.previousElementSibling.previousElementSibling.classList.add(
                    "input-correct"
                );
                this.nextElementSibling.textContent = "";
                phoneCorrect = true;
            }
            validationSuccess();
        };
        element.onchange = function () {
            if (element.value.length < 19 || element.value[18] === "_") {
                phoneCorrect = false;
            } else {
                phoneCorrect = true;
            }
            validationSuccess();
        };
        element.oninput = function () {
            if (element.value.length < 19 || element.value[18] === "_") {
                phoneCorrect = false;
            } else {
                phoneCorrect = true;
            }
            validationSuccess();
        };
    }
}

//sharing button script
let screenWidth = window.innerWidth;
let sharingButton = document.getElementById("sharing-btn");
let sharingIcons = document.getElementById("sharing-icon");
let grupSharingBtn = document.getElementById("grupsharing");

sharingButton.onclick = function () {
    sharingButton.setAttribute("hidden", true);
    sharingIcons.removeAttribute("hidden");
}

grupSharingBtn.onmouseleave = function () {
    sharingButton.removeAttribute("hidden");
    sharingIcons.setAttribute("hidden", true);
}

//variables popup windovs
const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");
const popupCloseIcon = document.querySelectorAll(".close-popup");
const forms = document.querySelectorAll(".popup-form");
//"submit" button in registration form
const buttonSubmit = document.querySelectorAll(".submit-button");
let buttonSubmitPressed = false;
//function popup windows
/* modal window script */
/* this script remove # from page with open popup */
if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
        const popupLink = popupLinks[i];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute("href").replace("#", "");
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

/* this script closed closest element whish has .popup classe */
if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
        const el = popupCloseIcon[i];
        el.addEventListener("click", function (e) {
            popupClose(el.closest(".popup"));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    clearForm();
    if (curentPopup && unlock) {
        curentPopup.style.display = "unset"; //allows animation
        const popupActive = document.querySelector(".popup.open");
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add("open");
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest(".popup-content")) {
                popupClose(e.target.closest(".popup"));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove("open");
        if (doUnlock) {
            bodyUnLock();
        }
    }
    clearForm();
}

/* function for lock body and forbid scrol page*/
function bodyLock() {
    const lockPaddingValue = window.innerWidth - body.offsetWidth + "px";

    if (lockPadding.length > 0) {
        for (let i = 0; i < lockPadding.length; i++) {
            const el = lockPadding[i];
            el.style.paddingRight = lockPaddingValue;
        }
    }

    body.classList.add("lock");
    body.style.paddingRight = lockPaddingValue;
    if (menuClose) {
        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }
}

function bodyUnLock() {
    setTimeout(function () {
        for (let i = 0; i < lockPadding.length; i++) {
            const el = lockPadding[i];
            el.style.paddingRight = "0px";
        }
        if (menuClose) {
            body.classList.remove("lock");
            body.style.paddingRight = "0px";
        }
    }, timeout);
    if (!menuClose) {
        unlock = false;
        setTimeout(() => (unlock = true), timeout);
    }
}

document.addEventListener("keydown", function (e) {
    if (e.which === 27 && !buttonSubmitPressed) {
        const popupActive = document.querySelector(".popup.open");
        popupClose(popupActive);
    }
});

/*script for sinhronized closing of two modal windows using buttons*/
const closePopupSuccess = document.querySelectorAll(".popup-success-btn");

closePopupSuccess.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        const popupActive = document.querySelector(".popup.open");
        popupClose(popupActive);

        /*to allow "Esc" button after all pop-up windows are closed*/
        buttonSubmitPressed = false;
    });
});
/*Clear form function*/
function clearForm() {
    firstNameCorrect = false;
    emailCorrect = false;
    phoneCorrect = false;
    validationPassed = false;

    for (let i = 0; i < buttonSubmit.length; i++) {
        firstName[i].value = "";
        lastName[i].value = "";
        email[i].value = "";
        phone[i].value = "";
        buttonSubmit[i].setAttribute("disabled", "disabled");
    }

    for (let i = 0; i < firstName.length; i++) {
        firstName[i].classList.remove("input-error");
        firstName[i].classList.add("input-correct");
        firstName[
            i
        ].previousElementSibling.previousElementSibling.classList.remove(
            "input-error"
        );
        firstName[
            i
        ].previousElementSibling.previousElementSibling.classList.add(
            "input-correct"
        );
        firstName[i].nextElementSibling.textContent = "";
        email[i].classList.remove("input-error");
        email[i].classList.add("input-correct");
        email[i].previousElementSibling.previousElementSibling.classList.remove(
            "input-error"
        );
        email[i].previousElementSibling.previousElementSibling.classList.add(
            "input-correct"
        );
        email[i].nextElementSibling.textContent = "";
        phone[i].classList.remove("input-error");
        phone[i].classList.add("input-correct");
        phone[i].previousElementSibling.previousElementSibling.classList.remove(
            "input-error"
        );
        phone[i].previousElementSibling.previousElementSibling.classList.add(
            "input-correct"
        );
        phone[i].nextElementSibling.textContent = "";
    }
}

let unlock = true;
let menuClose = true;
const timeout = 800;
/* this code added toggleClass to btn for work burger-menu and block scrolling*/
$(".header-burger").click(function () {
    $(
        ".header-burger, .header-menu, .header-logo, .mob-lang-select"
    ).toggleClass("active");
});

$("#navbarSupportedContent").on("hidden.bs.collapse", function () {
    $("body").removeClass("no_scrolling");
});
$("#navbarSupportedContent").on("show.bs.collapse", function () {
    $("body").addClass("no_scrolling");
});
$(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
});
$(".dropdown-menu>li>a, .nav-item>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
    $(".container-fluid").removeClass("active");
    $(
        ".header-burger, .header-menu, .header-logo, .mob-lang-select"
    ).removeClass("active");
});

//re Captcha

listenEntrantSubmit();

function getElement(selector) {
    return document.querySelector(selector);
}

function onSubmit(event, formElement) {
    submitBtnStatusAssigning("disable"); //to prevent repeated request until receiving a response
    event.preventDefault();
    // submit to the server if the form is valid
    if (validationPassed && event.target.type === "submit") {
        grecaptcha.ready(function () {
            grecaptcha
                .execute("6LcwRRUaAAAAADavxcmw5ShOEUt1xMBmRAcPf6QP", {
                    action: "submit",
                })
                .then(function (token) {
                    if (formElement.checkValidity()) {
                        const actionUrl = "https://intita.com/api/v1/entrant";
                        const entrantFormData = new FormData(formElement);
                        entrantFormData.append("g-recaptcha-response", token);
                        const http = new XMLHttpRequest();
                        http.open("POST", actionUrl, true);
                        http.send(entrantFormData);
                        let responseReceived = false; // Flag variable
                        http.onreadystatechange = function () {
                            if (+http.readyState === 4) {
                                if (+http.status === 201) {
                                    if (langEn) {
                                        message.textContent = messageEN;
                                        messageTitle.textContent =
                                            messageTitleEN;
                                    } else {
                                        message.textContent = messageUA;
                                        messageTitle.textContent =
                                            messageTitleUA;
                                    }
                                    clearForm();
                                } else if (+http.status === 400) {
                                    if (langEn) {
                                        message.textContent = errMessageEN;
                                        messageTitle.textContent =
                                            errMessageTitleEN;
                                    } else {
                                        message.textContent = errMessageUA;
                                        messageTitle.textContent =
                                            errMessageTitleUA;
                                    }
                                    submitBtnStatusAssigning("enable"); //to get ready for next request
                                }
                                responseReceived = true; // Set the flag to true
                                showModal();
                            }
                        };

                        // Function to show the modal window
                        function showModal() {
                            if (responseReceived) {
                                $("#modal-success-window").modal("show");
                            }
                        }
                    }
                });
        });
    }
}

function listenEntrantSubmit() {
    if (!window.location.pathname.includes("404.html")) {
        const element1 = getElement("#footer-registration-form");
        element1.addEventListener("click", function (event) {
            onSubmit(event, element1);
        });
    }

    const element2 = getElement("#popup-registration-form");
    element2.addEventListener("click", function (event) {
        onSubmit(event, element2);
    });
}
function submitBtnStatusAssigning(assignStatus) {
    for (let i = 0; i < buttonSubmit.length; i++) {
        if (assignStatus === "enable")
            buttonSubmit[i].removeAttribute("disabled");

        if (assignStatus === "disable")
            buttonSubmit[i].setAttribute("disabled", "disabled");
    }
}
//end re Captcha
