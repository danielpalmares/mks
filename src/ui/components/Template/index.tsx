import { ReactNode } from 'react';
import { CartProduct } from '../../../domain/models/product.model';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Wrapper } from './styles';

interface Props {
  cartCount: number;
  children: ReactNode[];
  setShowCartNavigation: (value: boolean) => void;
}

export function Template({
  cartCount,
  children,
  setShowCartNavigation,
}: Props) {
  return (
    <>
      <Header
        cartCount={cartCount}
        setShowCartNavigation={setShowCartNavigation}
      />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
}
