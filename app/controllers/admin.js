import Controller from '@ember/controller';

export default Controller.extend({
    isExpanded:false,
    actions:{
        toggle(){
            this.toggleProperty("isExpanded");
        },
        books(){this.transitionToRoute("bookslist")}
    },
});
