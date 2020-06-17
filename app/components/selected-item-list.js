import Component from '@ember/component';

export default Component.extend({
    init(){
        this._super(...arguments);
        this.people=[
            {name:"username 1",id:"id1"},
            {name:"username 2",id:"id2"},
            {name:"username 3",id:"id3"},
            {name:"username 4",id:"id4"}
        ];
    },
    newvalue1:"deepak",
    actions:{
        update(person){
            this._super(...arguments);
            this.set("people.name",person.id);
            console.log(this.people.name);
            console.log(person.name);
        }
    },
});
