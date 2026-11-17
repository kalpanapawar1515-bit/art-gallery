console.log("Gallery loaded");

// ADD / REMOVE FAVOURITES
function addToFavourites(id, image, title, caption) {

    let favs = JSON.parse(localStorage.getItem("favourites")) || [];

    let index = favs.findIndex(item => item.id === id);

    if (index !== -1) {
        favs.splice(index, 1);
        alert("Removed 💔");
    } else {
        favs.push({ id, image, title, caption });
        alert("Added ❤️");
    }

    localStorage.setItem("favourites", JSON.stringify(favs));

    updateHeart(id);
}

// HEART UPDATE
function updateHeart(id) {

    let favs = JSON.parse(localStorage.getItem("favourites")) || [];

    let heart = document.getElementById("heart-" + id);

    if (!heart) return;

    let exists = favs.some(item => item.id === id);

    heart.innerText = exists ? "❤️" : "🤍";
}

// LOAD HEARTS
function loadHearts() {

    let favs = JSON.parse(localStorage.getItem("favourites")) || [];

    favs.forEach(item => updateHeart(item.id));
}

// LIGHTBOX
function openImage(img) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = img.src;
}

function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}

// SEARCH FUNCTION
function searchArt() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let text = card.innerText.toLowerCase();

        if (text.includes(input)) {
            card.style.display = "inline-block";
        } else {
            card.style.display = "none";
        }

    });
}

window.onload = function () {
    loadHearts();
}

function filterArt(category) {

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        if (
            category === "all" ||
            card.dataset.category === category
        ) {
            card.style.display = "inline-block";
        } else {
            card.style.display = "none";
        }

    });
}

document.addEventListener("DOMContentLoaded", function() {

    let count = document.querySelectorAll(".card").length;

    document.getElementById("artCount").innerText = count;

});