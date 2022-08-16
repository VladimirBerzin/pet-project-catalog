class Error {
  render() {
    const html = `
      <img src="./components/Error/img/error.webp" alt="" />
    `;
    spinnerPage.handleClear();

    ROOT_ERROR.innerHTML = html;
  }
}

const errorPage = new Error();
