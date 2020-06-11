import {
	SHOW_CART,
	ADD_ITEM,
	REMOVE_ITEM,
	INCREASE_QUANTITY,
	DECREASE_QUANTITY,
} from "./actions.types";

export const showCart = () => ({
	type: SHOW_CART,
});

export const addItem = (item) => ({
	type: ADD_ITEM,
	payload: item,
});

export const clearItem = (item) => ({
	type: REMOVE_ITEM,
	payload: item,
});

export const increaseQuantity = (item) => ({
	type: INCREASE_QUANTITY,
	payload: item,
});

export const decreaseQuantity = (item) => ({
	type: DECREASE_QUANTITY,
	payload: item,
});
