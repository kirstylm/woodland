import Ember from 'ember';
import LineItem from 'woodland/models/line-item';
import Order from 'woodland/models/order';
import Product from 'woodland/models/product';

const products = [
   Product.create({title: 'Cat', price: 10, description: 'Black'}),
   Product.create({title: 'Dog', price: 10, description: 'Spotty'})
];

const orders = [
  Order.create({id: '1234', name: 'Cat collector',
    items: [
      LineItem.create({product: products[0], quantity: 1}),
      LineItem.create({product: products[1], quantity: 3})
    ]
  }),
];

export default Ember.Service.extend({
  getOrderById(id) { return orders.findBy('id', id); },
  getOrders() { return orders; },
  getProducts(){ return products; }
});


// export default Ember.Service.extend({
//   getOrderById(id) {
//     const orders = this.getOrders();
//     return orders.findBy('id', id)
//   },

//   getOrders() {
//     return [
//       { id: '1', name: 'Kirsty'},
//       { id: '2', name: 'Peter'}
//     ];
//   }
// });

