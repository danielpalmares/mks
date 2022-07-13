import { useEffect, useState } from 'react';
import { IoBagHandleOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { IParams } from '../../../data/utils/params';
import { Product } from '../../../domain/models/product.model';
import { ApplicationState } from '../../../store';
import { setProductsSaga } from '../../../store/products/actions';
import { CartNavigation } from '../../components/CartNavigation';
import { Skeleton } from '../../components/Skeleton';
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
  const skeletonCount = 8;
  const products = useSelector((state: ApplicationState) => state.products);
  const dispatch = useDispatch();

  const [cart, setCart] = useState<Product[]>([]);
  const [checkCart, setCheckCart] = useState<boolean>(true);

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
    if (!checkCart) return;

    const cachedProductsJson = localStorage.getItem('@cart');
    if (!cachedProductsJson) {
      setCart([]);
      return setCheckCart(false);
    }

    const cachedProducts: Product[] = JSON.parse(cachedProductsJson);
    setCart(cachedProducts);
    setCheckCart(false);
  }, [checkCart]);

  const sendToCartHandler = function (product: Product) {
    const cachedProductsJson = localStorage.getItem('@cart');

    if (!cachedProductsJson) {
      const newCachedProducts: Product[] = [];
      newCachedProducts.push(product);

      localStorage.setItem('@cart', JSON.stringify(newCachedProducts));
      return setCheckCart(true);
    }

    const cachedProducts: Product[] = JSON.parse(cachedProductsJson);
    const isProductInCart = cachedProducts.some(
      cartProduct => product.id === cartProduct.id
    );
    if (isProductInCart) return;

    cachedProducts.push(product);
    localStorage.setItem('@cart', JSON.stringify(cachedProducts));
    return setCheckCart(true);
  };

  return (
    <Template>
      <CartNavigation />
      <Main>
        {products.loading &&
          Array.from({ length: skeletonCount }, (_, i) => {
            return <Skeleton key={i} />;
          })}

        {products.data.map(product => {
          return (
            <ProductCard key={product.id}>
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

              <BuyButton onClick={() => sendToCartHandler(product)}>
                <IoBagHandleOutline size={16} /> Comprar
              </BuyButton>
            </ProductCard>
          );
        })}
      </Main>
    </Template>
  );
}
