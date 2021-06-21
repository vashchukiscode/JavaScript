let cart = [];

window.onload = () => {
  render();
}



const productList = [
{
  name: "хлеб",
  price: 15
},
{
  name: "масло",
  price: 25
},
{
  name: "молоко",
  price: 40
},
{
  name: "костюм",
  price: 130
},  
{
  name: "колбаса",
  price: 2
},
]


render = () => {
  const container = document.getElementById('main-container');
  const showCart = document.createElement('button');
  showCart.innerText = "Показать корзину"
  showCart.onclick = () => {
    cartRender();
  }
  container.appendChild(showCart)
  
  productList.map((item, index) => {
    const product = document.createElement('div');
    product.id = `${index}`;
    product.className = "product-container";
    
    const productName = document.createElement('p');
    productName.innerText = item.name;
    
    const productPrice = document.createElement('p');
    productPrice.innerText = item.price;
    
    const addButton = document.createElement('button');
    addButton.innerText = "Добавить в корзину";
    
    product.appendChild(productName);
    product.appendChild(productPrice);
    product.appendChild(addButton);
    
    addButton.onclick = () => {
      cart.push(item);
    }
    
    
    
    container.appendChild(product);
    
  })
}



cartRender = () => {
  const cartContainer = document.createElement('div');
  let totalSum = 0;

  counter = () => {
    cart.forEach((item) => {
      totalSum += item.price;
    })
    console.log(totalSum)
  }

  counter();
  const totalSumLabel = document.createElement('p');
  totalSumLabel.innerText = `Итого: ${totalSum} руб.`

  cart.map((item, index) => {
    const cartProduct = document.createElement('div');
    cartProduct.id = `cart-${index}`;
    cartProduct.className = "cart-product-container";

    const cartProductName = document.createElement('p');
    cartProductName.innerText = item.name;

    const cartProductPrice = document.createElement('p');
    cartProductPrice.innerText = item.price;


    
    cartProduct.appendChild(cartProductName);
    cartProduct.appendChild(cartProductPrice);

    
    
    
    cartContainer.appendChild(cartProduct);
    document.body.appendChild(cartContainer);
  });
  
  cartContainer.appendChild(totalSumLabel);
}
