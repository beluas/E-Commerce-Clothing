import sections from "../../original";
import { SHOP_DATA } from "../../shopData";

const INITIAL_STATE = {
	sections: sections,
	collections: SHOP_DATA,
};

export const initialDataReducer = (
	state = INITIAL_STATE,
	{ type, payload }
) => {
	switch (type) {
		default:
			return state;
	}
};
