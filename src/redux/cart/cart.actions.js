import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN
});

// this is another action. an action can have a type and a payload
export const addItem = (item) => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item
});
