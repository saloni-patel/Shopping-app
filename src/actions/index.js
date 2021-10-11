export const createItems = (data, type) => {
    console.log("action",data)
    return{
        type,
        payload: data
    }
}

export const addToCart = (data) => {
    console.log("action",data)

    return {
      type: "ADD_CART",
      payload: data
    }
  }


  export const removeItem = (id) => {
    console.log("remove",id)
    return {
      type: "REMOVE_ITEM",
      payload: id
    }
  }

  export const incrementItem = (data) => {
    console.log("incre",data)
    return{
      type: "INCREMENT_ITEM",
      payload: data
    }
  }

  export const decrementItem = (data) => {
    console.log("decre",data)
    return{
      type: "DECREMENT_ITEM",
      payload: data
    }
    
  }

  export const removeCartItem = (id) =>{
    console.log("remove from cart",id)
    return{
      type: "REMOVE_ITEM",
      payload: id
    }

  }
  // export const emptyCart = () => {
  //   return {
  //     type: "EMPTY_CART",
  //   };
  // };
  
  

  







