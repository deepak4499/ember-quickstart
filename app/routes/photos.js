import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return {
            photo:['deepak','aravind','ajith','hari'],
            comment_id:1,
            comment:"this is the comment",
            link_id:210,
        }
    }
});
