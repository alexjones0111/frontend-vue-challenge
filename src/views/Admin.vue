<template>
    <div class="p-7">
        <!-- Page Title -->
        <h1 class="mx-auto text-center text-2xl font-semibold tracking-wide mb-5 md:text-3xl md:mb-7">Admin Page</h1>

        <!-- Interface for adding New Event Tickets -->
        <TicketForm @addTicket="addTicket" />

        <!-- List of all created Tickets -->
        <TicketList :role="role" :items="tickets" @deleteTicket="deleteTicket" />
    </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';

import TicketForm from '../components/TicketForm.vue';
import TicketList from '../components/TicketList.vue';

export default {
    name: 'AdminPage',
    data() {
        return {
            role: "admin",       // Current Page Role - 'admin', 'home', 'cart'
        }
    },
    components: {
        TicketForm,
        TicketList,
    },
    computed: {
        ...mapGetters({
            tickets: 'ticket/items',                // Available Tickets
            ticketItemsCount: 'ticket/itemsCount',  // Number of Available Tickets
        }),
    },
    methods: {
        addTicket(ticket: Object) {                 // Add a new Ticket
            this.$store.dispatch('ticket/add', { ...ticket, id: this.ticketItemsCount + 1 });
        },
        deleteTicket(ticketId: Number) {            // Delete a Ticket
            this.$store.dispatch('ticket/delete', ticketId);
        }
    },
}
</script>