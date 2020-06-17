import Component from '@ember/component';

export default Component.extend({
    actions:{
        buythebook(){
            this.toggleProperty("buy");
            
        }
    }
});
