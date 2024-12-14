// import { configureStore } from "@reduxjs/toolkit";
// import { apiSlice } from "./slices/apiSlice";
// import cartSliceReducer from "./slices/cartSlice";
// import authReducer from "./slices/authSlice";
// import recentlyViewedReducer from "./slices/recentlyViewedSlice";
// import favoriteProductsReducer from "./slices/favoriteProductsSlice";

// const store = configureStore({
// 	reducer: {
// 		[apiSlice.reducerPath]: apiSlice.reducer,
// 		cart: cartSliceReducer,
// 		auth: authReducer,
// 		recentlyViewed: recentlyViewedReducer,
// 		favoriteProducts: favoriteProductsReducer,
// 	},
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware().concat(apiSlice.middleware),
// 	devTools: true,
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'
import cartSliceReducer from './slices/cartSlice'
import authReducer from './slices/authSlice'
import recentlyViewedReducer from './slices/recentlyViewedSlice'
import favoriteProductsReducer from './slices/favoriteProductsSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // use sessionStorage or localStorage
import encryptionManager from './../utils/encryptionManager'

// Persist configuration for sensitive data like auth & cart
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'cart'], // Only persist auth and cart data
    transforms: [
        {
            in: (inboundState) => {
                // Encrypt sensitive data before persisting
                if (inboundState.auth.userInfo) {
                    inboundState.auth.userInfo = encryptionManager.encrypt(
                        inboundState.auth.userInfo
                    )
                }
                if (inboundState.cart.cartItems) {
                    inboundState.cart.cartItems =
                        inboundState.cart.cartItems.map((item) => ({
                            ...item,
                            // Encrypt item data if needed
                            encryptedData: encryptionManager.encrypt(
                                item.someSensitiveData
                            ),
                        }))
                }
                return inboundState
            },
            out: (outboundState) => {
                // Decrypt data when reading from Redux
                if (outboundState.auth.userInfo) {
                    outboundState.auth.userInfo = encryptionManager.decrypt(
                        outboundState.auth.userInfo
                    )
                }
                if (outboundState.cart.cartItems) {
                    outboundState.cart.cartItems =
                        outboundState.cart.cartItems.map((item) => ({
                            ...item,
                            // Decrypt item data if needed
                            decryptedData: encryptionManager.ecrypt(
                                item.encryptedData
                            ),
                        }))
                }
                return outboundState
            },
        },
    ],
}

// Configure persisted reducer for auth and cart slices
const persistedAuthReducer = persistReducer(persistConfig, authReducer)
const persistedCartReducer = persistReducer(persistConfig, cartSliceReducer)

// Configure the Redux store
const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: persistedAuthReducer, // Using the persisted reducer for auth
        cart: persistedCartReducer, // Using the persisted reducer for cart
        recentlyViewed: recentlyViewedReducer,
        favoriteProducts: favoriteProductsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})

// Persistor to handle persisting the Redux store
export const persistor = persistStore(store)

export default store
