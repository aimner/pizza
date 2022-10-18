import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'


interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}
//Создаём началаный стейт

export const counterSlice = createSlice({
  name: 'counter',
  // имя редьюсера, оно будет использоваться в типе экшена
  //{name}/{action.type}
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      console.log(action)
      state.value += action.payload
      //именно в payload находятся данные, которые мы передаём в action
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { increment: i, decrement: d, incrementByAmount: ia } = counterSlice.caseReducers

export const selectCount = (state: RootState) => state.counter.value
// свой собственный селектор

export default counterSlice.reducer

