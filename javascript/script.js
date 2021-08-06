let navBar = document.getElementById('nav-bar');
let burgerButton = document.getElementById('burger');

burgerButton.addEventListener('click', function () {
    navBar.classList.toggle('active');
});