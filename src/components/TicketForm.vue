<template>
    <div class="max-w-md mx-auto mb-10 p-6 bg-white rounded-md shadow-md">
        <h2 class="text-xl font-semibold mb-4 md:text-2xl">Add New Event Ticket</h2>
        <form @submit.prevent="submitForm">
            <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-600">Ticket Name</label>
                <input v-model="ticket.name" type="text" id="name" name="name" class="mt-1 p-2 border rounded-md w-full" placeholder="Ticket 01"
                    required>
            </div>
            <div class="mb-4">
                <label for="description" class="block text-sm font-medium text-gray-600">Description</label>
                <textarea v-model="ticket.description" id="description" name="description" rows="3"
                    class="mt-1 p-2 border rounded-md w-full" required></textarea>
            </div>

            <div class="mb-4">
                <label for="isVIP" class="flex items-center">
                    <input v-model="ticket.isVIP" type="checkbox" id="isVIP" name="isVIP" class="form-checkbox" />
                    <span class="ml-2 text-sm font-medium text-gray-600">Is VIP</span>
                </label>
            </div>

            <div class="mb-4">
                <label for="count" class="block text-sm font-medium text-gray-600">Count</label>
                <input v-model="ticket.count" type="number" id="count" name="count"
                    class="mt-1 p-2 border rounded-md w-full" required />
            </div>

            <div class="mb-4">
                <label for="price" class="block text-sm font-medium text-gray-600">Price</label>
                <input v-model="ticket.price" type="number" id="price" name="price"
                    class="mt-1 p-2 border rounded-md w-full" required />
            </div>

            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md text-sm md:text-base">Add Ticket</button>
        </form>
    </div>
</template>

<script lang="ts">
import { Ticket } from '../services/Ticket';

export default {
    name: 'TicketForm',
    data() {
        return {
            ticket: {
                id: 0,
                name: '',
                description: '',
                isVIP: false,
                count: 0,
                price: 0,
                countInCart: 0,
            } as Ticket,
        };
    },
    methods: {
        submitForm() {  // Add a new Ticket
            this.$emit('addTicket', this.ticket);
            Object.assign(this.ticket, {    // Reset current Data
                id: 0,
                name: '',
                description: '',
                isVIP: false,
                count: 0,
                price: 0,
                countInCart: 0,
            });
        },
    },
}
</script>