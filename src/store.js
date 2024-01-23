import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

// // state 만들어주는 함수
// let user = createSlice({
//   name: 'user',
//   // initialState: 'lee',
//   initialState : { name : 'lee', age : 20}, 
//   reducers : {
//     // 1. (state 수정) 함수 만들기 
//     changeName(state){
//       // object / array 일 떄
//       //return { name : 'park'} 또는 직접수정 ↓
//       state.name = 'park'

//       // 기본데이터일 때
//       // return 'park'
//     },
    
//     increase(state, action){
//       state.age += action.payload
//     }
//   }
// })

//2. (state 수정) 만든 함수 export
//export let { changeName, increase } = user.actions

let cart = createSlice({
  name : 'cart',
  initialState : [
    {
      id: 0,
      name: "T-Rex",
      count: 2
    },
  
    {
      id: 2,
      name: "Brachiosaurus",
      count: 1
    }
  ],
  reducers : {
    addCount(state, action){
      let id = state.findIndex((a)=>{ return a.id === action.payload })
      state[id].count++
    },
    addItem(state, action){
      state.push(action.payload)
    }
  }
})

export let { addCount, addItem } = cart.actions

export default configureStore({
  reducer: {
    //state 만들고 여기에 등록  작명 : 위의변수.reducer
    user: user.reducer,
    cart: cart.reducer
  }
}) 