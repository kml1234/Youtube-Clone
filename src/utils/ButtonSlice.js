import { createSlice } from "@reduxjs/toolkit";

const ButtonSlice=createSlice({
    name:"Butt",
    initialState:{
       isContainerOpen:true,
    },
    reducers:{
        toggleConatiner:(state)=>{
            state.isContainerOpen=!state.isContainerOpen;

        },
    },

});

export const{toggleConatiner}=ButtonSlice.actions;
export default ButtonSlice.reducer;