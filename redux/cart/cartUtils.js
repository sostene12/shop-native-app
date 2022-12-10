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