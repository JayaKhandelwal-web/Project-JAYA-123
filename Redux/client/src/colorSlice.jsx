import { createSlice } from "@reduxjs/toolkit";
const colorSlice= createSlice({
    name:"mycolor",
    initialState:{
        color:"pink"
    },
    reducers:{
        changeColor:(state,actions)=>{
            console.log(actions.payload.bgcolor);

            state.color=actions.payload.bgcolor;
        }
    }
})
export const {changeColor}= colorSlice.actions;
export default colorSlice.reducer;