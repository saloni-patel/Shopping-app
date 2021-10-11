export const createItems = (state=[],action) =>{
    switch(action.type){
            case "CREATE":
                console.log("payload", action.payload);
                return [...state, action.payload];
                
            case "UPDATE":
                const index = state.findIndex(item =>item.id === action.payload.id)
                const newData = [...state]
                newData[index] = action.payload;
                return newData;

                case "REMOVE_ITEM":
                    console.log("removed",action.payload)
                    return state.filter((item) => item.id !== action.payload)
            
            default:
              return state;
    }
};