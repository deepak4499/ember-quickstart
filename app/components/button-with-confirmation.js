import Component from '@ember/component';

export default Component.extend({
    actions:{
        launchConfirmDialog(){
            this.set("confirmShown",true)
        },
        submitConfirm(){
            let promise=this.onConfirm();
            promise.then(()=>{
                this.set("confirmShown",false)
            })
        },
        cancelConfirm(){
            this.set("confirmShown",false)
        }
    }
});
