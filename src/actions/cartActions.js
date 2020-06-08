import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING} from '../actions/types';

export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
         id }
    }

export const removeItem= (id)=> {
    return{
        type: REMOVE_ITEM,
        id
    }
}

export const addQuantity = (id) => {
    return{
        type: ADD_QUANTITY,
        id
    }
}

export const removeQuantity = (id) => {
    return{
        type: SUB_QUANTITY,
        id
    }
}