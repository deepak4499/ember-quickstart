import Route from '@ember/routing/route';
import {later} from '@ember/runloop';

export default Route.extend({
    model(){
        let {photo}=this.modelFor("photos");
        let promise = new Promise(function(reject) {
            later(this, function() {
              reject("test");
            }, 3000);
        });
        return {photo},promise;//this.store.findAll('privileged-model');
    },
    actions: {
        error(error) {
          window.alert(error);
          return true;
        }
    }
});
