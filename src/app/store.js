import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/taskSlice';

export const store=configureStore({
    reducer:{
        tasks:userReducer,
    },
});