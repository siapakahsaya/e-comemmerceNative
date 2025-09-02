const products = [
    {
        title: 'Product 1',
        description: 'Product 1',
        image: '../assets/images.png',
    },
    {
        title: 'Product 2',
        description: 'Product 2',
        image: '../assets/images.png'
    }
]

const productGrid = document.getElementById('product');

products.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("product-grid");
    div.innerHTML = `
        <img src="${item.image}" alt="">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
    `;
    productGrid.appendChild(div);
});
