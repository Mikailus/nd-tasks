import { SplitPhoneNumberPipe } from './split-phone-number.pipe';

describe('SplitPhoneNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new SplitPhoneNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
