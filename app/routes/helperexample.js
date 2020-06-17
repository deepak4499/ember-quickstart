import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

const Person=EmberObject.extend({
    firstName:null,
    lastName:null
});
let person=Person.create({
    firstName:"Deepak",
    lastName:"kumar"
});

const Post=EmberObject.extend({
    title:null,
    author:null,
    componentName:null
});
let post=Post.create({
    title:"post title",
    author:"post author",
    componentName:["blockhelper"]
});

export default Route.extend({
    model(){
        return { 
            person: person ,
            name:"sang",
            post:[post],
            items:["dog","cat","cow","goat","hen"],
            selected:"cow",
            arrayOfFruits:["apple"],
        }
    },
});