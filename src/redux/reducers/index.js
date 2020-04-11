import Immutable from 'seamless-immutable'

export const ADD_TO_CART = 'addToCart';
export const DELETE_ITEM_FROM_CART = 'deleteFromCart';

export const addToCart = item => ({
  type: ADD_TO_CART,
  payload: item
});

export const deleteItemFromCart = itemCode => ({
  type: DELETE_ITEM_FROM_CART,
  payload: itemCode
});

export default (state = Immutable({ cart: {} }), action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      const { quantity, unitPrice, itemCode, name, unitWeight, brand } = payload;
      return state.setIn(['cart', payload.itemCode], { itemCode, quantity, unitPrice, name, unitWeight, brand });
    case DELETE_ITEM_FROM_CART:
      return state.setIn(['cart', payload.itemCode], { ...payload, quantity: 0 });
    default: return state;
  }
}