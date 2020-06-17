import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
    store:service(),
    userdetail:service(),
    userName:null,
    password:null,
    actions:{
        login(){
            this.userdetail.newuser(this.userName);
            this.store.query("signin",{
            filter:{
                userName:this.userName,
                password:this.password
            }
            }).then( (users)=>{ 
                users.forEach(user => {
                    if(user.get("userName")==this.userName && user.get("password")==this.password)
                    {
                        if(this.userName=="deepak")
                        {
                            this.transitionToRoute("admin");
                        }
                        else
                        {
                            this.transitionToRoute("user");
                        }
                    }
                    else{
                        window.alert("username or password is incorrect.please try again")
                    }
                })
            });
        }
    },
});
