import configureStore from './configureStore';
const store= configureStore(){
    reducer:{
        cart:cartReducer,
    }
}