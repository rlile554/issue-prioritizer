import { createStore } from 'redux';
import {persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import reducer from './reducer';

const persistConfig = {
	key: 'root',
	storage: storage,
	stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, reducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);

