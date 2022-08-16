class Header {
  handlerOpenShoppingPage() {
    shoppingPage.render();
  }

  render(count) {
    const html = `
    <div class='header-container'>
      <div class='header-counter'>
        <p onclick="headerPage.handlerOpenShoppingPage()";>
          🔥 ${count}
        </p>
      </div>
    </div>
    `;
    ROOT_HEADER.innerHTML = html;
  }
}

const headerPage = new Header();
