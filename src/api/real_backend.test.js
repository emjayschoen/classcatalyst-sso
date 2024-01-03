import * as API from '.';
import * as RealBackend from './real_backend';

describe('MockBackend', () => {
  Object.keys(API).forEach((key) => {
    it(`implements '${key}' (exposed by index)`, () => {
      expect(RealBackend[key]).toBeDefined();
    });
  });
});
