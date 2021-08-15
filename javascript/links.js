let btnn = document.querySelectorAll('.linnk');
let links = document.querySelectorAll('.links');

document.querySelectorAll('.linnk').forEach((item) => {
    item.addEventListener('click', function() {
        links.forEach((element) => {
            element.classList.toggle('link-active');
        })
    })
})