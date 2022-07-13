import { ReactNode } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Wrapper } from './styles';

interface Props {
  cartCount: number;
  setShowCartNavigation: (value: boolean) => void;
  children: ReactNode[];
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
