import { configureStore,getDefaultMiddleware,combineReducers} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import Products from './ProductSlice';
import DescSlice from './DescSlice';
import CartSlice from './CartSlice';

const middleware = [...getDefaultMiddleware(),logger];

const reducer = combineReducers({
    Products:Products,
    Desc:DescSlice,
    Cart:CartSlice
})

const store = configureStore({
    reducer:reducer,
    middleware
})

export default store;