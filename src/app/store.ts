import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { jobdoneApi } from '../services/jobdone';
import { personalInforApi } from '../services/personalInfor';
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
}
const rootReducer = combineReducers({
    [jobdoneApi.reducerPath]: jobdoneApi.reducer,
    [personalInforApi.reducerPath]: personalInforApi.reducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(jobdoneApi.middleware, personalInforApi.middleware),
})
export default persistStore(store)
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;