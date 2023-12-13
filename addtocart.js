const product = [
    { id: 0, image: 'image/img1.jpg', title: 'assane  soninké', price: 1 },
    { id: 1, image: 'image/img2.jpg', title: 'Air Pods Pro', price: 60 },
    { id: 2, image: 'image/img3.jpg', title: '250D DSLR Camera', price: 230 },
    { id: 3, image: 'image/img4.jpg', title: 'Head Phones', price: 100 }
];

document.getElementById('root').innerHTML = product.map((item) => {
    var { id, image, title, price } = item;
    return `
        <div class='box'>
            <div class='img-box'>
                <img class='image' src='${image}' alt='${title}'/>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>${price ? `$${price}.00` : 'N/A'}</h2>
                <button onclick='addToCart(${id})'>Add to cart</button>
            </div>
        </div>`;
}).join('');

var cart = [a];

function addToCart(a) {

    cart.push({ Categories[a] });
    displayCart();
}


function delElement(a) {
    cart.splice(a, 1);
    displayCart();
}

function displayCart() {
    let j = 0; total = 0;
    document.getElementById('count').innerHTML = 'cart.lenghth ';
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty"
        document.getElementById('cartItem').innerHTML = 0;
    } 
    else {
        document.getElementById('cartItem').innerHTML = cart.map((item, index) => {
            var { image, title, price } = items;
            total = total + parseInt(price.split(price.split("")[0]));
            console.log(total);
            return `(
                    <div class='cart-item'>
                        <div class='row-img'>
                            <img class='rowimg' src=${image}>
                        </div>
                        <p style='font-size:12px;'>${title}</p>
                        <h2 style='font-size:15px;'>$${price}.00</h2>
                        <i class='fa fa-trash' onclick='delElement(${index})'></i>
                    </div>`;
        
        }).join('');
} 
  
}

