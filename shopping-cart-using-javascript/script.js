const products = [
  {
    id: 2,
    name: "BLACK WATCH",
    price: 4000.0,
    image: "./imgs/product-item7.jpg",
  },
  {
    id: 3,
    name: "SPOTTED WATCH",
    price: 5000.0,
    image: "./imgs/product-item8.jpg",
  },
  {
    id: 1,
    name: "ANALOG WATCH",
    price: 1000.0,
    image: "./imgs/product-item9.jpg",
  },
  {
    id: 4,
    name: "PINK WATCH",
    price: 3000.0,
    image: "./imgs/product-item6.jpg",
  },
];

const cart = [];

document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.querySelector(".products");
  const cartButton = document.getElementById("cart-button");
  const closeModal = document.getElementById("closeModal");
  const modal = document.getElementById("cartModal");

  //create product elements
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `<img src="${product.image}" alt="${
      product.name
    }">
        <h3 style="text-decoration:underline">${product.name}</h3>
        <p>Price: &#8377;${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})"> Add To Cart</button>`;

    productContainer.appendChild(productElement);
  });

  // open cart model
  cartButton.addEventListener("click", () => {
    modal.style.display = "block";
  });

  //   close cart modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  //   add product to the cart
  window.addToCart = (productID) => {
    const product = products.find((prod) => prod.id === productID);

    if (product) {
        cart.push(product);
        updateCart();
    }
    // if (product) {
    //   console.log(product);
    //   console.log(cart, "before cart");
    //   if (cart.length > 0) {
    //     cart.map((obj) => {
    //       console.log(obj, "obj");
    //       if (obj.id === product.id) {
    //         console.log("Product already exists....");
    //         return false;
    //       } else {
    //         console.log("Product Added....");
    //         cart.push(product);
    //       }
    //     });
    //   } else {
    //     cart.push(product);
    //     console.log("Product Added.... in else");
    //     console.log(cart, "after cart");
    //   }

    //   updateCart();
    // }
  };

  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  //    update the cart and total items

  function updateCart() {
    cartCount.textContent = cart.length;
    cartItems.innerHTML = "";

    let totalPrice = 0;

    cart.forEach((product) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
        <div> 
        <h3> ${product.name} </h3>
        <p> <b> Price: </b> ${product.price.toFixed()} </p>
        </div>
        <button onClick="removeFromCart(${product.id})"> Remove Item </button>`;

      cartItems.appendChild(cartItem);
      totalPrice += product.price;
    });

    cartTotal.innerHTML = totalPrice.toFixed();
  }

  window.removeFromCart = (productID) => {
    const index = cart.findIndex((product) => product.id === productID);
    if (index !== -1) {
      cart.splice(index, 1);
      updateCart();
    }
  };
});
