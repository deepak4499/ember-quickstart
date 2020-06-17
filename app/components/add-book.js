import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
    store:service(),
    bookName:null,
    author:null,
    yearOfPublication:null,
    rate:null,
    actions:{
        addbook(){
            this.toggleProperty("expand");
            this.store.createRecord("books",{
                bookName:this.bookName,
                author:this.author,
                yearOfPublication:this.yearOfPublication,
                rate:this.rate
            }).save();
        }
    }
});
