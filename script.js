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
    var owners = document.getElementsByClassName("menu");
    for (var i = 0; i < owners.length; i++) {
        var owner = owners[i];
        if (owner.style.display === "none" || owner.style.display === "") {
            owner.style.display = "flex";
        } else {
            owner.style.display = "none";
        }
    }
}

function hidesection(sectionClass) {
    var sections = document.querySelectorAll(sectionClass);
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
}