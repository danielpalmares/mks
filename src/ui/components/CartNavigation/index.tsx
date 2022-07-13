import { IoCloseOutline } from 'react-icons/io5';
import { CartProduct, Product } from '../../../domain/models/product.model';
import { CartProductCard } from '../CartProductCard';
import {
  Backdrop,
  CloseButton,
  FinishButton,
  Navigation,
  NavigationHeading,
  ProductsContainer,
} from './styles';

interface Props {
  cart: CartProduct[];
  setCheckCart: (value: boolean) => void;
  showCartNavigation: boolean;
  setShowCartNavigation: (value: boolean) => void;
}

export function CartNavigation({
  cart,
  setCheckCart,
  showCartNavigation,
  setShowCartNavigation,
}: Props) {
  const removeFromCartHandler = function (productId: number) {
    const cachedProductsJson = localStorage.getItem('@cart');
    if (!cachedProductsJson) return;

    const cachedProducts: CartProduct[] = JSON.parse(cachedProductsJson);
    const newCachedProducts = cachedProducts.filter(
      cartProduct => productId !== cartProduct.id
    );
    localStorage.setItem('@cart', JSON.stringify(newCachedProducts));
    return setCheckCart(true);
  };

  return (
    <Backdrop isVisible={showCartNavigation}>
      <Navigation isVisible={showCartNavigation}>
        <NavigationHeading>
          Carrinho <br /> de compras
        </NavigationHeading>
        <CloseButton onClick={() => setShowCartNavigation(false)}>
          <IoCloseOutline size={20} />
        </CloseButton>

        <ProductsContainer>
          {cart.map(product => {
            return (
              <CartProductCard
                key={product.id}
                removeHandler={() => removeFromCartHandler(product.id)}
                name={product.name}
                description={product.description}
                price={product.price}
                quantity={product.quantity}
                setQuantity={() => 10}
                photo={product.photo}
              />
            );
          })}
        </ProductsContainer>

        <FinishButton onClick={() => setShowCartNavigation(false)}>
          Finalizar compra
        </FinishButton>
      </Navigation>
    </Backdrop>
  );
}
