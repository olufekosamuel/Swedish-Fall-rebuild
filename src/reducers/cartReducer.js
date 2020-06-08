import img1 from '../assets/images/prod1.jpg';
import img2 from '../assets/images/prod2.jpg';
import img3 from '../assets/images/prod3.jpg';
import img4 from '../assets/images/prod4.jpg';
import img5 from '../assets/images/prod5.jpg';
import img6 from '../assets/images/prod6.jpg';
import img7 from '../assets/images/prod7.jpg';
import img8 from '../assets/images/prod8.jpg';
import img9 from '../assets/images/prod9.jpg';
import img10 from '../assets/images/prod10.jpg';
import { ADD_TO_CART, REMOVE_ITEM, ADD_QUANTITY, SUB_QUANTITY } from '../actions/types';


const initialState = {
    items: [
        {id:1,name:'CANDY BIKER SHORTS', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:37,img:img1,category:['Bottoms','New']},
        {id:2,name:'CANDY CURVED TIGHTS', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:62,img: img2, category:['Bottoms','New']},
        {id:3,name:'CANDY CURVED TIGHTS', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:62,img: img3, category:['Bottoms','New']},
        {id:4,name:'CANDY CURVED TIGHTS', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:62,img:img4, category:['Bottoms']},
        {id:5,name:'CANDY SPORTS BRA', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:37,img: img5, category:['Tops','New']},
        {id:6,name:'CANDY RUNNING HOODY', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:50,img: img6,category:['Tops','New']},
        {id:7,name:'CANDY CURVED TIGHTS', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:37,img: img7,category:['Bottoms','New']},
        {id:8,name:'CANDY CURVED TIGHTS', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:62,img: img8, category:['Bottoms']},
        {id:9,name:'CANDY RUNNING HOODY', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:62,img: img9,category:['Tops','New']},
        {id:10,name:'CANDY SPORTS BRA', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:37,img: img10, category:['Tops','New']},
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
          localStorage.setItem('addedItem',JSON.stringify(addedItem))
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
        localStorage.setItem('addedItem',JSON.stringify(new_items))
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
          localStorage.setItem('addedItem',JSON.stringify(addedItem))
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
            localStorage.setItem('addedItem',JSON.stringify(new_items))
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