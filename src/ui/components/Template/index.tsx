import { ReactNode } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Wrapper } from './styles';

interface Props {
  children: ReactNode[];
}

export function Template({ children }: Props) {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
}
