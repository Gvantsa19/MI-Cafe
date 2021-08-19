let list = document.getElementById('list1');
let div = document.getElementById('ccblock');

list.addEventListener('click', function() {
    div.classList.toggle('cactive');
});