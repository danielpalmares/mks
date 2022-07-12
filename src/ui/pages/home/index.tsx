import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../../store';
import { setProductsSaga } from '../../../store/products/actions';
import { Header } from '../../components/Header';

export function Home() {
  const products = useSelector((state: ApplicationState) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setProductsSaga({ orderBy: 'DESC', sortBy: 'id', page: 1, rows: 10 })
    );
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return <Header />;
}
