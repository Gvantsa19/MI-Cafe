const links = document.querySelectorAll('.links-block');
links.forEach((item, key) => {
    item.addEventListener('click', function() {
        item.classList.add('linnk');

        links.forEach((el, index) => {
            if(key !== index){
                el.classList.remove('linnk');
            }
        })
    })
})