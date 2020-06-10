export const addItemToCart = (items, newItem) => {
	const existingItem = items.find((item) => item.id === newItem.id);

	if (existingItem) {
		return items.map((item) => {
			if (item.id === existingItem.id /*or newItem*/) {
				return { ...item, quantity: item.quantity + 1 };
			} else {
				return item;
			}
		});
	}

	return [...items, { ...newItem, quantity: 1 }];
};
