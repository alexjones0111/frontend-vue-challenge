import tickets from './data/tickets.json'

const fetch = (mockData: Object, time = 0) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData)
        }, time)
    })
}

export default {
    fetchTickets() {
        return fetch(tickets, 100);
    }
}