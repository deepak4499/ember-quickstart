import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | fooditem/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:fooditem/index');
    assert.ok(route);
  });
});
