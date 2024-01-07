export const addItemsToCart = (products,productToAdd) =>{
    const existingCartItem = products.find(
      (product) => product._id === productToAdd._id
    );
    if(existingCartItem){
      return products.map(product => 
        product._id ===  productToAdd._id ? {
          ...product,quantity:product.quantity+1
        } : product)
    }
  return [...products,{...productToAdd,quantity:1}]
}


export const changeItemQty = (products, productTochange) => {
  const findProduct = products.find(
    (product) => product._id === productTochange._id
  );
  if (findProduct) {
    return products.map((product) =>
      product._id === productTochange._id
        ? { ...product, quantity: productTochange.quantity }
        : product
    );
  }

  return [...products,{...productTochange,quantity:1}];
};


export const removeItemFromCart = (products, productToRemove) => {
  const existingProduct = products.find(
    (product) => product._id === productToRemove._id
  );
  if (existingProduct.quantity === 1) {
    return products.filter((product) => product._id !== productToRemove._id);
  }
  return products.map((product) =>
    product._id === productToRemove._id
      ? { ...product, quantity: product.quantity - 1 }
      : product
  );
};
