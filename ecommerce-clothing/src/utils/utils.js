export const addItemToCart = (items, newItem) => {
	if (items.length === 0) return [...items, { ...newItem, quantity: 1 }];

	const existingItem = items.find((item) => item.id === newItem.id);

	if (existingItem) {
		return items.map((item) => {
			if (item.id === newItem.id) {
				return { ...item, quantity: item.quantity + 1 };
			} else {
				return item;
			}
		});
	}

	return [...items, { ...newItem, quantity: 1 }];
};

export const removeItem = (items, itemToRemove) => {
	const existingItem = items.find((item) => item.id === itemToRemove.id);

	if (existingItem.quantity === 1) {
		return items.filter((item) => item.id !== itemToRemove.id);
	} else {
		return items.map((item) => {
			if (item.id === itemToRemove.id) {
				return { ...item, quantity: item.quantity - 1 };
			} else {
				return item;
			}
		});
	}
};

export const increaseQuantity = (items, itemToIncrease) => {
	return items.map((item) => {
		if (item.id === itemToIncrease.id) {
			return { ...item, quantity: item.quantity + 1 };
		} else {
			return item;
		}
	});
};

// export const decreaseQuantity = (items, itemToDecrease) => {
// 	return items.map((item) => {
// 		if (item.id === itemToDecrease.id) {
// 			return { ...item, quantity: item.quantity - 1 };
// 		} else {
// 			return item;
// 		}
// 	});
// };
