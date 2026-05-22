import {createSlice} from '@reduxjs/toolkit';

const initialState={
    list:[],
};
const taskSlice=createSlice({
    name:'tasks',
    initialState,
    reducers:{
        addTask:(state, action)=>{
            state.list.push(
                {id: Date.now(),
                text: action.payload}
            );
        },
        removeTask:(state, action)=>{
            state.list=state.list.filter(task=>task.id!==action.payload);
            console.log("payload:", action.payload);
        },
    },
});
export const {addTask, removeTask} = taskSlice.actions;
export default taskSlice.reducer;