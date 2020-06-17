import Route from '@ember/routing/route';

export default Route.extend({
    actions:{
        log(){
            this.transitionTo("login");
        },
        sign(){this.transitionTo("signup")},
        books(){this.transitionTo("bookslist")}
    }
});
