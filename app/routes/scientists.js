import Route from '@ember/routing/route';
import EmberObject,{computed,observer} from '@ember/object';
import { once } from '@ember/runloop';
import {alias} from '@ember/object/computed';
export default Route.extend({
model(){
  return {
    people:["praveen","jayanthi","deepak"],
    check:check,
    date:new Date()
  }
}
});

const Hamster = EmberObject.extend({
  excitingChores: computed('chores.[]', function() {
    return this.chores.map(function(chore, index) {
      return `CHORE ${index + 1}: ${chore.toUpperCase()}!`;
    });
  })
});

const hamster = Hamster.create({
  chores: ['clean', 'write more unit tests']
});
console.log(hamster.excitingChores);
hamster.chores.pushObject('review code');
console.log(hamster.excitingChores);

const Person=EmberObject.extend({
  firstName:null,
  lastName:null,
  fullName:computed("firstName","lastName",function(){
    return `${this.firstName} ${this.lastName}`;
  }),
});

Person.reopen({
  partOfNameChanged:observer('firstName','lastName',function(){
  once(this, 'processFullName');
  }),
  processFullName(){
  console.log(`${this.fullName}`)
  }
});

let person=Person.create({
  firstName:"Deepak",
  lastName:"Kumar"
});
console.log(person.fullName);
person.set('lastName',"Roshan");
console.log(person.fullName);
person.set('firstName','Praveen');
console.log(person.fullName);

let husband=EmberObject.create({
  pets:0
});

let Wife=EmberObject.extend({
  pets:alias('husband.pets')
});

let wife=Wife.create({
  husband:husband
})

console.log(wife.pets);
wife.set('pets',1);
console.log(husband.pets);

let check="&lt;script type=javascript&gt;alert(hii)&lt;/script&gt;";