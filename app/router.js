import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('scientists');
  this.route('fooditem', function() {});
  this.route('builtin-help');
  this.route('helperexample');

  this.route('photos', function() {
    this.route('edit', {path:"/:photo_id"}, function() {
      this.route('comments',{path:"/comments/:comment_id"});
    });
  });
  this.route('song-album');
  this.route('login');
  this.route('home');
  this.route('user');
  this.route('admin');
  this.route('signup');
  this.route('bookslist');
});
