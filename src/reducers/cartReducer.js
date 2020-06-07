import img1 from '../assets/images/product-01.jpg';
import img2 from '../assets/images/product-02.jpg';
import img3 from '../assets/images/product-03.jpg';
import img4 from '../assets/images/product-04.jpg';
import img5 from '../assets/images/product-05.jpg';
import img6 from '../assets/images/product-06.jpg';
import img7 from '../assets/images/product-07.jpg';
import img8 from '../assets/images/product-08.jpg';
import { ADD_TO_CART, REMOVE_ITEM, ADD_QUANTITY, SUB_QUANTITY } from '../actions/types';


const initialState = {
    items: [
        {id:1,name:'Esprit Ruffle Shirt', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:16.64,img:img1},
        {id:2,name:'Herschel supply', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:35.31,img: img2},
        {id:3,name:'Only Check Trouser', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:25.50,img: img3},
        {id:4,name:'classNameic Trench Coat', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:75.00,img:img4},
        {id:5,name:'Front Pocket Jumper', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:34.75,img: img5},
        {id:6,name:'Vintage Inspired classNameic', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:93.20,img: img6},
        {id:7,name:'Shirt in Stretch Cotton', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:52.66,img: img7},
        {id:8,name:'Pieces Metallic Printed', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:18.96,img: img8}
    ],
    addedItems:[],
    total: 0
}

const cartReducer= (state = initialState,action)=>{
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item= state.addedItems.find(item=> action.id === item.id)
        if(existed_item)
        {
          addedItem.quantity += 1 
          console.log(addedItem);
           return{
              ...state,
               total: state.total + addedItem.price 
                }
        }
        else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
          
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
          
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }
    else{
        return state
    }

}
export default cartReducer;