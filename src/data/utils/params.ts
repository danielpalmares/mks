type OrderBy = 'DESC' | 'ASC';
type SortBy = 'id' | 'name' | 'price';

export interface IParams {
  page: number;
  rows: number;
  sortBy: SortBy;
  orderBy: OrderBy;
}
