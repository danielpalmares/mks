import { IParams } from '../utils/params';
import { ProductRepository } from './product.repository';

describe('Product repository', () => {
  it('should return a list of at least one product', async () => {
    const { getProducts } = new ProductRepository();
    const params: IParams = {
      orderBy: 'DESC',
      sortBy: 'id',
      page: 1,
      rows: 10,
    };
    const products = await getProducts(params);
    expect(products.data.length).toBeGreaterThan(0);
  });
});
