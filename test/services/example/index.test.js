'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('example service', function() {
  it('registered the examples service', () => {
    assert.ok(app.service('examples'));
  });
});
