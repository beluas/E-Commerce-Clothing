import { SHOW_CART } from "./actions.types";

const INITIAL_STATE = {
	items: [],
	showCart: false,
};

export const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case SHOW_CART:
			return {
				...state,
				showCart: !state.showCart,
			};

		default:
			return state;
	}
};
