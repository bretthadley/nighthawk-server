'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe(' service', function() {
  it('registered the  service', () => {
    assert.ok(app.service(''));
  });
});
