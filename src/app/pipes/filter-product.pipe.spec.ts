import { FilterProductPipe } from './filter-product.pipe';

describe('FilterProductPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterProductPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter the products correctly based on filter text', () => {
    const pipe = new FilterProductPipe();
    const filteredData = pipe.transform(
      [{ name: 'BaNaNa' }, { name: 'spiNach' }],
      'ba'
    );
    expect(filteredData).toEqual([{ name: 'BaNaNa' }]);
  });
});
