// Store for Shopping Cart

import { Ticket } from '../../types/Ticket'

interface State {
    cartItems: Ticket[];
}

export default {
    namespaced: true,
    state: {
        cartItems: [],  // items in Cart
    } as State,

    mutations: {
        add(state: State, ticket: Ticket) {     // Add a Ticket to Cart
            var foundFlag = false;
            state.cartItems.forEach(item => {
                if(item.id == ticket.id) {      // Ticket already exists in Cart
                    item.countInCart = Math.min(item.countInCart.valueOf() + ticket.countInCart.valueOf(), item.count.valueOf());   // Count can't exceed the available Count of Ticket
                    foundFlag = true;
                    return;
                }
            });
            if(!foundFlag)      // Ticket doesn't exist in Cart
                state.cartItems.push(ticket);
        },
        remove(state: State, ticketId: Number) {    // Remove a Ticket from Cart
            state.cartItems = state.cartItems.filter((ticket) => ticket.id !=  ticketId);
        },
    },

    actions: {
        add({ commit }, ticket: Ticket) {
            commit('add', ticket);
        },
        remove({ commit }, ticketId: Number) {
            commit('remove', ticketId);
        },
    },

    getters: {
        items: state => state.cartItems,                // Getter for items in Cart
        itemsCount: state => state.cartItems.length,    // Getter for item Count in Cart
    }
}