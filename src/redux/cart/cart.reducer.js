import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
	hidden    : true,
	cartItems : []
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden : !state.hidden
			};
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				// we spread our array values and any additional values added at the end will appear at the end of our array
				cartItems : addItemToCart(state.cartItems, action.payload)
			};
		case CartActionTypes.REMOVE_ITEM:
			return {
				// spreading the state cause we want all the properties
				...state,
				cartItems : removeItemFromCart(state.cartItems, action.payload)
			};
		case CartActionTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems : state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id)
			};

		default:
			return state;
	}
};

export default cartReducer;
