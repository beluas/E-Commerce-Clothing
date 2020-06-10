import { SET_CURRENT_USER } from "./actions.types";

const INITIAL_STATE = {
	currentUser: "",
};

export const userReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case SET_CURRENT_USER:
			return {
				...state,
				currentUser: payload,
			};
		default:
			return state;
	}
};
