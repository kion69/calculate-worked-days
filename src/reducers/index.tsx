import { combineReducers } from 'redux';
export const Reducers = combineReducers<any>({
    name: 'counter',
    initialState: {
      value: 0,
    },
    reducers: {
      increment: (state: { value: number; }) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1;
      },
      decrement: (state: { value: number; }) => {
        console.log('adasda');
        state.value -= 1;
      },
      incrementByAmount: (state: { value: any; }, action: { payload: any; }) => {
        state.value += action.payload;
      },
    },
});
