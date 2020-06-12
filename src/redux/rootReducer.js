import { userReducer } from "./user/userReducer";
import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { initialDataReducer } from "./initialData/initialData.reducer";
// import sessionStorage from 'redux-persist/lib/sessionStorage' (maybe another link)

const persistConfig = {
	key: "root", // What point inside our reducer we want to start
	storage,
	whitelist: ["cart"], // array containing the string names of any of the reducer we wanna store (persist)
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	initialData: initialDataReducer,
});

export default persistReducer(persistConfig, rootReducer);
