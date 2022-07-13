import { IoCloseOutline } from 'react-icons/io5';
import { Product } from '../../../domain/models/product.model';
import { CartProductCard } from '../CartProductCard';
import {
  Backdrop,
  CloseButton,
  FinishButton,
  Navigation,
  NavigationHeading,
} from './styles';

export function CartNavigation() {
  const removeFromCartHandler = function (productId: number) {
    const cachedProductsJson = localStorage.getItem('@cart');
    if (!cachedProductsJson) return;

    const cachedProducts: Product[] = JSON.parse(cachedProductsJson);
    const newCachedProducts = cachedProducts.filter(
      cartProduct => productId !== cartProduct.id
    );
    return localStorage.setItem('@cart', JSON.stringify(newCachedProducts));
  };

  return (
    <Backdrop>
      <Navigation isVisible={true}>
        <NavigationHeading>
          Carrinho <br /> de compras
        </NavigationHeading>
        <CloseButton>
          <IoCloseOutline size={20} />
        </CloseButton>

        <CartProductCard
          id={2}
          name="Apple iPhone 13"
          description="The best phone"
          price="5000"
          quantity={4}
          removeHandler={id => removeFromCartHandler(id)}
          setQuantity={() => 10}
          photo="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1644969385433"
        ></CartProductCard>

        <FinishButton>Finalizar compra</FinishButton>
      </Navigation>
    </Backdrop>
  );
}
