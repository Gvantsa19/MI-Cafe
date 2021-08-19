const element = document.querySelectorAll('.info');
element.forEach((item, key) => {
    item.addEventListener('click', function() {
        item.classList.add('second-block-active');

        element.forEach((el, index) => {
            if(key !== index){
                el.classList.remove('second-block-active');
            }
        })
    })
})