const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMap = document.querySelector(".map");
const buttonreduce = document.querySelector(".reduce");
const buttonFilter = document.querySelector(".filter");

function formatcurrency(value) {
  return (newValue = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  }));
}

function showAll(productsArray) {
  myLi = "";

  productsArray.forEach((product) => {
    myLi += `
    <li>
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class = "price"> ${formatcurrency(product.price)}</p>
    </li>
    `;
  });

  list.innerHTML = myLi;
}

function discount() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));

  showAll(newPrices);
}

function total() {
  const sum = menuOptions.reduce((acc, product) => acc + product.price, 0);

  list.innerHTML = `
    <li>
        <p class = "total">A soma de todos os itens do menu é <br> <span class="price">R$ ${formatcurrency(sum)}</span></p>
    </li>
    <li>
        <p class = "total">A soma de todos os itens do menu com desconto é <br> <span class="price"> ${formatcurrency(
          sum * 0.9
        )}</span></p>
    </li>
    `;
}

function vegan() {
  const veganOptions = menuOptions.filter((product) => product.vegan);
  showAll(veganOptions);
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMap.addEventListener("click", discount);
buttonreduce.addEventListener("click", total);
buttonFilter.addEventListener("click", vegan);
