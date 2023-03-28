import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
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
import storage from "redux-persist/lib/storage";
import { postApi } from "../service/post";
import { profileApi} from "../service/manage_profile"
import { voucherApi} from "../service/admin_voucher"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'user']
}

const rootReducer = combineReducers({
    [postApi.reducerPath]: postApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [voucherApi.reducerPath]: voucherApi.reducer
})

const persistedRducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedRducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(postApi.middleware, profileApi.middleware, voucherApi.middleware)
}
)



export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

export default persistStore(store)

