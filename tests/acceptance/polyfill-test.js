import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import { checkRenderCase } from '../../tests/helpers/utils';

moduleForAcceptance('Acceptance | polyfill');

test('Polyfill correctly renders components invoked with named yields and block slots', function(assert) {
  assert.expect(2);

  visit('/');

  andThen(function() {
    assert.ok(checkRenderCase('slots-yield-with-default-slot'), 'Polyfilled component invoked with named block slots and a default slot is rendered');
    assert.ok(checkRenderCase('slots-yield-without-default-slot'), 'Polyfilled component invoked without a default block slot is rendered');
  });
});

test('Polyfill correctly renders component with named yields without named block slot in invocation', function(assert) {
  assert.expect(1);

  visit('/');

  andThen(function() {
    assert.ok(checkRenderCase('slots-yield-with-only-default-slot'), 'Polyfilled component invoked without any named block slots is rendered');
  });
});

test('Polyfill correctly renders component with no named yields', function(assert) {
  assert.expect(1);

  visit('/');

  andThen(function() {
    assert.ok(checkRenderCase('non-polyfilled-component'), 'Non-polyfilled component is rendered');
  });
});

test('Polyfill correctly renders component provided by a consumed addon with no named yields', function(assert) {
  assert.expect(1);

  visit('/');

  andThen(function() {
    assert.ok(checkRenderCase('consumed-addon-non-polyfilled-component'), 'Non-polyfilled component provided by a consumed addon is rendered');
  });
});
