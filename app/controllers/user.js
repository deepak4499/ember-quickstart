import Controller from '@ember/controller';

export default Controller.extend({
    buy:false,
    actions:{
        buy(){
            this.toggleProperty("buy");
        }
    },
});
