class Products {
  constructor() {
    this.classNameActive = 'products-item__btn_active';
    this.labelAdd = 'Добавить в корзину';
    this.labelRemove = 'Удалить из корзины';
  }

  handleSetLocationStorage(element, id) {
    const { pushProduct, products } = localStoregeUtil.putProducts(id);

    if (pushProduct) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    }
    headerPage.render(products.length);
  }

  render() {
    const productsStore = localStoregeUtil.getProducts();
    let htmlCatalog = '';
    CATALOG.forEach(({ id, name, price, img }) => {
      let activeClass = 'products__btn_active';
      let activeText = '';

      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
        activeClass = '';
      } else {
        activeText = this.labelRemove;
        activeClass = this.classNameActive;
      }

      htmlCatalog += `
      <li class='products-item'>
        <h3 class='products-item__title'>${name}</h3>
        <img class='products-item__img' src="${img}" >
        <p class='products-item__price'>⚡️ ${price.toLocaleString()}  USD </p>
        <button class='products-item__btn ${activeClass}'     onclick='productsPage.handleSetLocationStorage(this,"${id}");'>
          ${activeText}
        </button>
      </li>
      `;
    });
    const html = `
    <ul class='products-container'>
      ${htmlCatalog}
    </ul>
    `;
    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
