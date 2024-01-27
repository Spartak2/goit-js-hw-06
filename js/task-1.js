"use strict";

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],

  initialize(balance, discount, orders) {
    this.balance = balance;
    this.discount = discount;
    this.orders = orders;
  },

  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    const discountedCost = cost - cost * this.discount;
    if (discountedCost > 0) {
      this.balance -= discountedCost;
      this.orders.push(order);
    } else {
      console.log("Order not added. Insufficient discounted cost.");
    }
  },
};

customer.initialize(24000, 0.1, ["Burger", "Pizza", "Salad"]);

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
