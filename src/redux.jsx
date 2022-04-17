import rootReducer from './stores/reducer/index'
import { createStore } from 'redux';

const store = createStore(rootReducer);
export const dispatch = store.dispatch;
export default store;
