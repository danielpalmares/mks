import { IoCloseOutline } from 'react-icons/io5';
import { CartProduct } from '../../../domain/models/product.model';
import { toLocalePrice } from '../../utils/functions';
import { CartProductCard } from '../CartProductCard';
import {
  Backdrop,
  CloseButton,
  FinishButton,
  NavBottomContainer,
  Navigation,
  NavigationHeading,
  ProductsContainer,
  TotalContainer,
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

  const setQuantityHandler = function (product: CartProduct, value: number) {
    const newProduct: CartProduct = {
      ...product,
      quantity: value ? value : product.quantity,
    };

    const cachedProductsJson = localStorage.getItem('@cart');
    if (!cachedProductsJson) return;

    const cachedProducts: CartProduct[] = JSON.parse(cachedProductsJson);
    const productIndex = cachedProducts.findIndex(
      productInCart => product.id === productInCart.id
    );

    cachedProducts[productIndex] = newProduct;
    localStorage.setItem('@cart', JSON.stringify(cachedProducts));
    return setCheckCart(true);
  };

  const calcTotal = function () {
    const total = cart.reduce((acc, product) => {
      return acc + parseInt(product.price) * product.quantity;
    }, 0);
    return total.toString();
  };

  return (
    <Backdrop isVisible={showCartNavigation}>
      <Navigation isVisible={showCartNavigation} data-testid="cart-navigation">
        <NavigationHeading>
          Carrinho <br /> de compras
        </NavigationHeading>
        <CloseButton
          onClick={() => setShowCartNavigation(false)}
          data-testid="close-cart-button"
        >
          <IoCloseOutline size={20} />
        </CloseButton>
        <ProductsContainer>
          {cart.map(product => {
            return (
              <CartProductCard
                key={product.id}
                removeHandler={() => removeFromCartHandler(product.id)}
                addQuantity={() =>
                  setQuantityHandler(product, product.quantity + 1)
                }
                removeQuantity={() =>
                  setQuantityHandler(product, product.quantity - 1)
                }
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                photo={product.photo}
                data-testid="cart-product"
              />
            );
          })}
        </ProductsContainer>
        <NavBottomContainer>
          <TotalContainer>
            <span>Total:</span>
            <span>{toLocalePrice(calcTotal())}</span>
          </TotalContainer>
          <FinishButton onClick={() => setShowCartNavigation(false)}>
            Finalizar compra
          </FinishButton>
        </NavBottomContainer>
      </Navigation>
    </Backdrop>
  );
}
