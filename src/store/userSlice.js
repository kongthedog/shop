import { createSlice } from '@reduxjs/toolkit'

// state 만들어주는 함수
let user = createSlice({
    name: 'user',
    // initialState: 'lee',
    initialState : { name : 'lee', age : 20}, 
    reducers : {
      // 1. (state 수정) 함수 만들기 
      changeName(state){
        // object / array 일 떄
        //return { name : 'park'} 또는 직접수정 ↓
        state.name = 'park'
  
        // 기본데이터일 때
        // return 'park'
      },
      
      increase(state, action){
        state.age += action.payload
      }
    }
})

  //2. (state 수정) 만든 함수 export
export let { changeName, increase } = user.actions

export default user