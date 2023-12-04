export interface Ticket {
    id: Number;             // Ticket ID
    name: String;           // Ticket Name
    description: String;    // Ticket Description
    isVIP: Boolean;         // IsVIP Option
    count: Number;          // Available Ticket Count
    price: Number;          // Ticket Price
    countInCart: Number;    // Count of Tickets in Cart
}