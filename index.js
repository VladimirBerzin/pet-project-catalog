function render() {
  const productsStore = localStoregeUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

//server/catalog.json
//http://myjson.dit.upm.es/api/bins/dkl8

fetch('http://myjson.dit.upm.es/api/bins/dkl8')
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;
    setTimeout(() => {
      spinnerPage.handleClear();
      render();
    }, 1000);
  })
  .catch((error) => {
    errorPage.render();
  });
