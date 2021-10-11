export const addCart = (state = [], action) => {
  switch (action.type) {

    case "ADD_CART":
      const data = state.find((item) => item.id === action.payload.id);
      if (data) {
        const updatedData = state.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });
        return updatedData;
      } else {
        return [...state, action.payload];
      }

    case "DECREMENT_ITEM":
      const item = state.find(item => item.id === action.payload.id);
  
   
      if (item) {
        const newData = state.map((item) => {
          if (item.id === action.payload.id && item.quantity !== 1 ) {

            {

              return {
                ...item,
                quantity: item.quantity - 1
              };
            } 
          }
          else {
            return item;
          }
        })

        return newData;

      }

     return [...state, action.payload];

    case "REMOVE_ITEM":
      console.log("remove", action.payload);
      const newItem = state.filter(item => item.id !== action.payload);
      console.log(newItem);
      return newItem;
      

      // case "EMPTY_CART":
      //   return {
      //     ...state,
      //     products: state.item.map(product =>
      //       product.selected
      //         ? {...item, selected: false, quantity: 1}
      //         : item,
      //     ),
      //   };

default:
      return state;
  }
};