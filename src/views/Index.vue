<template>
    <div class="p-5">
        <!-- Page Title -->
        <h1 class="mx-auto text-center text-2xl font-semibold tracking-wide mb-5 md:text-3xl md:mb-7">Home Page</h1>

        <!-- List of all created Tickets -->
        <TicketList :role="role" :items="tickets" @addToCart="addToCart"/>
    </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';

import TicketList from '../components/TicketList.vue';

export default {
    name: 'IndexPage',
    data() {
        return {
            role: 'home',       // Current Page Role - 'admin', 'home', 'cart'
        }
    },
    components: {
        TicketList,
    },
    computed: {
        ...mapGetters({
            tickets: 'ticket/items',    // Available Tickets
        })
    },
    methods: {
        addToCart(ticket: Object) {
            this.$store.dispatch('cart/add', ticket);   // Add a Ticket to Shopping Cart
        }
    }
}
</script>