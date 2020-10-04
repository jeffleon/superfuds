import savelocalstorage from "../../localstorage/savelocalstorage"
import  getlocalstorage from "../../localstorage/getlocalstorage"
import deletelocalstorage from "../../localstorage/deletelocalstorage"

const favoritesReducer = (state = [], action) =>{
    switch(action.type){
        case "ADD":
            const data = getlocalstorage()
            var flag = false
            if (data)
            {
                state = data
                state.forEach((element)=>{
                    if (element.id === action.payload.id)
                        flag = true
                })
            }
            if (!flag)
                state = state.concat({...action.payload, count: 1})
            savelocalstorage(state)
            return state
        case "DELETE":
            const data_filter = deletelocalstorage(action.payload);
            state = data_filter;
            savelocalstorage(data_filter);
            return [...state]
        case "PLUS":
            state.forEach((element)=>{
                if (element.id === action.payload)
                    element.count += 1;
            })
            savelocalstorage(state)
            return [...state]
        case "MINUS":
            state.forEach((element)=>{
                console.log( element.count);
                if (element.id === action.payload && element.count > 0)
                    element.count -= 1;
            })
            savelocalstorage(state)
            return [...state]
        default:
            return state
            
    }
} 

export default favoritesReducer