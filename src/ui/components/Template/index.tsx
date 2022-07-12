import { Header } from '../Header';
import { Wrapper } from './styles';

interface Props {
  children: JSX.Element;
}

export function Template({ children }: Props) {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
}
