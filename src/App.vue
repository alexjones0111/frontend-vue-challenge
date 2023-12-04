<template>
  <!-- Navbar -->
  <nav class="fixed top-0 w-full z-10 py-3 md:py-5 bg-blue-400">
    <div class="flex justify-end items-center">
      <RouterLink to="/" class="font-semibold text-sm mr-5 md:text-lg md:mr-10">Home</RouterLink>
      <RouterLink to="/admin" class="font-semibold text-sm mr-5 md:text-lg md:mr-10">Admin</RouterLink>
      <RouterLink to="/cart" class="relative font-semibold text-sm mr-5 md:text-lg md:mr-10">
        Cart
        <!-- Count Badge -->
        <div v-if="cartItemsCount"
          class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-3 dark:border-gray-900">
          {{ cartItemsCount }}</div>
      </RouterLink>
    </div>
  </nav>

  <!-- Main View -->
  <RouterView class="mt-10 z-0 md:mt-20"/>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      cartItemsCount: 'cart/itemsCount',          // Types of Different Tickets in Cart
    }),
  },
  created() {
    this.$store.dispatch('ticket/fetchTickets');  // Fetch Mock Data when created
  },
}
</script>