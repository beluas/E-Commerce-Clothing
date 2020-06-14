import { UPDATE_COLLECTIONS } from "./initialData.types";

export const updateCollections = (collections) => ({
	type: UPDATE_COLLECTIONS,
	payload: collections,
});
