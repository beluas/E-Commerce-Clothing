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
