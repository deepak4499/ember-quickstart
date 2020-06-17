import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return{
            books:this.store.findAll("books")
        }
    }
});
