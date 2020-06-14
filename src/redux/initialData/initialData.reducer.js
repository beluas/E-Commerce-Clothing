import sections from "../../original";
import { UPDATE_COLLECTIONS } from "./initialData.types";

const INITIAL_STATE = {
	sections: sections,
	collections: null,
};

export const initialDataReducer = (
	state = INITIAL_STATE,
	{ type, payload }
) => {
	switch (type) {
		case UPDATE_COLLECTIONS:
			return {
				...state,
				collections: payload,
			};

		default:
			return state;
	}
};
