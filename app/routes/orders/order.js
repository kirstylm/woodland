import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return [
      { id: '1', name: 'Kirsty'},
      { id: '2', name: 'Peter'}
    ].findBy('id', params.order_id);
  }
});
