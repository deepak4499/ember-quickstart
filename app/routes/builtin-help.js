import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import {A} from '@ember/array';

export default Route.extend({
    model(){
        return{ isFast: false,isFueled:true,person:person,nameArray:nameArray,vehicle:vehicle,
            logoUrl:"https://homepages.cae.wisc.edu/~ece533/images/boat.png",msg:"hii this is the message"
        };
    }
});
const nameArray=A(['deepak','praveen','jayanthi']);
const Person=EmberObject.extend({
    firstName:null,
    lastName:null
});
let person=Person.create({
    firstName:"Deepak",
    lastName:"kumar"
});

const Vehicles=EmberObject.extend({
    cars:null,
    bikes:null
});
let vehicle=Vehicles.create({
    cars:['ford','hyundai','bens'],
    bikes:['re','discover']
});