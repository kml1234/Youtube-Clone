import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import ButtonSlice from "./ButtonSlice";



const store=configureStore({
    reducer:{
        app:appSlice,
        Butt:ButtonSlice,
    },

});

export default store;
