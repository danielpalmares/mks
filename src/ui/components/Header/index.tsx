import { IoCartOutline } from 'react-icons/io5';
import {
  Container,
  Title,
  SubTitle,
  TitleContainer,
  CartButton,
} from './styles';

interface Props {
  cartCount: number;
  setShowCartNavigation: (value: boolean) => void;
}

export function Header({ cartCount, setShowCartNavigation }: Props) {
  return (
    <Container>
      <TitleContainer>
        <Title>MKS</Title>
        <SubTitle>Sistemas</SubTitle>
      </TitleContainer>
      <CartButton
        onClick={() => setShowCartNavigation(true)}
        data-testid="open-cart-button"
      >
        <IoCartOutline size={20} /> {cartCount}
      </CartButton>
    </Container>
  );
}
