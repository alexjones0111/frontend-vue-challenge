<template>
    <div class="p-5">
        <!-- Page Title -->
        <h1 class="mx-auto text-center text-2xl font-semibold tracking-wide mb-5 md:text-3xl md:mb-7">Shopping Cart</h1>

        <!-- List of all Tickets in Cart -->
        <TicketList :role="role" :items="cartItems" @removeFromCart="removeFromCart"/>
    </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';

import TicketList from '../components/TicketList.vue';

export default {
    name: 'CartPage',
    data() {
        return {
            role: 'cart',       // Current Page Role - 'admin', 'home', 'cart'
        }
    },
    components: {
        TicketList,
    },
    computed: {
        ...mapGetters({
            cartItems: 'cart/items',    // Current Tickets in Cart
        })
    },
    methods: {
        removeFromCart(ticketId: Number) {
            this.$store.dispatch('cart/remove', ticketId);  // Remove a Ticket from Cart
        }
    }
}
</script>