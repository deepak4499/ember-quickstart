import Controller from '@ember/controller';

export default Controller.extend({
    username:null,
    password:null,
    confirm:null,
    email:null,
    actions:{
        sign(){
            this.store.createRecord("signin",{
                userName:this.username,
                password:this.password,
                email:this.email,
            }).save();
            this.transitionToRoute("home");
        }
    },
});
