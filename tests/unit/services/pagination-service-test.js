import { module, test } from 'qunit';
import { setupTest } from 'ember-test/tests/helpers';

module('Unit | Service | pagination-service', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:pagination-service');
    assert.ok(service);
  });
});
