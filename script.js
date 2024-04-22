function hidesection(sectionClass) {
    var sections = document.querySelectorAll(sectionClass);
    sections.forEach(function(section) {
        section.style.display = "none";
    });
}
document.addEventListener('DOMContentLoaded', function() {
    // Assign event listeners to buttons
    document.getElementById('learn').addEventListener('click', function() {
        document.querySelector('.restaurant').scrollIntoView({
            behavior: 'smooth'
        });
        hidesection('.owner');
        hidesection('.menu');
    });

    document.getElementById('ownerbtn').addEventListener('click', function() {
        document.querySelector('.owner').scrollIntoView({
            behavior: 'smooth'
        });
        hidesection('.restaurant');
        hidesection('.menu');
    });

    document.getElementById('menucl').addEventListener('click', function() {
        document.querySelector('.menu').scrollIntoView({
            behavior: 'smooth'
        });
        hidesection('.restaurant');
        hidesection('.owner');
    });

    showSlides(slideIndex);

    document.getElementById('backToTopButton').addEventListener('click', function() {
        backToTop('top'); // Scroll back to the element with ID "top"
    });

});

function ownersec() {
    var owners = document.getElementsByClassName("owner");
    for (var i = 0; i < owners.length; i++) {
        var owner = owners[i];
        if (owner.style.display === "none" || owner.style.display === "") {
            owner.style.display = "flex";
        } else {
            owner.style.display = "none";
        }
    }
}

function ressec() {
    var owners = document.getElementsByClassName("restaurant");
    for (var i = 0; i < owners.length; i++) {
        var owner = owners[i];
        if (owner.style.display === "none" || owner.style.display === "") {
            owner.style.display = "flex";
        } else {
            owner.style.display = "none";
        }
    }
}

function menusec() {
    var menus = document.getElementsByClassName("menu");
    Array.from(menus).forEach(function(menu) {
        menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "flex" : "none";
    });
}

// Slideshow javascript.


let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
function backToTop(sectionId){
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({behavior: "smooth"});
    }
}

//Gallery

const indicators = document.querySelectorAll('a.indicator');
const resetCurrentActiveIndicator = () => {
    const activeIndicator = document.querySelector(".active");
    activeIndicator.classList.remove("active");
};
indicators.forEach((indicator) => {
    indicator.addEventListener('click', function () {
        resetCurrentActiveIndicator();
        this.classList.add('active');
    });
});

const sections = document.querySelectorAll("section");

const onSectionLeavesViewport = (section) => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    resetCurrentActiveIndicator();
                    const element = entry.target;
                    const indicator = document.querySelector(`a[href='#${element.id}']`);
                    indicator.classList.add("active");
                    return;
                }
            });
        },
        {
            root: null,
            rootMargin: "0px",
            threshold: 0.75
        }
    );
    observer.observe(section);
};

sections.forEach(onSectionLeavesViewport);