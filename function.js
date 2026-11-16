// script.js
document.getElementById('yesButton').addEventListener('click', function() {
    const image = document.getElementById('mainImage');
    const currentSrc = image.getAttribute('src');
    image.setAttribute('src', currentSrc === 'erik.jpeg' ? 'cilek.jpeg' : 'erik.jpeg');
});

const noButton = document.getElementById('noButton');

// "Hayır" butonunu ekranın içinde rastgele bir yere kaçırır
function moveNoButton(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const margin = 10;
    const btnWidth = noButton.offsetWidth;
    const btnHeight = noButton.offsetHeight;
    const maxX = Math.max(margin, window.innerWidth - btnWidth - margin);
    const maxY = Math.max(margin, window.innerHeight - btnHeight - margin);

    const randomX = margin + Math.random() * (maxX - margin);
    const randomY = margin + Math.random() * (maxY - margin);

    noButton.style.position = 'fixed';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Bilgisayar: fare üzerine gelince kaçar
noButton.addEventListener('mouseover', moveNoButton);

// Telefon / tablet: parmak dokunduğu anda kaçar, tıklama gerçekleşmez
noButton.addEventListener('touchstart', moveNoButton, { passive: false });
noButton.addEventListener('pointerdown', moveNoButton);

// Her ihtimale karşı: tıklama ya da klavyeyle odaklanma olursa da kaçar
noButton.addEventListener('click', moveNoButton);
noButton.addEventListener('focus', function() {
    moveNoButton();
    noButton.blur();
});
