import {
	SHOW_CART,
	ADD_ITEM,
	REMOVE_ITEM,
	//DECREASE_QUANTITY,
	INCREASE_QUANTITY,
} from "./actions.types";
import {
	addItemToCart,
	removeItem,
	increaseQuantity,
	//decreaseQuantity,
} from "../../utils/utils";

const INITIAL_STATE = {
	items: [],
	showCart: false,
	totItems: 0,
};

export const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case SHOW_CART:
			return {
				...state,
				showCart: !state.showCart,
			};

		case ADD_ITEM:
			return {
				...state,
				items: addItemToCart(state.items, payload),
				totItems: state.totItems + 1,
			};

		case REMOVE_ITEM:
			return {
				...state,
				items: removeItem(state.items, payload),
				totItems: state.totItems - 1,
			};

		// case DECREASE_QUANTITY:
		// 	return {
		// 		...state,
		// 		items: decreaseQuantity(state.items, payload),
		// 		totItems: state.totItems - 1,
		// 	};

		case INCREASE_QUANTITY:
			return {
				...state,
				items: increaseQuantity(state.items, payload),
				totItems: state.totItems + 1,
			};

		default:
			return state;
	}
};
