
function toggleSection(sectionClass) {
    var sections = document.getElementsByClassName(sectionClass);
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        section.classList.toggle('hidden');
    }
}

document.getElementById('learn').addEventListener('click', function() {
    document.querySelector('.restaurant').scrollIntoView({
        behavior: 'smooth'
    });
    toggleSection('.owner');
    toggleSection('.menu');
});

document.getElementById('ownerbtn').addEventListener('click', function() {
    document.querySelector('.owner').scrollIntoView({
        behavior: 'smooth'
    });
    toggleSection('.restaurant');
    toggleSection('.menu');
});

document.getElementById('menucl').addEventListener('click', function() {
    document.querySelector('.menu').scrollIntoView({
        behavior: 'smooth'
    });
    toggleSection('.restaurant');
    toggleSection('.owner');
});

// function ownersec() {
//     var owners = document.getElementsByClassName("owner");
//     for (var i = 0; i < owners.length; i++) {
//         var owner = owners[i];
//         if (owner.style.display === "none" || owner.style.display === "") {
//             owner.style.display = "flex";
//         } else {
//             owner.style.display = "none";
//         }
//     }
// }
//
// function ressec() {
//     var owners = document.getElementsByClassName("restaurant");
//     for (var i = 0; i < owners.length; i++) {
//         var owner = owners[i];
//         if (owner.style.display === "none" || owner.style.display === "") {
//             owner.style.display = "flex";
//         } else {
//             owner.style.display = "none";
//         }
//     }
// }
//
// function menusec() {
//     var owners = document.getElementsByClassName("menu");
//     for (var i = 0; i < owners.length; i++) {
//         var owner = owners[i];
//         if (owner.style.display === "none" || owner.style.display === "") {
//             owner.style.display = "flex";
//         } else {
//             owner.style.display = "none";
//         }
//     }
// }
