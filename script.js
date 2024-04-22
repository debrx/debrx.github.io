// Function to toggle visibility of elements with the given class
function toggleSection(sectionClass) {
    var sections = document.querySelectorAll(sectionClass);
    sections.forEach(function(section) {
        section.classList.toggle('hidden');
    });
}

// Event listener for 'learn' button
document.getElementById('learn').addEventListener('click', function() {
    document.querySelector('.restaurant').scrollIntoView({
        behavior: 'smooth'
    });
    toggleSection('.owner, .menu');
});

// Event listener for 'ownerbtn' button
document.getElementById('ownerbtn').addEventListener('click', function() {
    document.querySelector('.owner').scrollIntoView({
        behavior: 'smooth'
    });
    toggleSection('.restaurant, .menu');
});

// Event listener for 'menucl' button
document.getElementById('menucl').addEventListener('click', function() {
    document.querySelector('.menu').scrollIntoView({
        behavior: 'smooth'
    });
    toggleSection('.restaurant, .owner');
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
