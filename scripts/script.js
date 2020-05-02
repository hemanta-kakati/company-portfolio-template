const toolbar = document.querySelector('.toolbar');
let toolbarBtns = toolbar.getElementsByTagName('button');
toolbarBtns = Array.from(toolbarBtns);
let portCards = document.querySelectorAll(".portfolio-card");
portCards = Array.from(portCards);
// console.log(toolbarBtns);

toolbarBtnListener();

// btn listener
function toolbarBtnListener() {

    // by default 'all' btn is selected so show all cards
    portCards.forEach((card) => {
        elClassRemover(card.parentElement, "hide");
        console.log("exe");

    });

    // then when other btn is selected so filter cards based on selection
    toolbarBtns.forEach(function(btn) {
        btn.addEventListener('click', (e) => {
            elsClassRemover(toolbarBtns, "active");
            elClassAdder(btn, "active");

            // get btn value
            let btnValue = btn.value;

            // now inject .show in portfolio div
            switch (btnValue) {
                case "all":
                    portCards.forEach((card) => {
                        elClassRemover(card.parentElement, "hide");
                    });
                    break;
                case "website":
                    showDivs(portCards, "web-project");
                    break;
                case "design":
                    showDivs(portCards, "design-project");
                    break;
                case "social":
                    showDivs(portCards, "social-project");
                    break;
                default:
                    break;
            }
        });
    });
}

// removes class from elements
function elsClassRemover(btns, className) {
    btns.forEach(function(btn) {
        if (btn.classList.contains(className)) {
            btn.classList.remove(className);
        }
    });
}

// adds class to any elements
function elClassAdder(el, className) {
    el.classList.add(className);
}

// adds class to any elements
function elClassRemover(el, className) {
    el.classList.remove(className);
}

function isClassExits(el, className) {
    // return el.classList.contains(className) ? true : false;
    if (el.classList.contains(className)) {
        return true;
    } else {
        return false;
    }
}

function showDivs(elms, searchClass) {
    elms.forEach(function(card) {
        if (isClassExits(card, searchClass)) {
            elClassRemover(card.parentElement, "hide");
        } else {
            elClassAdder(card.parentElement, "hide");
        }
    });
}

// apply effects on scroll
const serviceSection = document.querySelector('#service-section');
const heroSection = document.querySelector('#hero-section');
const navbar = document.querySelector('.navbar');
const dropdownMenu = document.querySelector('.dropdown-menu');
const main = document.querySelector('main');
const intSections = document.querySelectorAll('.intersect');
console.log(dropdownMenu);


let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
}

let callback = entries => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            elClassRemover(navbar, "navbar-dark");
            elClassRemover(navbar, "bg-dark");
            elClassAdder(navbar, "navbar-light");
            elClassAdder(navbar, "bg-light");
        } else {
            elClassRemover(navbar, "bg-light");
            elClassRemover(navbar, "navbar-light")
            elClassAdder(navbar, "bg-dark");
            elClassAdder(navbar, "navbar-dark");
        }

    });
}

let observer = new IntersectionObserver(callback, options);
observer.observe(heroSection);