// Store for Tickets

import { Ticket } from '../../types/Ticket'
import mockData from '../../api/mock/data/tickets.json'

interface State {
    tickets: Ticket[];
}

export default {
    namespaced: true,
    state: {
        tickets: [],    // Available Tickets
    } as State,

    mutations: {
        set(state: State, items: Object) {  // Set Ticket Data
            items.map(item => {
                state.tickets.push(item);
            })
        },
        add(state: State, ticket: Ticket) { // Add a new Ticket
            state.tickets.push(ticket);
        },
        delete(state: State, ticketId: Number) {    // Delete a Ticket
            state.tickets = state.tickets.filter((ticket) => ticket.id !=  ticketId);
        },
    },

    actions: {
        add({ commit }, ticket: Ticket) {
            commit('add', ticket);
        },
        delete({ commit }, ticketId: Number) {
            commit('delete', ticketId);
        },
        fetchTickets({ commit }) {  // Get Tickets Data from Mock Data
            setTimeout(() => {
                commit('set', mockData);
            }, 300); // Simulate delay
        }
    },

    getters: {
        items: state => state.tickets,              // Getter for Tickets
        itemsCount: state => state.tickets.length,  // Getter for Ticket Count
    }
}