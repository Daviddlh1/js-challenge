const $app = document.getElementById('app');
const $observe = document.getElementById('observe');
const API = 'https://api.escuelajs.co/api/v1/products';

const getData = async api => {
    fetch(api)
        .then(response => response.json())
        .then(response => {
            let products = response;
            let output = products.map(product => {
                return `<article class="Card">
                <img src="${product.images[0]} alt="${product.title}"/>
                <h2>${product.title}<small>$ ${product.price}</small></h2>
              </article>`;
            });
            let newItem = document.createElement('section');
            newItem.classList.add('Item');

            newItem.innerHTML = output;
            $app.appendChild(newItem);
            return products
        })
        .catch(error => console.log(error));
    const res = await fetch(api)
    const data = await res.json()
    return data
}

const loadData = () => {
    return getData(API);
}
loadData()

const intersectionObserver = new IntersectionObserver(entries => {
    // logic...
}, {
    rootMargin: '0px 0px 100% 0px',
});

intersectionObserver.observe($observe);