import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';
import Ember from 'ember';

export default helper(function makeBold(param) {
  let value = Ember.Handlebars.Utils.escapeExpression(param);
  return htmlSafe(`<b>${value}</b>`);
});
