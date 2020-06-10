import { SHOW_CART, ADD_ITEM } from "./actions.types";
import { addItemToCart } from "../../utils/utils";

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

		default:
			return state;
	}
};
