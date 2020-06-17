import Route from '@ember/routing/route';                 

export default Route.extend({
    model(){
        this.store.push({
            data: [{
              id: 1,
              type: 'album',
              attributes: {
                title: 'Fewer Moving Parts',
                artist: 'David Bazan',
                songCount:5
              },
              relationships: {}
            }, {
              id: 2,
              type: 'album',
              attributes: {
                title: 'Calgary b/w I Can\'t Make You Love Me/Nick Of Time',
                artist: 'Bon Iver',
                songCount:9
              },
              relationships: {}
            }]
        });
        this.store.createRecord("blog_post",{
          title:"deepak in database",
          body:"deepak, testing is succesful in storage"
        }).save();
        return{
            name:"deepak",
            bind:this.store.findAll("album")
        }
    }
});
