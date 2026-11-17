console.log("Favourites JS loaded");

window.onload = function () {
    renderFavourites();
};

function renderFavourites() {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    const container = document.getElementById("favContainer");

    container.innerHTML = "";

    favs.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <img src="${item.image}" width="200" onclick="openImage(this)">
            <div class="card-content">
                <h3>${item.title}</h3>
                <p>${item.caption}</p>
                <button onclick="removeFavourite(${index})">❌ Remove</button>
            </div>
        `;

        container.appendChild(div);
    });
}

// Remove favourite
function removeFavourite(index) {
    let favs = JSON.parse(localStorage.getItem("favourites")) || [];

    favs.splice(index, 1);

    localStorage.setItem("favourites", JSON.stringify(favs));

    renderFavourites();
}

// Lightbox
function openImage(img) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = img.src;
}

function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}