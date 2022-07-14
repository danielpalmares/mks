import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from '../../../app/_index';

describe('Home page features', () => {
  it('should be rendering the products', async () => {
    render(<App />);

    const productCards = await screen.findAllByTestId('product-card');
    expect(productCards.length).toBeGreaterThan(0);
  });

  it('should send product to cart whenever the user goes for it', async () => {
    render(<App />);

    const buyButton = await screen.findAllByTestId('buy-button');
    user.click(buyButton[0]).then(() => {
      const productInCart = screen.getByTestId('cart-product');
      expect(productInCart).toBeInTheDocument();
    });
  });

  it('should remove product from cart', async () => {
    render(<App />);

    const buyButton = await screen.findAllByTestId('buy-button');
    user.click(buyButton[0]).then(async () => {
      const productInCart = await screen.findByTestId('cart-product');

      const removeProductButton = screen.getByTestId('remove-product-cart');
      user.click(removeProductButton).then(() => {
        expect(productInCart).not.toBeInTheDocument();
      });
    });
  });

  it('should open the cart menu', () => {
    render(<App />);

    const openCartButton = screen.getByTestId('open-cart-button');
    user.click(openCartButton).then(() => {
      const cartNavigation = screen.getByTestId('cart-navigation');
      expect(cartNavigation).toBeInTheDocument();
    });
  });

  it('should close the cart menu', () => {
    render(<App />);

    const closeCartButton = screen.getByTestId('close-cart-button');
    user.click(closeCartButton).then(() => {
      const cartNavigation = screen.getByTestId('cart-navigation');
      expect(cartNavigation).not.toBeInTheDocument();
    });
  });
});
