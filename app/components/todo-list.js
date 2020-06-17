import Component from '@ember/component';
import { A } from '@ember/array';
import { filterBy } from '@ember/object/computed';
import EmberObject, { computed } from '@ember/object';

export default Component.extend({
    actions:{
      updateFirstName(name){
        this.firstName = name
      },
      printalert(value){
        window.alert(value);
        window.alert(this.person.name);
        window.alert(this.field)
      }
    },
    todos: null,
  
    init() {
      this._super(...arguments);
      this.set('todos', A([
        EmberObject.create({ title: 'Buy food', isDone: true }),
        EmberObject.create({ title: 'Eat food',isDone: false }),
        EmberObject.create({ title: 'Catalog Tomster collection',isDone: true }),
      ]));
    },
    firstName:"Aravind",
    incomplete: filterBy('todos', 'isDone', false),
    selectedTodo: null,
    indexOfSelectedTodo: computed('incomplete', 'todos.[]', function() {
        return this.todos.indexOf(this.incomplete);
    }),
    person:{
      name:"deepak"
    },
    field:'name'
});