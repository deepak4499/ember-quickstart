import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
    userdetail:service(),
    buy:false,
    username:this.userdetail.username,
    actions:{
        buy(){
            this.toggleProperty("buy");
        },
        books(){this.transitionToRoute("bookslist")}
    },
});
