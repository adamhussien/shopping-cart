 'use strict'
const data = [
    {
    id:'1',
    name:'t shirt',
    price: "100",
    img: "img/one.webp"
    },
    { 
    id:'2',
    name:'t shirt',
    price: "120",
    img: "img/two.webp"
    },
    { 
        id:'3',
        name:'t shirt',
        price: "120",
        img: "img/three.webp"
        },
        { 
        id:'4',
        name:'t shirt',
        price: "100",
        img: "img/four.webp"
        },
        { 
        id:'5',
        name:'t shirt',
        price: "120",
        img: "img/five.webp"
        },
        { 
            id:'6',
            name:'t shirt',
            price: "120",
            img: "img/six.webp"
            },
            { 
                id:'7',
                name:'t shirt',
                price: "120",
     img: "img/seven.webp"
    },
    { 
        id:'7',
        name:'t shirt',
        price: "120",
    img: "img/seven.webp"
    }
             
    ] 
  const shop = document.getElementById('shop');
    const cart = document.getElementById('cart');
    const amount = document.querySelector('.amount');
    const cartIcon = document.querySelector('.fa-cart-shopping');
    
    let cartItems = [];
    let totalPrice = 0;
    
    function updateCartTotal() {
        let total = 0;
        cartItems.forEach(item => {
            total += item.quantity * item.price;
        });
        amount.textContent = total;
    }
    
    data.forEach(product => {
        const item = document.createElement('div');
        item.className = 'card';
        item.innerHTML = `
        <img src="${product.img}" alt=""> 
            <h4>${product.name}</h4>
            <p>${product.price}</p>
            <button data-id="${product.id}">add to cart</button>
           
        `;
        shop.appendChild(item);
    
        const addButton = item.querySelector('button');
    
        addButton.addEventListener('click', () => {
            const index = cartItems.findIndex(item => item.id === product.id);
            if (index !== -1) {
                cartItems[index].quantity++;
            } else {
                cartItems.push({

                    id: product.id,
                    name: product.name,
                    price: product.price,
                    img: product.img,
                    quantity: 1
                });
            }
            updateCart();
        });
    });
    cartIcon.addEventListener('click', () => {
        cart.classList.toggle('open');
        updateCart();
    });
    
    
    function updateCart() {
        cart.innerHTML = '';
        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'card-item';
            cartItem.innerHTML = `
            <div class="imgx">
            <img src="${item.img}" alt="">
                <p class="name">${item.name}</p>
            </div>
                <p class="price">${item.price}</p>

                <div class="btns">
                <button class="minus" data-id="${item.id}"> <i class="fa-solid fa-minus"></i></button>
                <p class="quant">${item.quantity}</p>
                <button class="plus"><i class="fa-solid fa-plus"></i></button>
                
                </div>
                
            `;
            cart.appendChild(cartItem);
           
            const minusButton = cartItem.querySelector('.minus');
            minusButton.addEventListener('click', () => {
                // Find the item in the cartItems array
                const index = cartItems.findIndex(cartItem => cartItem.id === item.id);
                if (index !== -1 && cartItems[index].quantity > 0) {
                    cartItems[index].quantity--;
                    updateCart();
                }
            });
            const plusButton = cartItem.querySelector('.fa-plus');
            plusButton.addEventListener('click', () => {
                // Find the item in the cartItems array
                const index = cartItems.findIndex(cartItem => cartItem.id === item.id);
                if (index !== -1) {
                    cartItems[index].quantity++;
                    updateCart();
                }
            });


        });

        updateCartTotal();

}




