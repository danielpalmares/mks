import { useEffect } from 'react';
import { IoBagHandleOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { IParams } from '../../../data/utils/params';
import { ApplicationState } from '../../../store';
import { setProductsSaga } from '../../../store/products/actions';
import { Header } from '../../components/Header';
import { Template } from '../../components/Template';
import { toLocalePrice } from '../../utils/functions';
import {
  BuyButton,
  Description,
  ImageContainer,
  InformationContainer,
  Main,
  NameAndPriceContainer,
  ProductCard,
  ProductName,
  ProductPrice,
} from './styles';

export function Home() {
  const products = useSelector((state: ApplicationState) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const params: IParams = {
      orderBy: 'DESC',
      sortBy: 'id',
      page: 1,
      rows: 10,
    };

    dispatch(setProductsSaga(params));
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <Template>
      <Main>
        {products.data.map(product => {
          return (
            <ProductCard>
              <ImageContainer>
                <img src={product.photo} alt={product.name} />
              </ImageContainer>

              <InformationContainer>
                <NameAndPriceContainer>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>{toLocalePrice(product.price)}</ProductPrice>
                </NameAndPriceContainer>

                <Description>{product.description}</Description>
              </InformationContainer>

              <BuyButton>
                <IoBagHandleOutline size={16} /> Comprar
              </BuyButton>
            </ProductCard>
          );
        })}
      </Main>
    </Template>
  );
}
