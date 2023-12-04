<template>
    <div class="relative bg-white p-6 mb-6 rounded-md shadow-md" :class="{ 'vip': ticket.isVIP }">
        <h3 class="text-xl font-semibold mb-2 md:text-2xl">{{ ticket.name }}</h3>
        <p class="text-md text-gray-700 md:text-lg">{{ ticket.description }}</p>
        <p class="text-gray-800 font-bold mt-2 text-sm md:text-base">Price: ${{ ticket.price }}</p>
        <p class="text-gray-800 font-semibold text-sm md:text-base">Count: {{ role == 'cart' ? ticket.countInCart : ticket.count }}</p>

        <!-- Showing Different Buttons depending on the Role -->
        <button v-if="role == 'admin'" @click="deleteTicket"
            class="float-right bg-red-500 text-white py-2 px-3 rounded-md mt-4 text-sm focus:outline-none md:text-base md:px-4">
            <i class="fas fa-trash mr-1" aria-hidden="true"></i> Delete
        </button>

        <button v-else-if="role == 'home'" @click="toggleDialog"
            class="float-right bg-blue-500 text-white py-2 px-3 rounded-md mt-4 text-sm focus:outline-none md:text-base md:px-4">
            <i class="fas fa-cart-plus mr-1" aria-hidden="true"></i> Add to Cart
        </button>

        <button v-else @click="removeFromCart"
            class="float-right bg-red-500 text-white py-2 px-3 rounded-md mt-4 text-sm focus:outline-none md:text-base md:px-4">
            <i class="fas fa-trash mr-1" aria-hidden="true"></i> Remove
        </button>

        <!-- Showing VIP Badge -->
        <span v-if="ticket.isVIP"
            class="absolute -top-3 -right-5 tracking-wider text-white bg-green-500 px-2 text-sm rounded leading-loose mx-2 font-semibold md:px-3">
            <i class="fas fa-heart" aria-hidden="true"></i> VIP
        </span>

        <!-- Quantity Selection Dialog -->
        <transition name="fade">
            <div v-if="dialogVisible" class="fixed inset-0 flex items-center justify-center z-50">
                <div class="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-md">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Select Quantity:</label>
                    <div class="flex items-center mt-2">
                        <input v-model="selectedQuantity" type="number" id="count" name="count" :min="1" :max="ticket.count"
                            class="mt-1 p-2 border rounded-md w-full" required />
                    </div>

                    <div class="flex">
                        <button @click="addToCart"
                            class="mt-4 mr-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300">
                            Add
                        </button>
                        <button @click="toggleDialog"
                            class="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300 transition duration-300">
                            Cancel
                        </button>

                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import ticket from '../store/modules/ticket';

export default {
    name: 'TicketCard',
    props: {
        ticket: Object,     // Current Ticket
        role: String,       // Current Page Role
    },
    data() {
        return {
            dialogVisible: false,   // Status of Visibility
            selectedQuantity: 1,    // Quantity for Shopping Cart
        }
    },
    methods: {
        deleteTicket() {    // Delete a Ticket
            this.$emit('deleteTicket', this.ticket.id);
        },
        addToCart() {       // Add a Ticket to Shopping Cart
            this.$emit('addToCart', { ...this.ticket, countInCart: this.selectedQuantity });
            this.toggleDialog();
        },
        removeFromCart() {  // Remove a Ticket from Shopping Cart
            this.$emit('removeFromCart', this.ticket.id);
        },

        toggleDialog() {    // Toggle visibility of Quantity Dialog
            this.dialogVisible = !this.dialogVisible;
            this.selectedQuantity = 1;
        },
    },
};
</script>

<style scoped>
.bg-white {
    border: 3px solid #e2e8f0;
}

.vip {
    border-color: #fbd38d;
}
</style>