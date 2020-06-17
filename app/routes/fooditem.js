import Route from '@ember/routing/route';
import {A} from '@ember/array';
import EmberObject from '@ember/object';

export default Route.extend({
    model(){
        return {
            head:"blockparams",
            body:"usage has been proved"
        }
    }
});

let food=["idly","Dosa","upma"];

food.forEach((item,index)=>{
    console.log(`menu item ${index+1}=${item}`);
})

const animals=A(["dog","cat","cow"]);
let last=animals.get('lastObject');
console.log(last);
animals.pushObject('goat');
last=animals.get('lastObject');
console.log(last);

let words=A(["hii","hello"]);
let exclamatoryWord=words.map(item=>`${item}!`);
console.log(exclamatoryWord);

let arr=A([1,2,3,4,5]);
arr=arr.filter((item)=>item<4);
console.log(arr);

const Todo=EmberObject.extend({
    title:null,
    isDone:false
});
let todos=A([
    Todo.create({title:"the lion king",isDone:true}),
    Todo.create({title:"the jaguar"})
]);
let arrPrint=todos.filterBy('isDone',true);
console.log(arrPrint);

const Person=EmberObject.extend({
    name:null,
    isHappy:false
});
let person=A([
    Person.create({name:"Deepak",isHappy:true}),
    Person.create({name:"Praveen",isHappy:false})
]);
let check=person.every((item)=>item.get('isHappy'));
console.log(check);
let check1=person.any((item)=>item.get('isHappy'));
console.log(check1);
let check2=person.isEvery('isHappy');
console.log(check2);
let check3=person.isAny('isHappy');
console.log(check3);

const s=EmberObject.extend({
    firstName:null,
    lastName:null
});

person=s.create({
    firstName:"Deepak",
    lastName:"kumar"
});