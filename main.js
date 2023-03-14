let shop = document.getElementById("shop");

let shopItemData = [
  {
    id: "white",
    name: "Casual Shirt",
    price: 100,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    img: "img/pexels-anna-nekrashevich-8532616.jpg",
  },
  {
    id: "green",
    name: "Mens Shirt",
    price: 70,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    img: "img/pexels-anna-nekrashevich-8532616.jpg",
  },
  {
    id: "blue",
    name: "Church Shirt",
    price: 60,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    img: "img/pexels-anna-nekrashevich-8532616.jpg",
  },
  {
    id: "yello",
    name: "Office Shirt",
    price: 30,
    decs: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    img: "img/pexels-anna-nekrashevich-8532616.jpg",
  },
];

let basket = [];
let generateShop = () => {
  return (shop.innerHTML = shopItemData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      return `
    <div id=product-i-${id}  class="item">
        <img width='220' src=${img} alt=''>
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price}</h2>
            <div class="btns">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">0</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
  `;
    })
    .join(""));
};
generateShop();

let increment = (id) => {
  let selectedItem = id;

  let search = basket.find((y) => y.id === selectedItem.id);
  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  //   console.log(basket);
  update(selectedItem.id);
};

let decrement = (id) => {
  let selectedItem = id;

  let search = basket.find((y) => y.id === selectedItem.id);
  if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  //   console.log(basket);
  update(selectedItem.id);
};

let update = (id) => {
  let search = basket.find((z) => z.id === id);
  //   console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");

  let caculate = basket.map((a) => a.item).reduce((a, b) => a + b, 0);
  cartIcon.innerHTML = caculate;
};
