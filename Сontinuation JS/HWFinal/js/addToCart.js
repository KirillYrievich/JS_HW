
const cart = document.querySelector(".cart");

const addToCartBtn = document.querySelectorAll(".products-card-button");


const userData = JSON.parse(cardsData);


document.onclick = (event) => {
  if (event.target.classList.contains("close")) {
    const cartItem = event.target.closest(".card");
    cartItem.remove();
  }
};


addToCartBtn.forEach((element, index) => {
  console.log(element);

  element.addEventListener("click", () => {

    cart.insertAdjacentHTML(
      "beforeend",
      `
        <div class="card" data-id="${userData[index].id}">
            <img class="products-card-img card_img" src="${userData[index].img}" alt="${userData[index].title}">
            <div class="info">
                <h2 class="card__title">${userData[index].title}</h2>
                <div class="card__content">
                    <p class="products-item-paragraf">${userData[index].info}</p>
                    <p class="card__item">Price: <span class="color">$${userData[index].price}</span> </p>
                </div>
                <button class="close" data-id="${userData[index].id}"></button>
            </div>
        </div>
        `
    );
  });
});
