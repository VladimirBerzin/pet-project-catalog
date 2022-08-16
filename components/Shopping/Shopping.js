class Shopping {
  hendleClear() {
    ROOT_SHOPPING.innerHTML = '';
  }
  render() {
    const productsStore = localStoregeUtil.getProducts();
    let htmlCatalog = '';
    let sumCatalog = 0;
    let sum = '';

    CATALOG.forEach(({ id, name, price, img }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog += `
      <tr >
        <td class="shopping-element__img"><img src="${img}"></td>
        <td class="shopping-element__name">🔥  ${name} </td>
        <td class="shopping-element__price"> ⚡️ ${price.toLocaleString()} USD</td>
      </tr>
      `;
        sumCatalog += price;
        sum = `<tr >
          <td class="shopping-element__img"></td>
          <td class="shopping-element__name">💥 Сумма</td>
          <td class="shopping-element__price"> ⚡️ ${sumCatalog.toLocaleString()} USD</td>
        </tr>`;
      }
    });

    const html = `
    <div class="shopping-container">
      <table>
      <button class="shopping-close" onclick="shoppingPage.hendleClear()">
        <svg width="22" height="22" viewBox="0 0 21 21" fill="none">
          <path d="M13.3299 10.5005L20.7072 3.12321C21.0963 2.7317 21.0963 2.09952 20.7072 1.70801L19.292 0.291799C18.9005 -0.0972665 18.2683 -0.0972665 17.8768 0.291799L10.4995 7.67009L3.12221 0.2928C2.7307 -0.0962657 2.09852 -0.0962657 1.70701 0.2928L0.291799 1.70801C-0.0972665 2.09952 -0.0972665 2.7317 0.291799 3.12321L7.66909 10.5005L0.291799 17.8778C-0.0972665 18.2693 -0.0972665 18.9015 0.291799 19.293L1.70801 20.7082C2.09952 21.0973 2.7317 21.0973 3.12321 20.7082L10.5005 13.3309L17.8778 20.7082C18.2693 21.0973 18.9015 21.0973 19.293 20.7082L20.7082 19.293C21.0973 18.9015 21.0973 18.2693 20.7082 17.8778L13.3299 10.5005Z" fill="#000000"/>
        </svg>
      </button>
          ${htmlCatalog}
          ${sum}
      </table>
    </div>
    `;
    ROOT_SHOPPING.innerHTML = html;
  }
}

const shoppingPage = new Shopping();
