import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    router:service(),
    actions:{
        userDidDeleteAccount(){
            this.get("router").transitionTo("scientists");
            this.router.deleteUser()
        }
    }
});
