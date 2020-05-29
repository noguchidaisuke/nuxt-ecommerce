
export const state = () => ({
  cart: [],
  cartLength: 0,
})


export const actions = {
  addToCart({state, commit}, product) {
    const cartProduct = state.cart.find(prod => prod._id === product._id)
    if (!cartProduct) {
      commit('pushToCart', product)
    } else {
      commit('incrementQuantity',cartProduct)
    }

    commit('incrementCartLength')
  }
}

export const mutations = {
  pushToCart(state, product) {
    product.quantity = 1;
    state.cart.push(product)
    console.log(state.cart)
  },
  incrementQuantity(state, cartProduct) {
    const index = state.cart.indexOf(cartProduct)
    cartProduct.quantity ++
    state.cart.splice(index, 1, cartProduct)
  },
  incrementCartLength(state) {
    state.cartLength = 0;
    if(state.cart.length > 0) {
      state.cart.map(product => {
        state.cartLength += product.quantity
      })
    }
  },
  changeQuantity(state, {product, quantity}) {
    let cartProduct = state.cart.find(prod => prod._id === product._id)
    let index = state.cart.indexOf(cartProduct)
    cartProduct.quantity = quantity
    state.cart.splice(index, 1, cartProduct)

    state.cartLength = 0;
    if(state.cart.length > 0) {
      state.cart.map(product => {
        state.cartLength += product.quantity
      })
    }
  },
  removeProductFromCart(state, product) {
    state.cartLength -= product.quantity
    console.log(product)
    let index = state.cart.indexOf(product)
    console.log(index)
    state.cart.splice(index, 1)
  }
}

export const getters = {
  getCartTotalPrice(state) {
    let total = 0;
    state.cart.map(product => total += product.quantity * product.price);
    return total;
  },
  getCartLength(state) {
    return state.cartLength;
  },
  getCart(state) {
    return state.cart;
  }
}