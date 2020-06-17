import Service from '@ember/service';

export default Service.extend({
    username:null,
    newuser(name){
        this.set("username",name);
        window.alert(this.username);
    }
});
