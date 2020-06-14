import { createSelector } from "reselect";

const selectInitialData = (state) => state.initialData;

export const selectSections = createSelector(
	[selectInitialData],
	(initialData) => initialData.sections
);

export const selectCollections = createSelector(
	[selectInitialData],
	(initialData) => initialData.collections
);

export const selectCollectionForPreview = createSelector(
	[selectCollections],
	(collection) => (collection ? Object.values(collection) : [])
);

export const selectCollection = (collectionURLParam) =>
	createSelector(
		[selectCollections],
		(collections) => collections[collectionURLParam]
	);
