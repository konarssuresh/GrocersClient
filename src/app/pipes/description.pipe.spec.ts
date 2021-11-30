import { DescriptionPipe } from './description.pipe';

describe('DescriptionPipe', () => {
  it('create an instance', () => {
    const pipe = new DescriptionPipe();
    expect(pipe).toBeTruthy();
  });

  it('should reduce the description and show 3 dots in the end ', () => {
    const pipe = new DescriptionPipe();
    const desc = pipe.transform(
      '7BtluJnBxh9bn6HFKSEbhHqK7cm9iPPYgthYN4dYIkzPpknLgpQhKxjpQedtTb7WCBPqCNM70sirHjQ1t6D7fwOPHsXCryzLJFW4mPET7F0aYauxNUQ0gIbAVazzZZdoCoMBTuCTGqmkV7uZ3vo7Hx8Fdl3wiW0uQ9P4gJQCnPFqnaC3co5ufGl1CSaYoEQt2Ep3QutBabcshshshshshshshshshshshshshshshshshshshshshshshshsshh'
    );
    expect(desc).toBe(
      '7BtluJnBxh9bn6HFKSEbhHqK7cm9iPPYgthYN4dYIkzPpknLgpQhKxjpQedtTb7WCBPqCNM70sirHjQ1t6D7fwOPHsXCryzLJFW4...'
    );
  });
});
