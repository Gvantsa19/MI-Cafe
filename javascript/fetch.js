let currentPage = 1;
let totalPage;

function getUsers (page) {
    fetch('https://reqres.in/api/users?page=' + page, {
        method: 'GET'
    })
    .then ((response) => {
        if(response.status !== 200){
            throw response.status;
        }
        return response.json();
    })
    .then ((resData) => {
        let fragment = document.createDocumentFragment();
    
        resData.data.forEach(item => {
            console.log(resData);
            let li = document.createElement('li');
            li.classList.add('list');

            let span = document.createElement('span');
            span.textContent = item.first_name;
            span.classList.add('userName');

            let image = document.createElement('img');
            image.src = item.avatar;
            image.classList.add('userImg');

            let paragraph = document.createElement('p');
            paragraph.classList.add('paragraph');
            paragraph.textContent = 'We make sense of it all: from building and monetizing the online presence to growing an engaged following, from the promotion of latest projects to developing strategic brand partnerships. Whatever suits best and delivers most. We connect the dots.';

            li.appendChild(image);
            li.appendChild(span);
            li.appendChild(paragraph);

            fragment.appendChild(li);
        });

        document.getElementById('commentsList').innerHTML = ' ';
        document.getElementById('commentsList').appendChild(fragment);

        totalPage = resData.total_pages;
    })
    .catch ((error) => {
        if(error === 404){
            let p = document.createElement('p');

            p.textContent = 'page not found';

            return p;
        } else {
            return 'error';
        }
    })
}

document.getElementById('prev').addEventListener('click', function () {
    if(currentPage === 1){
        return;
    }
    currentPage -=1;
    getUsers(currentPage);
});

document.getElementById('next').addEventListener('click', function () {
    if(currentPage === totalPage){
        return;
    }
    currentPage +=1;
    getUsers(currentPage);
})

getUsers();