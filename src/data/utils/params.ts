type OrderBy = 'id' | 'name' | 'price';
type SortBy = 'DESC' | 'ASC';

export interface IParams {
  page: number;
  rows: number;
  sortBy: SortBy;
  orderBy: OrderBy;
}
