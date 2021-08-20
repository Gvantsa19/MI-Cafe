const detail = document.querySelectorAll('.boox');
detail.forEach((item, key) => {
    item.addEventListener('click', function() {
        item.classList.add('practive');

        detail.forEach((el,index) => {
            if(key !== index) {
                el.classList.remove('practive');
            }
        })
    })
})