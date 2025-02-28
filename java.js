const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailIcon = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');
const productCard = document.querySelector('.product-card');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideMenuClose = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideMenuClose) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideMenuClose = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideMenuClose) {
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    closeProductDetailAside();

}

function toggleCarritoAside() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive');
    } else if (!isDesktopMenuClose) {
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');

}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


function renderProducts(arr) {
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        productInfo.appendChild(productInfoDiv);
        
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfo.appendChild(productInfoFigure);
    
        productInfoFigure.appendChild(productImgCart);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);

