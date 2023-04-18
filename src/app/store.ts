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
import { profileApi } from "../service/manage_profile"
import { voucherApi } from "../service/admin_voucher"
import { authApi } from "../service/auth";
import { adminApi } from "../service/admin";
import { cvApi } from "../service/manage_cv";
import { authEprApi } from "../service/auth_employer";
import { packageApi } from "../service/package";
import authReducer from "../reducer/auth";
import packageReducer from "../reducer/package";
import { orderApi } from "../service/employer/order";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'package']
}

const rootReducer = combineReducers({
    auth: authReducer,
    package: packageReducer,
    [postApi.reducerPath]: postApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [voucherApi.reducerPath]: voucherApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [cvApi.reducerPath]: cvApi.reducer,
    [authEprApi.reducerPath]: authEprApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [packageApi.reducerPath]: packageApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
})

const persistedRducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedRducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(
        postApi.middleware,
        profileApi.middleware,
        voucherApi.middleware,
        postApi.middleware,
        cvApi.middleware,
        authApi.middleware,
        authEprApi.middleware,
        packageApi.middleware,
        adminApi.middleware,
        orderApi.middleware
    )
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

export default persistStore(store)

