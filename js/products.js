const productsJson =
	`[
    {
        "id": "1",
        "title": "Kitty",
        "image": "img/shop/480.jpg",
        "description": "",
        "price": 33.00
    },
    {
        "id": "2",
        "title": "Zuzyk",
        "image": "img/shop/480_(1).jpg",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "price": 100.50
    },
	 {
			"id": "3",
			"title": "Tuddy",
			"image": "img/shop/480_(2).jpg",
			"description": "",
			"price": 22.50
	 },
	 {
			"id": "4",
			"title": "Robby",
			"image": "img/shop/480.png",
			"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			"price": 10
  }

]`;

function renderProducts(products) {
	const productsContainer = document.querySelector('.shop__products');
	let html = '';
	for (const product of products) {
		html += `<div class="card" style="width: 18rem;">
						<img src="${product.image}" class="card-img-top" alt="${product.title}">
						<div class="card-body">
							<h5 class="card-title">${product.title}</h5>
							<p>${product.description}</p>
							<p class="card-text">${product.price}USD</p>
							<a href="#" class="btn btn-outline-warning">Buy</a>
						</div>
					</div>`;
	}
	productsContainer.innerHTML = html;
}

renderProducts(JSON.parse(productsJson));
/*
const buttonSortAscending = document.querySelector('.sort-ascending');
const buttonSortDescending = document.querySelector('.sort-descending');

buttonSortAscending.addEventListener('click', sortAscending);
buttonSortDescending.addEventListener('click', sortDescending);

function sortAscending() {
	 renderProducts(JSON.parse(productsJson), 'ascending');
}

function sortDescending() {
	 renderProducts(JSON.parse(productsJson), 'descending');
}*/