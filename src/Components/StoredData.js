

const getStoredData =()=>{

    let cart = []
    const storeCart = localStorage.getItem('cart');

    if (storeCart) {
        return JSON.parse(storeCart);
    }
    return cart;

}
const saveCartTolocalstorage =(cart)=>{
    localStorage.setItem('cart',JSON.stringify(cart));
}
const addToCart =(id)=>{
    const cart = getStoredData();
    cart.push(id)
    saveCartTolocalstorage(cart)
}

const removeFromLs =(id)=>{
    const cart = getStoredData();
    const remainingCart = cart.filter(index => index !==id)
    saveCartTolocalstorage(remainingCart);
}

export {addToCart,getStoredData,removeFromLs};