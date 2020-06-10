import { userReducer } from "./user/userReducer";
import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartReducer";

export const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
});
