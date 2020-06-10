import { SHOW_CART, ADD_ITEM } from "./actions.types";

export const showCart = () => ({
	type: SHOW_CART,
});

export const addItem = (item) => ({
	type: ADD_ITEM,
	payload: item,
});
