import * as API from './index';
import * as MockBackend from './mock_backend';

describe('MockBackend', () => {
  Object.keys(API).forEach((key) => {
    it(`implements '${key}' (exposed by index)`, () => {
      expect(MockBackend[key]).toBeDefined();
    });
  });
});
