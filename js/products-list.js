class ProductList {
	constructor(cart) {
		this.cart = cart;
		this.container = document.querySelector('.shop__products');
		this.productService = new ProductsService();
		this.sortDirection = 'ascending';
		this.productService
			.getProducts()
			.then(() => this.renderProducts())
			.then(() => this.addEventListeners());
	}
	async renderProducts() {
		let productListDomString = '';
		const products = await this.productService.getProducts();
		[...products]
			.sort((a, b) => this.sortDirection === 'ascending'
				? a.price - b.price
				: b.price - a.price)
			.forEach(product => {
				productListDomString += `<div class="card" style="width: 18rem;">
						<img src="img/shop/${product.image}" class="card-img-top" alt="${product.title}">
						<div class="card-body">
							<h5 class="card-title">${product.title}</h5>
							<p>${product.description}</p>
							<div class="d-flex justify-content-around product">
                        <button class="btn btn-info js-button-info" data-bs-toggle="modal"
                          data-bs-target="#productInfoModal" data-id="${product.id}">Info
                        </button>
                        <button class="btn btn-primary js-button-buy" data-id="${product.id}">
                          $${product.price} - Buy
                        </button>
                      </div>
						</div>
					</div>`;
			});
		this.container.innerHTML = productListDomString;
	}
	async addEventListeners() {
		document
			.querySelectorAll('.js-button-info')
			.forEach(button =>
				button.addEventListener('click', event =>
					this.handleProductInfoClick(event)
				)
			);
		document
			.querySelectorAll(
				'.js-button-buy'
			)
			.forEach(button =>
				button.addEventListener('click', event =>
					this.handleProductBuyClick(event)
				)
			);
		document.querySelector('.sort-asc').addEventListener('click', async () => {
			this.sortDirection = 'ascending';
			await this.renderProducts();
			this.addEventListeners();
		});
		document.querySelector('.sort-desc').addEventListener('click', async () => {
			this.sortDirection = 'descending';
			await this.renderProducts();
			this.addEventListeners();
		});
	}
	async handleProductInfoClick(event) {
		const button = event.target; // Button that triggered the modal
		const id = button.dataset.id; // Extract info from data-* attributes
		const product = await this.productService.getProductById(id);
		const modal = document.querySelector('#productInfoModal');
		const productImg = modal.querySelector('.modal-body .card-img-top');
		productImg.setAttribute('src', 'img/shop/' + product.image);
		productImg.setAttribute('alt', product.title);
		modal.querySelector('.modal-body .card-title').innerText = product.title;
		modal.querySelector('.modal-body .card-text').innerText =
			product.description;
		const btnBuy = modal.querySelector('.js-button-buy');
		btnBuy.innerText = `${product.price} - Buy`;
		btnBuy.dataset.id = id;
	}
	handleProductBuyClick(event) {
		const button = event.target;
		const id = button.dataset.id;
		this.cart.addProduct(id);
		window.showAlert('Product added to cart');
	}
}
