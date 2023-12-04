<template>
    <!-- List of Tickets -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <TicketCard v-for="ticket in tickets" :key="ticket.id" :ticket="ticket" :role="role" @addToCart="addToCart"
            @removeFromCart="removeFromCart" @deleteTicket="deleteTicket" />
    </div>

    <!-- Pagination -->
    <div v-if="items.length"
        class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 mt-5 sm:px-6">
        <div class="flex flex-1 justify-between sm:hidden">
            <a @click="prevPage"
                class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer" :class="{ 'pointer-events-none': currentPage == 1 }">Previous</a>
            <a @click="nextPage"
                class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer" :class="{ 'pointer-events-none': currentPage == totalPage }">Next</a>
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
                <p class="text-sm text-gray-700">
                    Showing
                    <span class="font-medium">{{ startIndex }}</span>
                    to
                    <span class="font-medium">{{ endIndex }}</span>
                    of
                    <span class="font-medium">{{ items.length }}</span>
                    results
                </p>
            </div>
            <div>
                <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <a @click="prevPage"
                        class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer" :class="{ 'pointer-events-none': currentPage == 1 }">
                        <span class="sr-only">Previous</span>
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                clip-rule="evenodd" />
                        </svg>
                    </a>
                    <div v-for="index in totalPage" :key="index">
                        <a @click="setPage(index)" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 cursor-pointer" :class="{ 'z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : index == currentPage }">
                            {{ index }}
                        </a>
                    </div>
                    <a @click="nextPage"
                        class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer" :class="{ 'pointer-events-none': currentPage == totalPage }">
                        <span class="sr-only">Next</span>
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clip-rule="evenodd" />
                        </svg>
                    </a>
                </nav>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import TicketCard from './TicketCard.vue';

export default {
    name: 'TicketList',
    data() {
        return {
            currentPage: 1,     // Current Page Index
        }
    },
    props: {
        role: String,           // Current Page Role
        items: Object,          // List of Tickets
    },
    components: {
        TicketCard,
    },
    computed: {
        tickets() {             // Get List of Tickets for Current page
            return this.items.slice(this.startIndex - 1, this.endIndex);
        },
        startIndex() {          // Get Start Index of Current Page
            return (this.currentPage - 1) * 8 + 1;
        },
        endIndex() {            // Get End Index of Current Page
            return Math.min(this.items.length, this.currentPage * 8);
        },
        totalPage() {           // Get Total Number of Pages
            return Math.ceil(this.items.length / 8);
        }
    },
    methods: {
        deleteTicket(ticketId: Number) {    // Delete a Ticket
            this.$emit('deleteTicket', ticketId);
        },
        addToCart(ticket: Object) {         // Add a Ticket to Shopping Cart
            this.$emit('addToCart', ticket);
        },
        removeFromCart(ticketId: Number) {  // Remove a Ticket from Shopping Cart
            this.$emit('removeFromCart', ticketId);
        },
        
        prevPage() {    // Go to Previous Page
            this.currentPage = Math.max(this.currentPage - 1, 1);
        },
        nextPage() {    // Go to Next Page
            this.currentPage = Math.min(this.currentPage + 1, this.totalPage);
        },
        setPage(page: Number) { // Go to Specific Page
            this.currentPage = page;
        }
    }
}
</script>