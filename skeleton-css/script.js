const grid = document.querySelector('.grid');
const cardTemplate = document.getElementById('card-template');

for(let i = 0; i < 10; i++){
    grid.append(cardTemplate.content.cloneNode(true))
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>{
        grid.innerHTML = '';
        data.forEach(item=>{
            const div = cardTemplate.content.cloneNode(true);
            div.querySelector('[data-title]').innerText = item.title;
            div.querySelector('[data-body]').innerText = item.body;
            grid.append(div)
        })
    })