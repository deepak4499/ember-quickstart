import Component from '@ember/component';
import {A} from '@ember/array';

export default Component.extend({
    init() {
        this._super(...arguments);
        this.set('errors', A([]));
        console.log("init called");
    },
    
    didUpdateAttrs() {
        console.log("did update attributes");
    },
    
    actions: {
        required(event) {
          if (!event.target.value) {
            this.errors.pushObject({ message: `${event.target.name} is required`});
          }
          else if(event.target.value){
              var remove=this.errors.findBy("message", `${event.target.name} is required`);
              this.errors.removeObject(remove);
          }
        },
        removefruit(){
            this.get("fruits").popObject();
        },
        changeclass(classvalue){
            this.set("class1",classvalue);
        }
    },

    didReceiveAttrs(){
        const profile=this.data;
        console.log("didreceive attributes called");
        if(typeof profile==="string"){
            this.set("profile",JSON.parse(profile));
            console.log(profile);
        }
        else{
            this.set("profile",profile);
            console.log(profile);
        }
    },

    didInsertElement(){
        console.log("did Inser Element called");
        this.element.setAttribute("contenteditable",true);
    },

    didDestroyElement(){
        console.log("destroy called");
    },
    
    data:`{"name":"string"}`,
    name:"deepak",
    department:"it",
    email:"sdk@21.com",
    class1:"middle"
});
