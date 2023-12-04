import { createStore } from 'vuex';
import cart from './modules/cart';
import ticket from './modules/ticket';

export default createStore({
    modules: {
        cart,
        ticket,
    }
})