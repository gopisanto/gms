import Immutable from 'seamless-immutable'

export const ADD_TO_CART = 'addToCart';

export const addToCart = item => ({
  type: ADD_TO_CART,
  payload: item
})

export default (state = Immutable({ cart: {} }), action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      const { quantity, unitPrice, itemCode, name, unitWeight, brand } = payload;
      return state.setIn(['cart', payload.itemCode], { itemCode, quantity, unitPrice, name, unitWeight, brand });
    default: return state;
  }
}