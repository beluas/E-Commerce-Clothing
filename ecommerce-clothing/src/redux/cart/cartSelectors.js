import { createSelector } from "reselect";

const selectCart = (state) => state.cart; // Input selector

// const selectUser = state => state.user

export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.items
);

export const selectTotItems = createSelector(
	[selectCart],
	(cart) => cart.totItems
);

export const selectShowCart = createSelector(
	[selectCart],
	(cart) => cart.showCart
);

export const selectItemsCount = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((acc, item) => acc + item.quantity, 0)
);
