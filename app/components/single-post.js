import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    router:service(),
    actions:{
        toggleBody(){
            this.toggleProperty("isShowingBody");
        },
        select(post){
            window.alert(post.title);
        },
        logClick(){
            window.alert("hii");
        },
        bandDidChange(newValue){
            console.log(newValue);
        },
        next() {
            this.get('router').transitionTo('scientists');
        }
    },
    willDestroyElement(){
        console.log("destroy called");
    },
    didDestroyElement(){
        console.log("destroy called");
    },
    body:"deepak is a good man",
    post:{title:"Justice League"},
    tagName:'p',
    attributeBindings:["title"],
    title:"deepak's magic",
    classNameBindings: ['urgent'],
    urgent: "urgentreq"
});
